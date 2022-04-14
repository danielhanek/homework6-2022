var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play()
	 console.log("The current volume is " + video.volume*100 + "%")
	 document.querySelector("#volume").innerHTML = video.volume *100+"%"
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate * .95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate / .95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted === false) {    
		video.muted = true;
	}
	else {
		video.muted = false;
	}
	
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("The current volume is " + this.value +"%")
	video.volume = this.value / 100;
	
});


document.querySelector("#vintage").addEventListener( 'click', function(){
	console.log("Class changed to Old School")
	document.getElementById("player1").className = "oldSchool";
});

document.querySelector("#orig").addEventListener( 'click', function(){
	console.log("Class changed back to original")
	document.getElementById("player1").className = "video";
});

document.querySelector("#slider").addEventListener("change",function(){
	sliderVolume = document.getElementById("volume");
	sliderVolume.innerHTML = this.value + "%";
});

document.querySelector("#skip").addEventListener("click",function(){
	console.log("Current time of video is " + video.currentTime +"sec")
	video.currentTime = video.currentTime + 15;

	video.addEventListener('ended', function() {
		video.currentTime = 0;
	}
)});
