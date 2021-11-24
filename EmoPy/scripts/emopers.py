from flask import Flask, render_template, request
app = Flask(__name__, static_folder='static', template_folder='templates',)

import intervention

@app.route("/")
def index():
	flag = "firstRun"
	result = intervention.get_emotion_from_camera(flag)
	return render_template('emopers.html', result = result)

@app.route('/validation', methods=['GET', 'POST'])
def runScript():
    flag = request.form['param']
    return intervention.get_emotion_from_camera(flag)

if __name__ == "__main__":
	app.run()