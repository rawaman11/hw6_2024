var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop= false;
	console.log("autoplay is set to " + video.autoplay);
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		// and update the volume information
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed is " + video.playbackRate);
	});
	// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed is " + video.playbackRate);
	});
	// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime < video.duration - 10) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log("Current location is " + video.currentTime);
	});
	// Mute/unmute the video and update the text in the button.
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		} else {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});
	// Change the volume based on the slider and update the volume information.
	document.querySelector("#slider").addEventListener("change", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		console.log("Volume is " + video.volume);
	});
	// Utilize the existing oldSchool class on the video element
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});
	// Original - Remove the oldSchool class from the video.
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

