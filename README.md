# Emopers
<p>Emotion intervention through Audio/Video after emotion Prediction.</p>
<p>Emopers tool is a single-page python application which performs emotional intervention. Our application uses EmoPy as a background application for detecting the emotions of an individual. The overall idea of the project is to provide an intervention for negative emotions like (Anger, sad, frustration etc) based on the emotional subset available in Emopy. We are focusing on two emotions in our project Anger and happiness, where Anger is the negative emotion which is targeted for intervention in the attempt to change the emotional state from Anger to happiness.</p>

## Instruction to setup the Emoper's (Windows)

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

Activate  Virtual Environment

```
source venv/Scripts/activate
```

Install the emopers dependencies

```
pip install -r requirements.txt
```

Open emopers\venv\Lib\site-packages\keras\engine\saving.py and on lines 224, 229, 233, and 296 comment out ".decode("utf8")"  so they look like:

 ```
 model_config = json.loads(model_config.decode)#('utf-8'))
 original_keras_version = model_weights_group['keras_version']#.decode('utf8')
 original_backend = model_weights_group['backend']#.decode('utf8')
 training_config = json.loads(training_config)#.decode('utf-8'))
 ```

We recommend that users have Chrome set as their default web browser but this is not required.

Click on Emoper's.bat to start the application

## Instruction to setup the Emoper's (Mac)

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

Activate  Virtual Environment

```
source venv/bin/activate
```

Install the emopers dependencies

```
pip install -r requirements.txt
```

Open emopers\venv\lib\python3.6\site-packages\keras\engine\saving.py and on lines 224, 229, 233, and 296 comment out ".decode("utf8")"  so they look like:

 ```
 model_config = json.loads(model_config.decode)#('utf-8'))
 original_keras_version = model_weights_group['keras_version']#.decode('utf8')
 original_backend = model_weights_group['backend']#.decode('utf8')
 training_config = json.loads(training_config)#.decode('utf-8'))
 ```

We recommend that users have Chrome set as their default web browser but this is not required.

Open emopers\Emoper's.sh and make changes regarding emopers\EmoPy\scripts\emopers.py file location

run the command from terminal

```
sh Emoper's.sh
```
