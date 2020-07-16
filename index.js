var bg = document.getElementById('particles-js');

document.addEventListener("keydown",function(event){
    bg.style.backgroundColor = getRandomColor();
    var key = event.key;
    playMusic(key);
    
});


function playMusic(key){
    switch(key){
        case "d":
            var audio = new Audio("sound/Kick1.wav");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sound/kick.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sound/kick2.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("sound/Clap1.wav");
            audio.play();
            break;
             
    }
}
function getRandomColor(){
    var letters = "0123456789ABCDEF"; //letters.length
    var color = "#";
    for(var i=0; i<6;i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }
    return color;
}