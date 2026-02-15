<img width="1280" height="640" alt="image" src="https://github.com/user-attachments/assets/d26da82b-d76e-4a1f-a136-0406a37cb7a3" />


# [Interview Ace] 🎯

## Basic Details

### Team Name: [InterviewAce]

### Team Members
- Member 1: [Meera Krishna S] - [Saintgits College of Engineering(Autonomous)]
- Member 2: [Sulfa Saji] - [Saintgits College of Engineering(Autonomous)]

### Hosted Project Link
[https://interview-ace-8455.onrender.come] (backend)

### Project Description
[Interview Ace is a web application that helps users prepare for job interviews by generating AI-based mock interview questions directly from their uploaded resumes. It provides a personalized practice environment with automated scoring to improve interview readiness.]

### The Problem statement
[Job seekers often struggle to find practice interview questions that are specifically tailored to their unique project experiences and technical skills listed on their resumes, leading to generic and ineffective preparation.]

### The Solution
[We solve this by using automated text extraction (PDF/DOCX) and AI to analyze a user's specific background. The system generates bespoke questions, simulates a real interview interface, and provides an analytics dashboard to track performance.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [Python, JavaScript]
- Frameworks used: [React.js, Flask]
- Libraries used: [Axios, Flask-CORS, Flask-SQLAlchemy, PyPDF2, python-docx]
- Tools used: [VS Code, Git, SQLite]


---

## Features


- Feature 1: [Resume Parsing: Supports PDF formats for seamless data extraction.]
- Feature 2: [AI Question Generation: Dynamically creates technical and behavioral questions based on resume content.]

---

## Implementation

### For Software:

#### Installation
```bash
[# Backend Setup
cd backend
pip install -r requirements.txt
# Frontend Setup
npm install]
```

#### Run
```bash
[# Run Backend
python app.py

# Run Frontend
npm run dev]
```



---

## Project Documentation

### For Software:

#### Screenshots 
Landing page
<img width="1872" height="849" alt="landing-page" src="https://github.com/user-attachments/assets/ea5553af-434e-4fac-ae92-f21a346acaf1" />

Sign-up page
<img width="1881" height="856" alt="signup-page" src="https://github.com/user-attachments/assets/264c8c2e-1906-4fd0-908c-26046211e9ae" />

Login page
<img width="1875" height="851" alt="login-page" src="https://github.com/user-attachments/assets/575cc7f3-ae1b-4a05-816b-09452b48de39" />

Dashboard
<img width="1886" height="856" alt="dashboard" src="https://github.com/user-attachments/assets/8f9f540f-3c6e-4571-92f9-fc5e25591b48" />

Resume-upload page
<img width="1885" height="852" alt="resume" src="https://github.com/user-attachments/assets/fb5aa656-8c72-4a50-a658-1b45dc29a6b5" />

#### Diagrams

**System Architecture:**

The React frontend communicates via Axios with a Flask backend. Flask handles file processing (PyPDF2) and manages the SQLite database via SQLAlchemy for storing extracted text and scores.

**Application Workflow:**

User Uploads Resume → Text Extraction → AI Question Generation
---



## Additional Documentation

### For Web Projects with Backend:
Backend deployed on:
https://interview-ace-8455.onrender.com



##### Endpoints

**GET /api/endpoint**
- **Description:** [Generates interview questions based on the stored resume text.]
- **Response:**
 
```json

  {
  "status": "success",
  "questions": [
    "Tell me about your project using React...",
    "How did you implement the Flask backend?"
  ]
}

```

**POST /api/endpoint**
- **Description:** [Uploads a resume and extracts text.]

- Parameters:

file (file): The resume document (.pdf)
- **Response:**
```json
{
   



  "status": "success",
  "extracted_text": "...",
  "message": "File processed successfully"
}

```


[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[https://drive.google.com/file/d/1jOPWwf0__YFbVkW8vD4Ey9TCG2xzHTkX/view?usp=drive_link]

The video demonstrates the end-to-end flow: logging in, uploading a technical resume,and generating questions.



---

## AI Tools Used 



**Tool Used:** [Gemini / ChatGPT]

**Purpose:** [Assisted in designing the initial Flask-SQLAlchemy database schema.]
Provided logic snippets for text extraction from .pdf files.
**Percentage of AI-generated code:** [15%]

**Human Contributions:**
- Full Frontend development and React routing.
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions



---

## Team Contributions

- [Meera Krishna S]: [Frontend development, UI/UX design, and React Router implementation.]
- [Sulfa Saji]: [Backend development with Flask, SQLite database management, and file processing logic.]

---

## License

This project is licensed under the [MIT] License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ at TinkerHub
---

Made with ❤️ at TinkerHub
