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


#####Need to implement ajax call to change url to "/close" when we want to close 
## emopers.py

@app.get('/shutdown')
def shutdown():
    shutdown_server()
    return 'Server shutting down...'


def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()
    


#####
if __name__ == "__main__":
	app.run()