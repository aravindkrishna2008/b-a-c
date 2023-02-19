from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import whisper
model = whisper.load_model("base")


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
        return jsonify(result.text)
        

app.run(host='0.0.0.0', port="5001", debug=True)