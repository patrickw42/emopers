# Emopers
<p>Emotion intervention through Audio/Video after emotion Prediction.</p>

## Instruction to setup the Emoper's

<p>You must have Python 3.6.6 if it's not there.
you can directly install from the [Python website] (https://www.python.org/downloads/release/python-366/)</p>

Clone the emopers git repository into a new directory

```
git clone https://github.com/WCU-CS-CooperLab/emopers.git
```

Change directory to emopers

```
cd emopers
```

Install Virtual Environment (unless already installed)

```
pip install virtualenv       
```

Create Virtual Environment

```
virtualenv -p python3.6 venv
```

Activate  Virtual Environment (Windows)

```
source venv/Scripts/activate
```


Activate  Virtual Environment (Mac)

```
source venv/bin/activate
````
Install the emopers dependencies

```
pip install -r requirements.txt
```


(Windows specific) Open emopers\venv\Lib\site-packages\keras\engine\saving.py and on lines 224, 229, 233, and 296 comment out ".decode("utf8")"  so they look like:
 ```
 model_config = json.loads(model_config.decode)#('utf-8'))
 original_keras_version = model_weights_group['keras_version']#.decode('utf8')
 original_backend = model_weights_group['backend']#.decode('utf8')
 training_config = json.loads(training_config)#.decode('utf-8'))
 ```


We recommend that users have Chrome set as their default web browser but this is not required.

Click on Emoper's.Bat to start the application
