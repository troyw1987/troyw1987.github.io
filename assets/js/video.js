const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"assets/videos/SSS.mp4") // Video 1
scrolltextMap.set(0,"Sexual Seduction - Snoop Dogg");

videoMap.set(1,"assets/videos/LSD.mp4") // Video 2
scrolltextMap.set(1,"L$D (Love $ex Dreams) - A$AP Rocky");

videoMap.set(2,"assets/videos/WSP.mp4") // Video 3
scrolltextMap.set(2,"Wassup - A$AP Rocky");

videoMap.set(3,"assets/videos/ADHD.mp4") // Video 4
scrolltextMap.set(3,"A.D.H.D - Kendrick Lamar");

videoMap.set(4,"assets/videos/CAD.mp4") // Video 5
scrolltextMap.set(4,"Crunk Aint' Dead - Duke Deuce");

videoMap.set(5,"assets/videos/PUK.mp4") // video 6
scrolltextMap.set(5,"Purple Kisses - A$AP Rocky")

videoMap.set(6,"assets/videos/BXP.mp4")
scrolltextMap.set(6,"2AM - BigXthePlug") // video 7)


var number_of_songs = videoMap.size

var randomVideoNumber = Math.floor(Math.random()*number_of_songs);
var currentVideo = videoMap.get(randomVideoNumber);
var currentVideoScrollText = scrolltextMap.get(randomVideoNumber) + " (song " + (randomVideoNumber+1) +"/"+ number_of_songs +")";

document.getElementById('welcome-screen').addEventListener('click', function() { // starts video

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';


    var video = document.getElementById('background-video');
    var srollingText = document.getElementById('scrolling-text');

    video.src = currentVideo; // sets random video
    srollingText.textContent = "Playing: " + currentVideoScrollText;

    video.volume = 0.5; // Set the volume to 25%


    video.play();
});
