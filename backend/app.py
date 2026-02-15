from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
from PyPDF2 import PdfReader
from docx import Document

app = Flask(__name__)
CORS(app)

# SQLite Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///interview_ai.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# ---------------- DATABASE MODELS ----------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

class Resume(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    filename = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=True)  # extracted text
    upload_time = db.Column(db.DateTime, default=datetime.utcnow)

# ---------------- TEXT EXTRACTION ----------------
def extract_text(file_path):
    text = ""
    if file_path.endswith(".pdf"):
        reader = PdfReader(file_path)
        for page in reader.pages:
            text += page.extract_text() or "" + "\n"
    elif file_path.endswith(".docx"):
        doc = Document(file_path)
        for para in doc.paragraphs:
            text += para.text + "\n"
    else:
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    return text

# ---------------- INIT ----------------
with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "Backend with SQLite is running"

# ---------------- SIGNUP ----------------
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Signup successful"}), 200

# ---------------- LOGIN ----------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404
    if user.password != password:
        return jsonify({"message": "Incorrect password"}), 401

    return jsonify({
        "message": "Login successful",
        "user_id": user.id,
        "name": user.name
    }), 200

# ---------------- UPLOAD RESUME ----------------
@app.route("/upload_resume", methods=["POST"])
def upload_resume():
    if "file" not in request.files:
        return jsonify({"message": "No file uploaded"}), 400

    file = request.files["file"]
    user_id = request.form.get("user_id")
    if not user_id:
        return jsonify({"message": "User ID not provided"}), 400

    # Save file
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)
    filename = f"user_{user_id}_{file.filename}"
    file_path = os.path.join(upload_dir, filename)
    file.save(file_path)

    # Extract text
    content = extract_text(file_path)

    # Save in DB
    resume = Resume(user_id=user_id, filename=filename, content=content)
    db.session.add(resume)
    db.session.commit()

    return jsonify({"message": "Resume uploaded successfully", "filename": filename}), 200

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
