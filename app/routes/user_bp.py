from flask import Blueprint, jsonify
from models import db, User  # Import db and User using absolute import

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/users', methods=['GET'])
def users():
    users = User.query.all()
    user_list = [{'id': user.id, 'name': user.name} for user in users]
    return jsonify({'users': user_list})
