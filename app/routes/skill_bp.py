from flask import Blueprint, jsonify

skill_bp = Blueprint('skill_bp', __name__)

@skill_bp.route('/skills')
def skills():
    # You can add any logic or data processing here if needed
    response_data = {"message": "This is the skills content."}
    return jsonify(response_data)
