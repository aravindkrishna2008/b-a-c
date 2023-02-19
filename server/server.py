from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config["IMAGE_UPLOADS"] = os.getcwd()

@app.route('/', methods=['GET'])
def hello():
    return jsonify("Hello World!")

@app.route('/upload-file/', methods=['POST'])
def uploadFile():
    if request.method == 'POST':
        file = request.files['file']
        print("File taken")
        file.save(os.path.join(app.config["IMAGE_UPLOADS"], file.filename))
        return jsonify("File uploaded")
        

app.run(host='0.0.0.0', port="5001", debug=True)