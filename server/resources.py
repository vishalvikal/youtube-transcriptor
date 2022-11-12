# importing the modules
from youtube_transcript_api import YouTubeTranscriptApi
from englisttohindi.englisttohindi import EngtoHindi
from flask import jsonify;
from flask import Flask;
from flask import request;
from googletrans import Translator;
translator = Translator();
#activating the cors
from flask_cors import CORS;
app = Flask(__name__)
CORS(app);
#dubbing process
def dubbing_processe(id):
    srt = YouTubeTranscriptApi.get_transcript(id)
    converted = [];
    for i in srt:
        converted_text =convert_to_hindi(i["text"])
        res = {"text":converted_text,"start":i["start"],"duration":i["duration"]};
        converted.append(res);
    print(converted)
    # print(srt)
    return converted
def convert_to_hindi(text):
    if len(text) == 1:
        return None;
    else: return translator.translate(text).text;

#get the GET or POST request
@app.route('/api/translate',methods=['GET','POST'])

def hello():
   
    response = request.get_json();
    if len(response['id']) == 0:
        return jsonify({"error":"error"});
    else:

        result = dubbing_processe(response['id'])
        return jsonify(result)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)