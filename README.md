# Interview Ace – AI-Powered Mock Interviews

![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)
![React](https://img.shields.io/badge/React-18%2B-blue.svg?logo=react&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-%23347deb.svg?logo=flask&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3-orange.svg?logo=sqlite&logoColor=white)

##🎯 Objective

Interview AI Assistant is a web application that helps users prepare for job interviews by generating AI-based mock interview questions from their uploaded resumes.

Users can:
Upload their resumes in PDF, DOCX, or TXT format.
Receive AI-generated mock interview questions based on the resume content.
Submit answers and get scores to evaluate performance.
Track analytics to identify strengths and weaknesses.
It’s a smart, interactive, and personalized tool for interview preparation.

Project Scope
🔹 1. Resume Upload & Text Extraction

Users can upload resumes in .pdf, .docx, or .txt formats.
The backend extracts text automatically for AI question generation.
Extracted content is stored in SQLite for further analysis.
2. Mock Interview Generation

AI generates relevant interview questions based on resume content.
Users can type responses in an interactive UI.
Responses are evaluated with a simple scoring system (0–100).
3. Performance Analytics

Displays scores on a clean Analytics dashboard.
Helps users track progress and identify areas for improvement.

🧠 Conceptual Background

The application uses resume content to generate interview questions dynamically.
Resume → Text Extraction → AI-Based Question Generation → User Answers → Score → Analytics
This pipeline helps simulate real interview scenarios and provides measurable performance feedback.

🧩 Tech Stack
| Category        | Tools & Frameworks                                  |
| --------------- | --------------------------------------------------- |
| Frontend        | React.js, React Router, Axios                       |
| Backend         | Python, Flask, Flask-CORS, Flask-SQLAlchemy         |
| Database        | SQLite                                              |
| File Processing | PyPDF2, python-docx                                 |
| UI/UX           | CSS-in-JS, background images, responsive components |

📊 Results & Insights

| Feature        | Description             | Outcome                       |
| -------------- | ----------------------- | ----------------------------- |
| Resume Upload  | PDF, DOCX, TXT          | Extracted text stored in DB   |
| Mock Questions | AI-generated per resume | Interactive answer submission |
| Scoring        | 0–100 per attempt       | Users track performance       |
| Analytics      | Visual dashboard        | Shows score summary           |

🛠️ Usage

1.Open the landing page → Sign up / Log in.
2.Upload a resume in supported formats.
3.Generate mock interview questions.
4.Answer questions and submit.
5.View score on Analytics dashboard

👩‍💻 Project Team
Meera Krishna S,Sulfa Saji
