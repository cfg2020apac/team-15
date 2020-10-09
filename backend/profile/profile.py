from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ
from bson.json_util import dumps

import hashlib, binascii, os
import basehash
import json


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongo = PyMongo(app)
CORS(app)

@app.route("/get_profile/<string:userID>", methods=['GET'])
def getProfile(userID):
    account = mongo.db.Account
    data = account.find_one({'username' : userID})
    return dumps(data)

@app.route("/allget_profile/", methods=['GET'])
def getAllProfile(userID):
    account = mongo.db.Account
    data = account.find()
    return dumps(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)

