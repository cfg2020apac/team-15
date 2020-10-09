from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ
from bson.json_util import dumps

import hashlib, binascii, os
import basehash
import json


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE"

mongo = PyMongo(app)
CORS(app)

@app.route("/get_profile/<string:userID>", methods=['GET'])
def getProfile(userID):
    account = mongo.db.Account
    data = account.find_one({'username' : userID})
    return dumps(data)

@app.route("/allget_profile/", methods=['GET'])
def getAllProfile():
    account = mongo.db.Account
    data = account.find()
    return dumps(data)

@app.route("/create_profile", methods=['POST'])
def createProfile():
    chat_info = mongo.db.Account
    chat_info.insert({'username': "AD23458", 'email': "AD12345@gmail.com", 'password':"", 'contactNo': 12345678, 'typeOfAccount': "Admin", "firstName": "Test Name", "lastName": "Last Test"})
    return 'success', 200



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)

