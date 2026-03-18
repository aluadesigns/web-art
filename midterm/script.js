let clicks = 0;
let x = 0; //to store the previous position of the mouse
let y = 0;
let newX = 0; // how much did the mouse move 
let newY = 0;
let selected;
let appear = true;

window.addEventListener('load', init);

function init() {
    if (document.getElementById("home")) {
        alert("click to start the video and turn your volume up!"); 
    }

    else {
        alert("hello!"); 
    }
    let thebody = document.body;
    thebody.addEventListener('click', clickCalled);

    document.getElementById("clicks").addEventListener('mouseover', changeColor);
    document.getElementById("clicks").addEventListener('mouseleave', changebackColor);
    let puzzles = document.getElementsByClassName("puzzle");

    for (let i=0; i<puzzles.length; i++) {
    puzzles[i].addEventListener('mousedown', down);
    puzzles[i].addEventListener('mouseover', playaudio);
    //puzzles[i].addEventListener('click', stopaudio);

    function playaudio() {
        let audio = document.getElementById(puzzles[i].dataset.audio);
        audio.currentTime = 0;
        audio.play();
    }

    function down(event) {
        x = event.clientX;
        y = event.clientY;
        console.log(x, y);

        selected = event.target; //which rect is selected

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseRelease);

    }
    function mouseMove(event) {
        newX = x - event.clientX;
        newY = y - event.clientY;

        x = event.clientX;
        y = event.clientY;

        selected.style.top = (selected.offsetTop - newY) + "px";
        selected.style.left = (selected.offsetLeft - newX) + "px";
    }

    function mouseRelease() {
         document.removeEventListener('mousemove', mouseMove);
    }
}
    function changeColor() {
        let circleChanged = document.getElementById("clicks");
        circleChanged.style.color = "red";
    }
    function changebackColor() {
        document.getElementById("clicks").style.color = "blue";
    }


    function clickCalled() {
        clicks++;
        console.log(clicks);
        let clicksElement = document.getElementById("clicks");
        clicksElement.innerHTML = clicks;

        clicksElement.style.fontSize = 16+ clicks + "px";
    }


    var video = document.getElementById("video-1");
    console.log(video);

    var pressButton = document.getElementById("press");
    pressButton.addEventListener('click', dissapear);
    video.addEventListener('click', play);
    video.addEventListener('timeupdate', time);
    document.getElementById("calico").addEventListener('mouseover', fast);
    document.getElementById("calico").addEventListener('mouseout', slow);

    function fast() {
        video.playbackRate = 10;
    }

    function slow() {
        video.playbackRate = 1;
    }


    function time(event){
        console.log(video.currentTime);
        if (video.currentTime <= 2){
            document.body.style.background = "blue";
        }

        else if (video.currentTime<=4){
            document.body.style.background = "aquamarine";
        }

        else if (video.currentTime<=6){
            document.body.style.background = "violet";
        }

        else if (video.currentTime<=8){
            document.body.style.background = "yellow";
        }
        else if (video.currentTime<=10){
            document.body.style.background = "aqua";
        }

         else {
            document.body.style.background = " rgb(140, 140, 140)";
        }

    }

    function dissapear(){
        if (appear){
        video.style.display = "none";
        document.getElementById("calico").style.display = "none";
        document.getElementById("firstbox").style.display = "none";
        document.getElementById("press").value = "Bring back the fun!"
        document.getElementById("press").style.color = "violet";


        
    }
        else{
            video.style.display = "block";
            document.getElementById("calico").style.display = "block";
            document.getElementById("firstbox").style.display = "block";
            document.getElementById("press").value = "Overwhelmed?";
            document.getElementById("press").style.color = "green";


        }
        appear = !appear;
    }

    function play(){

        if (appear){
            video.play();
            video.loop = true;
        }

        else {
            video.pause();

        }
        appear = !appear;

    }

    document.getElementById("clicktime").innerHTML = Date();

}
