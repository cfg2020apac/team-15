from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://admin:@cluster0.cbya2.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route("/get_message", methods=['POST'])
def getChat():
    data = request.get_json()
    send_person = data["sendBy"]
    receive_person = data["receivedBy"]
    chat_info = mongo.db.CentralisedChat
    s = chat_info.find({"receivedBy": receive_person})
    t = chat_info.find({"sendBy": send_person})
    if s and t:
        output = {"sendBy": "sendby", "content":"content_info", "receviedBy": "receive"}
    return jsonify({"result": output})

@app.route("/send_message", methods=['POST'])
def sendChat():
    data = request.get_json()
    send_person = data["sendBy"]
    receive_person = data["receivedBy"]
    content = data["content"]

    chat_info = mongo.db.CentralisedChat

    s = chat_info.find({"receivedBy": receive_person})
    t = chat_info.find({"sendBy": send_person})
    if s and t:
        s['content'].append(content)
        chat_info.insert({'sendBy': send_person, 'content': s['content'], 'receivedBy': receive_person})
        return 'success', 200
    else:
        chat_info.insert({'sendBy': send_person, 'content': [content], 'receivedBy': receive_person})
        return 'success', 200
    return 'error', 400


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)