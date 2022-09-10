onkeydown = function(e){
        
        var a = document.getElementById('Ups')
        if(e.key == "ArrowUp"){
            let goUp = a.offsetTop;
            a.style.top = goUp - 40 + "px";
        }

        if(e.key == "ArrowDown"){
            let goDown = a.offsetTop;
            a.style.top = goDown + 40 + "px";
        }

        if(e.key == "ArrowLeft"){
            let goLeft = a.offsetLeft;
            a.style.left = goLeft - 40 + "px";
            a.style.transform = "translate(-50%, -50%) scale(-1, 1)"
        }

        if(e.key == "ArrowRight"){
            let goRight = a.offsetLeft;
            a.style.left = goRight + 40 + "px";
            a.style.transform = "translate(-50%, -50%) scale(1, 1)"


        }

    }
