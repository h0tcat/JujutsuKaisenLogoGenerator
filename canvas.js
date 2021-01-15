var logoCanvas = document.getElementById("logoCanvas");

var contextCanvas = logoCanvas.getContext("2d");
var logomain = document.getElementById("logomain").value;

var textWidth;
var furiganaWidth;

function drawLogo() {


    textWidth = contextCanvas.measureText(logomain).width;
    logoCanvas.width=1980;
    logoCanvas.height=720;
    
    contextCanvas.font = "200px JujutsuLikeFont";
    contextCanvas.lineWidth = 3;
    contextCanvas.strokeStyle = "#e7e70c";
    contextCanvas.fillStyle = "#000f00";


    contextCanvas.fillText(logomain, ((1000 - textWidth) / 2)/2, 720 / 2);
    contextCanvas.strokeText(logomain, ((1000 - textWidth) / 2)/2, 720 / 2);

}
drawLogo();