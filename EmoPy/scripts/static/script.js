$( document ).ready(function() {

	var happy_data = ['static/intervention_data/happy1.mp4','static/intervention_data/happy2.mp4','static/intervention_data/happy3.mp4','static/intervention_data/happy4.mp4'];
    var motivating_data = ['static/intervention_data/motivating1.mp4', 'static/intervention_data/motivating2.mp4', 'static/intervention_data/motivating3.mp4', 'static/intervention_data/motivating4.mp4',]

	//changing the default image to captured image
	$('#user').attr("src","static/image_data/image.jpg");

	if(emotion == 'Happy'){
		//display motivational quote video
		loadAnotherVideo(motivating_data)
		$('video')[0].addEventListener('ended', closeHandler, false);  
	}else{
		loadAnotherVideo(happy_data)
		//Run the script after video finished playing
		$('video')[0].addEventListener('ended', myHandler, false);
	}
	
	//Function to run the script for followup
	function myHandler(e) {
		postData('validationRun');
	}
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
			$('#message').html("Looks like you are still Angry.");
			$('#right-container').html('<img id="follow" src="static/image_data/followUp.jpg" />');
			if (confirm('Do you want to continue watching video?')) {
				$('#follow').delay(8000).queue(function(n) {
				 	loadAnotherVideo(happy_data)
				 	//for now I am running the intervention untill user selects to discontinue
				 	$('video')[0].addEventListener('ended', myHandler, false);             				 	
				});
			} else {
			    closeHandler();
			}
		}else{
			$('#message').html("Looks like your emotion changed from Angry to Happy!");
			$('#right-container').html('<img id="follow" src="static/image_data/followUp.jpg"/>');
			setTimeout(() => { closeHandler() }, 8000) 	     			
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
	//function to close the application
	function closeHandler(e) {
		closeHelper('close');
	}
	function closeHelper(input) {
	    $.ajax({
	        type: "POST",
	        url: "/shutdown",
	        data: { param: input },
	        success: closeApp
	    });
	}  
	function closeApp() {
		//we can implement the browser closing functionallity here. if we have any solution.
		$('#message').html("Application is closed! Please close the browser.");
	}
});
