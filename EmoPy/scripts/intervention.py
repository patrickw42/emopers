# This file allows to perform Emotion detection on frames grabbed from the webcam
# using OpenCV-Python
import os
import webbrowser
os.environ['KERAS_BACKEND']='tensorflow'
import tensorflow as tf
import cv2
from EmoPy.src.fermodel import FERModel
import time

#Function to remove Tensorflow warrnings
def tf_no_warning():
    try:

        tf.logging.set_verbosity(tf.logging.ERROR)
        os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

    except ImportError:
        pass
tf_no_warning()

def capture_image(video_capture, file):

    # Capturing a smaller image fçor speed purposes
    video_capture.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    video_capture.set(cv2.CAP_PROP_FRAME_HEIGHT, 360)
    video_capture.set(cv2.CAP_PROP_FPS, 15)

    if video_capture.isOpened():
        ret = False
        print("Capturing image ...")

        counter = 0
        max_tries = 100
        while not ret and video_capture.isOpened():
            counter += 1
            if counter >= max_tries:
                return None

            # Capture frame-by-frame
            ret, frame = video_capture.read()

        # Save the captured frame on disk
        cv2.imwrite(file, frame)
        print("Image written to: ", file)

    else:
        print("Cannot access the webcam")

    video_capture.release()
    return frame

def get_emotion_from_camera():

    directory = os.getcwd() 

    # Specify the camera which you want to use. The default argument is '0'
    video_capture = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    file = directory + '/EmoPy/scripts/image_data/image.jpg'
    frame = capture_image(video_capture, file)

    if frame is not None:
        # Can choose other target emotions from the emotion subset defined in
        # fermodel.py in src directory. The function
        # defined as `def _check_emotion_set_is_supported(self):`
        target_emotions = ['anger', 'happiness']
        model = FERModel(target_emotions, verbose=True)

        frame_string = model.predict(file)
        url = directory + '/EmoPy/scripts/Emopers.html#{}'.format(frame_string)
        webbrowser.open_new_tab(url)
    else:
        print("Image could not be captured")
    
   # if user is happy after showing their image and motivating quotes we exit the 
    if (frame_string == 'happiness'):
        quit()
    ###include timeout and run 2nd webcam eval follow_up_frame:
    #adjust timeout based on length of videos played.
    time.sleep(3)
    follow_up_capture = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    follow_up_file = directory + '/EmoPy/scripts/image_data/image2.jpg'
    frame = capture_image(follow_up_capture, follow_up_file) 
    if frame is not None:
        # Can choose other target emotions from the emotion subset defined in
        # fermodel.py in src directory. The function
        # defined as `def _check_emotion_set_is_supported(self):`
        target_emotions = ['anger', 'happiness']
        model = FERModel(target_emotions, verbose=True)
        follow_up_frame_string = model.predict(follow_up_file)
        follow_up_url = directory + '/EmoPy/scripts/Emopers.html#{}#{}'.format(frame_string, follow_up_frame_string)
        webbrowser.open_new_tab(follow_up_url)
    else:
        print("Image could not be captured")


if __name__ == '__main__':
    get_emotion_from_camera()
