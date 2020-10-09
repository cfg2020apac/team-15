
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from os import environ


import hashlib, binascii, os
import basehash
import json


def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')


print(hash_password("Password"))