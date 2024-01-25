from flask import Blueprint, jsonify

resume_bp = Blueprint('resume_bp', __name__)

@resume_bp.route('/resumes')
def resumes():
    # You can add any logic or data processing here if needed
    response_data = {"message": "This is the resume content."}
    return jsonify(response_data)
