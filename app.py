from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
 
app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('account_serviceURL')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/account_service'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Account(db.Model):
    tablename = 'account'

    customerID = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False)
    name = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    customer_email = db.Column(db.String(64), nullable=False)

    def init(self, customerID, username, name, password, customer_email):
        self.customerID = customerID
        self.username = username
        self.name = name
        self.password = password
        self.customer_email = customer_email

    def json(self):
        return {"customerID": self.customerID, "username": self.username, "name": self.name, "password": self.password, "customer_email": self.customer_email}

@app.route("/account")
def get_all():
  return jsonify({"Accounts": [account.json() for account in Account.query.all()]})
 
@app.route("/account/<string:customerID>")
def find_by_username(customerID):
    account = Account.query.filter_by(customerID=customerID).first()
    if account:
        return jsonify({"Account": account.json()})
    return jsonify({"message": "Account not found."}), 404

@app.route("/account", methods=['POST'])
def create_account():
    info = request.get_json()
    customerID = info["customerID"]
    if (Account.query.filter_by(customerID=customerID).first()):
        return jsonify({"message": "An account with customer ID '{}' already exists.".format(customerID)}), 400
 
    data = Account(**info)

    try:
        db.session.add(data)
        db.session.commit()
    except Exception as e:
        print(e)
        print(info)
        return jsonify({"message": "An error occurred creating the account."}), 500

    return jsonify(data.json()), 201

if __name__ == '__main__':
    # app.run(host='0.0.0.0' , port=5004, debug=True)
    app.run(host='localhost' , port=5004, debug=True)


# Testing Data:

# {
#     "customerID" : "123",
#     "username" : "joey_xoxo",
#     "name" : "Joey Tan",
#     "password" : "huhlumpa",
#     "customer_email" : "joey_xoxo@gmail.com"
# }