from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
from PyPDF2 import PdfReader
import google.generativeai as genai

# ---------------- APP SETUP ----------------
app = Flask(__name__)
CORS(app)

# Configure SQLite Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///interview_ai.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# ---------------- DATABASE MODEL ----------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

# Create tables
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

# ---------------- UPLOAD RESUME ----------------
@app.route("/upload-resume", methods=["POST"])
def upload_resume():
    file = request.files.get("resume")
    user_id = request.form.get("user_id")

    if not file:
        return jsonify({"message": "No file uploaded"}), 400

    if not user_id:
        return jsonify({"message": "User ID missing"}), 400

    if not file.filename.endswith(".pdf"):
        return jsonify({"message": "Only PDF files allowed"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # Extract text from PDF
    extracted_text = ""
    try:
        reader = PdfReader(file_path)
        for page in reader.pages:
            extracted_text += page.extract_text() or ""
    except Exception:
        return jsonify({"message": "Error reading PDF"}), 500

    # Save extracted text to DB
    new_resume = Resume(
        user_id=int(user_id),
        resume_text=extracted_text
    )

    db.session.add(new_resume)
    db.session.commit()

    return jsonify({"message": "Resume uploaded successfully"}), 200

# ---------------- GENERATE QUESTIONS USING GEMINI ----------------
@app.route("/generate-questions", methods=["POST"])
def generate_questions():
    try:
        data = request.json
        user_id = data.get("user_id")

        resume = Resume.query.filter_by(user_id=user_id).order_by(Resume.uploaded_at.desc()).first()

        if not resume:
            return jsonify({"message": "No resume found"}), 404

        prompt = f"""
        Based on the following resume, generate 5 technical interview questions.

        Resume:
        {resume.resume_text}
        """

        model = genai.GenerativeModel("gemini-2.5-flash")

        response = model.generate_content(prompt)

        return jsonify({
            "questions": response.text
        }), 200

    except Exception as e:
        print("ERROR:", str(e))   # 👈 THIS WILL SHOW REAL ERROR IN TERMINAL
        return jsonify({"message": "Failed to generate questions"}), 500

# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
