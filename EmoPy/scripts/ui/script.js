$( document ).ready(function() {

    let url = window.location.href;

    //fetching the predicted emotion from url
	let predictedEmotion = url.split('#')[1];
	let validationFlag = url.split('#')[2];

	var data = ['intervention_data/happy1.mp4','intervention_data/happy2.mp4','intervention_data/happy3.mp4','intervention_data/happy4.mp4'];

	if(predictedEmotion == 'happiness'){
		$('#message').html("Looks like you are Happy!");
	}else{
		$('#message').html("Looks like you are Angry!");
	}

	//changing the default image to captured image
	$('#user').attr("src","image_data/image.jpg");

	//url array of audio/video. Needs to dynamically create array from excel
	

	//After validation run
	if(validationFlag=="true"){
		/*
		To be built
		Display the image captured after intervention
		*/
		if (confirm('Do you want to continue watching video?')) {
		  loadAnotherVideo(data)
		} else {
		  window.close();
		}
	}

	loadAnotherVideo(data)
});

//function to play the videos randomly from the generated list
function loadAnotherVideo(items) {
	var dataUrl = items[Math.floor(Math.random()*items.length)];
    var video = $('video')[0];
	$('video').html('<source src="'+dataUrl+'" type="video/mp4"></source>' );
	video.load();
}
