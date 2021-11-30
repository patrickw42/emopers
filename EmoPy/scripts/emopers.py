from flask import Flask, render_template, request
app = Flask(__name__, static_folder='static', template_folder='templates',)
import threading, webbrowser
import intervention
import os
import platform

@app.route("/")
def index():
    flag = "firstRun"
    result = intervention.get_emotion_from_camera(flag)
    return render_template('emopers.html', result = result)

@app.route('/validation', methods=['GET', 'POST'])
def runScript():
    flag = request.form['param']
    return intervention.get_emotion_from_camera(flag)

@app.route('/shutdown', methods=['GET', 'POST'])
def shutdown():
    shutdown_func = request.environ.get('werkzeug.server.shutdown')
    if shutdown_func is None:
        raise RuntimeError('Not running werkzeug')
    shutdown_func()    
    return "shutdown"
    
if __name__ == "__main__":
    
    threading.Timer(1.25, lambda: webbrowser.open("http://127.0.0.1:5000/") ).start()
    app.run()