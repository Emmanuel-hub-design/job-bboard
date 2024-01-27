from flask import Blueprint, jsonify, request

profile_bp = Blueprint('profile_bp', __name__)

# Sample data for demonstration purposes
profiles_data = [
    {"id": 1, "content": "Profile 1 content", "user_id": 1},
    {"id": 2, "content": "Profile 2 content", "user_id": 2},
    {"id": 3, "content": "Profile 3 content", "user_id": 1}
]

@profile_bp.route('/profiles', methods=['GET'])
def profiles():
    # You can add any logic or data processing here if needed
    return jsonify(profiles_data)

@profile_bp.route('/profiles', methods=['POST'])
def create_profile():
    data = request.json
    # Assuming 'content' and 'user_id' are provided in the request
    new_profile = {"id": len(profiles_data) + 1, "content": data.get('content'), "user_id": data.get('user_id')}
    profiles_data.append(new_profile)
    return jsonify({"message": "Profile created successfully", "profile": new_profile}), 201
