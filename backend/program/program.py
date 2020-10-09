from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
import json
from bson import json_util
from bson.raw_bson import RawBSONDocument
import bsonjs
from bson.json_util import dumps
from bson.json_util import loads

 
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority"
mongo = PyMongo(app)

CORS(app)

# getCourses
@app.route("/programs")
def getAll():
    programs = mongo.db.program.find({})
    return dumps(programs)
    # return jsonify({'result' : programs })
    # return jsonify(json.dumps(programs, default=json_util.default))

@app.route("/programs/<int:programId>")
def getProgramWithId(programId):
    program = mongo.db.program.find_one({"programId" : programId})
    return dumps(program)


@app.route("/programs/dataAnalytics")
def getProgramWithDataAnalytics():
    result = {'result':[]}
    for data in mongo.db.program.find({}):
        dataAnalytics = mongo.db.DataAnalytics.find({'programId': data['programId']})
        for item in dataAnalytics:
            result['result'].append({data['programName']: item['ratings']})
    return dumps(result)

@app.route("/programs/enroll/<int:studentId>")
def getProgramEnroll(studentId):
    result = {}
    progressionOfStudent = mongo.db.progression.find({"studentId": studentId})
    for item in progressionOfStudent:
        sessionid = item["sessionId"]
        print(sessionid)
        session = mongo.db.session.find_one({"sessionId" : sessionid})
        programId = session["programId"]
        program = json.loads(getProgramWithId(programId))
        result[program["programName"]] = {"currentSessionNo" : session["currentSessionNo"], "totalSessionNo" : session["totalSessionNo"] }
    return jsonify(result)

@app.route("/programs/add" , methods=["POST"])
def addProgram():
    info = request.get_json
    insert = mongo.db.program.insert({"programId" : info['programId'],"programType" : info['programType'], "programName" : info['programName'] , "targetNoOfVolunteers" : info['targetNoOfVolunteers'], "actualNoOfVolunteers" : info['actualNoOfVolunteers'],
        "targetNoOfStudents" : info['targetNoOfStudents'], "actualNoOfStudents" : info['actualNoOfStudents'] ,"attendee" : info['attendee']}) 
    if(insert):
        return'success' , 200
    return 'failure' , 400

if __name__ == '__main__':
    app.run(host='localhost' , port=5004, debug=True)





# mongo.db.session.insert({"programId" : count , "programName" : "Assure that every student is fully equipped." , "attendee" : count,
#         "courseMaterials" : "English Lesson" , "studentSubmissions" : count, "programId" : count, "dataAnalyticsId" : count,
#          "progressionId" : count , "milestonesId" : count, "totalSessionNo" : count }) 