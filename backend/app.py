#Import Flask class and jsonify function from the Flask library
# The Flask class is the primary class to make a Flask applicarion
# jsonify converts Python objects into JSON format
from flask import Flask, jsonify
# Imports SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
# Import dotenv
from dotenv import load_dotenv
import os

load_dotenv('.env')

# creates an instance of the Flask class
app = Flask(__name__)

# This is to congigure the app
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('MYSQL_KEY')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# This is defining a route that executes the get_articles() function 
# methods = ['GET']: specifies that this route should respond to HTTP GET requests
@app.route('/', methods = ['GET'])
def get_articles():
  return jsonify({"Hello":"World"})

# Runs the flask app
if __name__ == "__main__":
  app.run(debug=True)