$( document ).ready(function() {
	    console.log(emotion);
	var data = ['static/intervention_data/happy1.mp4','static/intervention_data/happy2.mp4','static/intervention_data/happy3.mp4','static/intervention_data/happy4.mp4'];

	//changing the default image to captured image
	$('#user').attr("src","static/image_data/image.jpg");

	if(emotion == 'Happy'){
		//display motivational quote
		window.close();
	}else{
		loadAnotherVideo(data)
			//Run the script after video finished playing
		$('video')[0].addEventListener('ended',myHandler,false);
	    function myHandler(e) {
	        postData('validationRun');
	    }
	}

    //Function to run the script for followup
    function postData(input) {
	    $.ajax({
	        type: "POST",
	        url: "/validation",
	        data: { param: input },
	        success: validationRun
	    });
	}

	//Function will run when the ajax request complete
	function validationRun(response){
		if(response == "Angry"){
			if (confirm('Do you want to continue watching video?')) {
				$('#right-container').html('<img id="follow" src="static/image_data/followUp.jpg" />');
				$('#follow').delay(3000).queue(function(n) {
				 	loadAnotherVideo(data)
				});
			} else {
			  window.close();
			}
		}else{
			$('#message').html("Looks like your emotion changed from Angry to Happy!");
			$('#right-container').html('<img id="follow" src="static/image_data/followUp.jpg"/>');
		}
	}

	//Function to play the videos randomly from the generated list
	function loadAnotherVideo(items) {
		var dataUrl = items[Math.floor(Math.random()*items.length)];
		$('#right-container').html('<video id="video" width="320" height="240" autoplay muted></video>')
	    var video = $('video')[0];
		$('video').html('<source src="'+dataUrl+'" type="video/mp4"></source>' );
		video.load();
	}

});




