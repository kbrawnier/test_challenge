var isClicked = false;

function arrayString(){
    let array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
    let array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
    array2 = array2.filter(val => !array1.includes(val));
    let newArray = array1.concat(array2);
    return newArray.join(", ");
};

function arrayFunction(){
    if(isClicked == false){
        document.getElementById('arrayOutput').textContent = arrayString();
        isClicked = true;
    } else{document.getElementById('modal').style.display = 'flex'} 
};

function closeModal() {
    document.getElementById('modal').style.display = "none";
  }