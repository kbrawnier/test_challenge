var isClicked = false;
var arrayOutput = document.getElementById('arrayOutput');
var modal = document.getElementById('modal');
const array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
const array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

function arrayFunction(){
    console.log('clicked');
    if(isClicked == false){
    
        isClicked = true;
    } else{document.getElementById('modal').style.display = 'flex'} 
    };

    function arrayOutput(array1,array2){
        const newArray = array1.concat(array2)
    }