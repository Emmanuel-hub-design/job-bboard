from flask import Blueprint, jsonify

profile_bp = Blueprint('profile_bp', __name__)

@profile_bp.route('/profiles')
def profiles():
    # You can add any logic or data processing here if needed
    response_data = {"message": "This is the profile content."}
    return jsonify(response_data)
