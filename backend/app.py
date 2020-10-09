from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
import json
from bson import json_util
from bson.raw_bson import RawBSONDocument
import bsonjs
from bson.json_util import dumps

 
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority"
mongo = PyMongo(app)

CORS(app)

# getCourses
@app.route("/programs" , methods = ["POST"])
def getAll():
    database = mongo.db.program
    database.insert({"programId" : 3})
    programs = mongo.db.program.find({})
    return dumps(programs)
    # return jsonify({'result' : programs })
    # return jsonify(json.dumps(programs, default=json_util.default))

# getProgramWithReviews 
# @app.route("/programs/reviews")
# def getProgramWithReview():
#     result = {} 
#     for data in mongo.db.program.find({}):
#         result[data['programName']] = mongo.db.dataAnalytics.find({'programId': data['programId']})
#     return jsonify(result)

@app.route("/programs/progression")
def getProgramWithProgression():
    result = {}
    for data in mongo.db.program.find({""}):
        progression = mongo.db.program.find({'programId' : data['programId']})
        result[data['programName']] = progression
    return jsonify(result)

@app.route("/programs/dataAnalytics")
def getProgramWithDataAnalytics():
    result = {}
    for data in mongo.db.program.find({}):
        dataAnalytics = mongo.db.dataAnalytics.find({'programId': data['programId']})
        result[data['programName']] = dataAnalytics
    return jsonify(result)

# @app.route("/programs/<studentId:studentId>")
# def getProgramEnroll():




if __name__ == '__main__':
    app.run(host='localhost' , port=5004, debug=True)

