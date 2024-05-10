window.addEventListener("load", function () {
  var preload = document.getElementById("preload");
  var audio = document.getElementById("background-audio");

  setTimeout(function () {
    preload.style.opacity = "0";
    preload.style.transition = "opacity 5s ease-out";

    // Fade out the logo and pause audio after 5 seconds
    setTimeout(function () {
      preload.style.display = "none";
      audio.pause();
    }, 5000);
  }, 5000); // Show the logo for 5 seconds
});
const audio2 = document.getElementById("myAudio");

function playAudio() {
    audio2.play();
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "block";
}

function pauseAudio() {
    audio2.pause();
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("pauseBtn").style.display = "none";
}