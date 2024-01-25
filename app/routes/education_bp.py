
from flask import Blueprint, jsonify
from models import db, Education

education_bp = Blueprint('education_bp', __name__)

@education_bp.route('/educations', methods=['GET'])
def educations():
    educations = Education.query.all()
    education_list = [{'id': education.id, 'degree': education.degree, 'institution': education.institution, 'graduation_year': education.graduation_year} for education in educations]
    return jsonify({'educations': education_list})


