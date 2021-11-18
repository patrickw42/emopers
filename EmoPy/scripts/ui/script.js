$(document).ready(function () {
  let url = window.location.href;

  let predicted_emotion = url.split("#")[1];

  //let validationFlag = url.split('#')[2];

  var data = [
    "intervention_data/happy1.mp4",
    "intervention_data/happy2.mp4",
    "intervention_data/happy3.mp4",
    "intervention_data/happy4.mp4",
  ];

  //control html output displaying intervention video (after first run)
  if (url.split("#").length == 2) {
    if (predicted_emotion == "happiness")
      $("#message").html("Looks like you are Happy!");
    else $("#message").html("Looks like you are Angry!");
    //changing the default image to captured image
    $("#user").attr("src", "image_data/image.jpg");
    //implement a timer and window.close() to close out browser after video.
  }
  //url array of audio/video. Needs to dynamically create array from excel

  //After validation run output both images and their detected emotions
  //  before and after the intervention
  if (url.split("#").length == 3) {
    /*
		To be built
		Display the image captured after intervention
		*/
    let follow_up_emotion = url.split("#")[2];
    
    $("#user").attr("src", "image_data/image2.jpg");
    
    //if intervention makes them happy display a motivating quote video and exit:
    if (follow_up_emotion == "happiness") {
    //still need to implement playing 2nd video with motivating quotes as well as
    // a timeout and window.close() after video ends.       
    }

    //either way output the results of both evals (before and after intervention)
    // after the 2nd eval above main containers
    $("#message").html(
      "Your predicted emotions was " +
        predicted_emotion +
        " before intervention, and it was " +
        follow_up_emotion +
        " after the intervention."
    );

    //if intervention doesn't work ask if they want to watch more videos.
    if (follow_up_emotion == "anger") {
        if (confirm("Do you want to continue watching video?")) 
            loadAnotherVideo(data);
        else 
            window.close();
    }
  }

  loadAnotherVideo(data);
});

//function to play the videos randomly from the generated list
function loadAnotherVideo(items) {
  var dataUrl = items[Math.floor(Math.random() * items.length)];
  var video = $("video")[0];
  $("video").html('<source src="' + dataUrl + '" type="video/mp4"></source>');
  video.load();
}
