from flask import Blueprint, jsonify, request

skill_bp = Blueprint('skill_bp', __name__)

# Sample data for demonstration purposes
skills_data = [
    {"id": 1, "skill_name": "Skill 1", "user_id": 1},
    {"id": 2, "skill_name": "Skill 2", "user_id": 2},
    {"id": 3, "skill_name": "Skill 3", "user_id": 1}
]

@skill_bp.route('/skills', methods=['GET'])
def get_skills():
    # You can add any logic or data processing here if needed
    return jsonify(skills_data)

@skill_bp.route('/skills', methods=['POST'])
def create_skill():
    data = request.json
    # Assuming 'skill_name' is provided in the request
    new_skill = {"id": len(skills_data) + 1, "skill_name": data.get('skill_name'), "user_id": data.get('user_id')}
    skills_data.append(new_skill)
    return jsonify({"message": "Skill created successfully", "skill": new_skill}), 201
