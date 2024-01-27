from flask import Blueprint, jsonify, request
from models import Education, db

education_bp = Blueprint('education_bp', __name__)

@education_bp.route('/educations', methods=['GET'])
def educations():
    try:
        educations = Education.query.all()
        education_list = [{'id': education.id, 'degree': education.degree, 'institution': education.institution, 'graduation_year': education.graduation_year} for education in educations]
        return jsonify({'educations': education_list}), 200
    except Exception as e:
        return jsonify({'error': 'Failed to retrieve educations', 'details': str(e)}), 500

@education_bp.route('/educations', methods=['POST'])
def create_education():
    try:
        data = request.json
        new_education = Education(
            degree=data['degree'],
            institution=data['institution'],
            graduation_year=data['graduation_year']
        )
        db.session.add(new_education)
        db.session.commit()
        return jsonify({'message': 'Education created successfully', 'education': {
            'id': new_education.id,
            'degree': new_education.degree,
            'institution': new_education.institution,
            'graduation_year': new_education.graduation_year
        }}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to create education', 'details': str(e)}), 500

