# Emopers
<p>Emotion intervention through Audio/Video after emotion Prediction.</p>

## Instruction to setup the Emoper's

<p>You must have Python 3.6.6 if it's not there.
you can directly install from the [Python website] (https://www.python.org/downloads/release/python-366/)</p>

Clone the emopers git repository<br>
https://github.com/WCU-CS-CooperLab/emopers.git

Change directory to emopers<br>
cd emopers

Install Virtual Environment (unless already installed)<br>
pip install virtualenv       

Create Virtual Environment<br>
virtualenv -p python3.6 venv

Activate  Virtual Environment (Windows)<br>
source venv/Scripts/activate


Activate  Virtual Environment (Mac)<br>
source venv/bin/activate

Install the emopers dependencies<br>
pip install -r requirements.txt

(Windows specific)<br>
Open emopers\venv\Lib\site-packages\keras\engine\saving.py and on lines 224, 229, 233, and 296 comment out .decode("utf8") 
