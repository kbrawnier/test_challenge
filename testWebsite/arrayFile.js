var isClicked = false;
var arrayOutput = document.getElementById('arrayOutput');

arrayOutput.clicked = function(){
    isClicked = true;
}

function arrayFunction(){
    if(isClicked == true){
        arrayOutput.textContent()
    }
}