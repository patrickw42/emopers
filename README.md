Emopers
Emotion intervention through Audio/Video after emotion Prediction.

Instruction to setup the Emoper's

You must have Python 3.6.6 if it's not there.
you can directly install from the [Python website] (https://www.python.org/downloads/release/python-366/)

Clone the emopers git repository
https://github.com/WCU-CS-CooperLab/emopers.git

Change directory to emopers
cd emopers

Install Virtual Environment (unless already installed)
pip install virtualenv       

Create Virtual Environment
virtualenv -p python3.6 venv

Activate  Virtual Environment (Windows)
source venv/Scripts/activate

Activate  Virtual Environment (Mac)
source venv/bin/activate

Install the emopers dependencies
pip install -r requirements.txt

(Windows specific?)
Open emopers\venv\Lib\site-packages\keras\engine\saving.py and on lines 224, 229, 233, and 296 comment out .decode("utf8") 

Run the intervention by clicking on Emoper's.bat
