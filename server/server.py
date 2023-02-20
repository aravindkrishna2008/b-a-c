from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import whisper
from pymongo import MongoClient
from bson import json_util
import json
model = whisper.load_model("base")
client = MongoClient('mongodb+srv://veerrohitv08:CCbPtgZhfIrqnEKC@translations.vydtieu.mongodb.net/?retryWrites=true&w=majority')
db = client.translations
translations = db.translations

app = Flask(__name__)
CORS(app)

app.config["IMAGE_UPLOADS"] = os.getcwd()

@app.route('/', methods=['GET'])
# just a basic hello function
def ping():
    return jsonify("pong")

@app.route('/upload-file/', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        print("File taken")
        file.save(os.path.join(app.config["IMAGE_UPLOADS"], file.filename))
        audio = whisper.load_audio(file.filename)
        audio = whisper.pad_or_trim(audio)

        # make log-Mel spectrogram and move to the same device as the model
        mel = whisper.log_mel_spectrogram(audio).to(model.device)

        # detect the spoken language
        _, probs = model.detect_language(mel)
        print(f"Detected language: {max(probs, key=probs.get)}")

        # decode the audio
        options = whisper.DecodingOptions(fp16=False)
        result = whisper.decode(model, mel, options)

        # print the recognized text
        print(result.text)
        os.remove(result.filename)
        return jsonify(result.text)
        
@app.route('/translations/', methods=['GET'])
def get_translations():
    all_translations = translations.find()
    json_data = json_util.dumps(all_translations)
    return jsonify(json.loads(json_data))

@app.route('/add_translation', methods=['POST'])
def add_translation():
    text = request.json['text']
    # add this text to the database
    return jsonify(translations.insert_one({"text": text}))

app.run(host='0.0.0.0', port="5001", debug=True)