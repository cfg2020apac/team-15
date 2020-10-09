from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ


import hashlib, binascii, os
import basehash
import json


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"

mongo = PyMongo(app)


@app.route("/validate_password", methods=['POST'])
def validate():
    data = request.get_json()
    #To get UserID
    username = data["username"]
    password = data["password"]

    account_type = username[:2]
    #student = ST, volunteer = VL, admin = AD
    if account_type == "ST":
        account = mongo.db.account_student
    elif account_type == "VL":
        account = mongo.db.account_volunteer
    else:
        account = mongo.db.account_admin

    user_account = account.find_one({'_username': username})
    updated_hash_pwd = hash_password(password)
    status = verify_password(updated_hash_pwd, user_account['password'])
    if status:
        return 'success', 200
    return 'error', 400

def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')

def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    salt = stored_password[:64]
    stored_password = stored_password[64:]
    pwdhash = hashlib.pbkdf2_hmac('sha512', 
                                  provided_password.encode('utf-8'), 
                                  salt.encode('ascii'), 
                                  100000)
    pwdhash = binascii.hexlify(pwdhash).decode('ascii')
    return pwdhash == stored_password


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
