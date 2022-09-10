onkeydown = function(e){
        
    var player = document.getElementById('player')
    if(e.key == "ArrowUp" || e.key == "w"){
        let goUp = player.offsetTop;
        player.style.top = goUp - 60 + "px";
        player.style.backgroundImage = "url(img/top.gif)"
    }

    if(e.key == "ArrowDown" || e.key == "s"){
        let goDown = player.offsetTop;
        player.style.top = goDown + 60 + "px";
        player.style.backgroundImage = "url(img/bottom.gif)"

    }

    if(e.key == "ArrowLeft" || e.key == "a"){
        let goLeft = player.offsetLeft;
        player.style.left = goLeft - 60 + "px";
        player.style.backgroundImage = "url(img/left.gif)"

        // player.style.transform = "translate(-50%, -50%) scale(1, 1)"
    }
    
    if(e.key == "ArrowRight" || e.key == "d"){
        let goRight = player.offsetLeft;
        player.style.left = goRight + 60 + "px";
        player.style.backgroundImage = "url(img/right.gif)"

        // player.style.transform = "translate(-50%, -50%) scale(-1, 1)"


    }

}
onkeyup = function(e){
    var player = document.getElementById('player')
    player.style.backgroundImage = "url(img/default.gif)"

}

function hello(){
    var speech = document.getElementById("speech")
    speech.style.opacity = "1"
}
function bye(){
    var speech = document.getElementById("speech")
    speech.style.opacity = "0"
}

function hey(){
document.getElementById('speech').src = "img/pardon.png"
}