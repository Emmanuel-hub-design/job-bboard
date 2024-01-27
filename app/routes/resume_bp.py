from flask import Blueprint, jsonify, request

resume_bp = Blueprint('resume_bp', __name__)

# Sample data for demonstration purposes
resumes_data = [
    {"id": 1, "content": "Resume 1 content", "user_id": 1},
    {"id": 2, "content": "Resume 2 content", "user_id": 2},
    {"id": 3, "content": "Resume 3 content", "user_id": 1}
]

@resume_bp.route('/resumes', methods=['GET'])
def resumes():
    # You can add any logic or data processing here if needed
    return jsonify(resumes_data)

@resume_bp.route('/resumes', methods=['POST'])
def create_resume():
    data = request.json
    # Assuming 'content' and 'user_id' are provided in the request
    new_resume = {"id": len(resumes_data) + 1, "content": data.get('content'), "user_id": data.get('user_id')}
    resumes_data.append(new_resume)
    return jsonify({"message": "Resume created successfully", "resume": new_resume}), 201
