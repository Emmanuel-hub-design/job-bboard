from flask import Blueprint, jsonify, request
from models import Experience, db

experience_bp = Blueprint('experience_bp', __name__)

@experience_bp.route('/experiences', methods=['GET'])
def experiences():
    try:
        # Retrieve experiences from the database
        experiences = Experience.query.all()

        # Prepare the experience data for JSON serialization
        experience_list = [{
            'id': experience.id,
            'position': experience.position,
            'company': experience.company,
            'start_date': experience.start_date.strftime('%Y-%m-%d') if experience.start_date else None,
            'end_date': experience.end_date.strftime('%Y-%m-%d') if experience.end_date else None,
            'user_id': experience.user_id  # Include user_id in the response
        } for experience in experiences]

        # Return the experiences as JSON response
        return jsonify({'experiences': experience_list}), 200

    except Exception as e:
        # Log the error for debugging purposes
        print(f"Error retrieving experiences: {str(e)}")
        # Return an error response
        return jsonify({'error': 'Failed to retrieve experiences'}), 500

@experience_bp.route('/experiences', methods=['POST'])
def create_experience():
    try:
        data = request.json
        new_experience = Experience(
            position=data['position'],
            company=data['company'],
            start_date=data['start_date'],
            end_date=data['end_date'],
            user_id=data['user_id']
        )
        db.session.add(new_experience)
        db.session.commit()
        return jsonify({'message': 'Experience created successfully', 'experience': {
            'id': new_experience.id,
            'position': new_experience.position,
            'company': new_experience.company,
            'start_date': new_experience.start_date.strftime('%Y-%m-%d') if new_experience.start_date else None,
            'end_date': new_experience.end_date.strftime('%Y-%m-%d') if new_experience.end_date else None,
            'user_id': new_experience.user_id
        }}), 201
    except Exception as e:
        # Log the error for debugging purposes
        print(f"Error creating experience: {str(e)}")
        # Return an error response
        return jsonify({'error': 'Failed to create experience'}), 500
