const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"assets/SSS.mp4") // Video 1
scrolltextMap.set(0,"Sexual Seduction - Snoop Dogg");

videoMap.set(1,"assets/LSD.mp4") // Video 2
scrolltextMap.set(1,"L$D (Love $ex Dreams) - A$AP Rocky");

videoMap.set(2,"assets/WSP.mp4") // Video 3
scrolltextMap.set(2,"Wassup - A$AP Rocky");

videoMap.set(3,"assets/ADHD.mp4") // Video 4
scrolltextMap.set(3,"A.D.H.D - Kendrick Lamar");

videoMap.set(4,"assets/CAD.mp4") // Video 5
scrolltextMap.set(4,"Crunk Aint' Dead - Duke Deuce");

var randomNumberZeroToOne = Math.floor(Math.random()*5);
var currentVideo = videoMap.get(randomNumberZeroToOne);
var currentVideoScrollText = scrolltextMap.get(randomNumberZeroToOne);

document.getElementById('welcome-screen').addEventListener('click', function() { // starts video

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';


    var video = document.getElementById('background-video');
    var srollingText = document.getElementById('scrolling-text');

    video.src = currentVideo; // sets random video
    srollingText.textContent = "Playing: " + currentVideoScrollText;

    video.volume = 0.05; // Set the volume to 25%


    video.play();
});
