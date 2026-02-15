import sqlite3

conn = sqlite3.connect("interview_ai.db")
cursor = conn.cursor()

# See all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
print("Tables:", cursor.fetchall())

# See users
cursor.execute("SELECT * FROM user;")
print("Users:", cursor.fetchall())

# See resumes
cursor.execute("SELECT * FROM resume;")
for row in cursor.fetchall():
    print("Resume:", row)

conn.close()
