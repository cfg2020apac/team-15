from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ
from datetime import datetime
import random

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE"

mongo = PyMongo(app)

@app.route("/get_message", methods=['POST'])
def getChat():
    data = request.get_json()
    send_person = data["sendBy"]
    receive_person = data["receivedBy"]
    chat_info = mongo.db.CentralisedChat

    s = chat_info.find_one({"receivedBy": receive_person})
    t = chat_info.find_one({"sendBy": send_person})
    if s and t:
        output = {'sendBy': s['sendBy'], 'content': s['content'], 'receivedBy': s['receivedBy'], 'chatID': s['chatID'], 'timeStamp': s['timeStamp']}
    return jsonify({"result": output})

@app.route("/send_message", methods=['POST'])
def sendChat():
    data = request.get_json()
    send_person = data["sendBy"]
    receive_person = data["receivedBy"]
    content = data["content"]

    chat_info = mongo.db.CentralisedChat

    s = chat_info.find_one({"receivedBy": receive_person})
    t = chat_info.find_one({"sendBy": send_person})
    info = []
    today = datetime.now()
    chatID = random.randint(1, 1000)
    if s and t:
        data = s["Content"]
        info.append(data)
        chat_info.insert({'sendBy': int(send_person), 'content': info, 'receivedBy': int(receive_person), 'chatID': chatID, "timeStamp": str(today)})
        return 'success', 200
    else:
        chat_info.insert({'sendBy': int(send_person), 'content': content, 'receivedBy': int(receive_person), 'chatID': chatID, "timeStamp": str(today)})
        return 'success', 200
    return 'error', 400


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)