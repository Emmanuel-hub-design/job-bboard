import os
from flask import Flask, send_from_directory

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db
from routes.education_bp import education_bp 


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/ebaraka/Development/code/phase 4/job-bboard/app/db/job_board.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
  # Move this line after app is created
db.init_app(app)
CORS(app)

# Import models using absolute import
from models import User, Skill, Education, Experience, Profile, CoverLetter, Resume

# Register blueprints using absolute import
from routes.user_bp import user_bp
from routes.skill_bp import skill_bp
from routes.education_bp import education_bp
from routes.experience_bp import experience_bp
from routes.profile_bp import profile_bp
from routes.coverletter_bp import coverletter_bp
from routes.resume_bp import resume_bp

app.register_blueprint(user_bp)
app.register_blueprint(skill_bp)
app.register_blueprint(education_bp)
app.register_blueprint(experience_bp)
app.register_blueprint(profile_bp)
app.register_blueprint(coverletter_bp)
app.register_blueprint(resume_bp)


# Serve React build in production
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(f"./my-job-board-app/build/{path}"):
        return send_from_directory('./my-job-board-app/build', path)
    else:
        return send_from_directory('./my-job-board-app/build', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
