from flask import Blueprint, jsonify

experience_bp = Blueprint('experience_bp', __name__)

@experience_bp.route('/experiences')
def experiences():
    # You can add any logic or data processing here if needed
    response_data = {"message": "This is the experience content."}
    return jsonify(response_data)
