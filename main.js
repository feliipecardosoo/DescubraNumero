var numberToFind = 0;
var attemps = 0;
const sendButton = document.getElementById("button-send");


function refresh (){
    // Gera um numero aleatorio
    attemps = 0; 
    numberToFind = parseInt (Math.random()*100);
 console.log(numberToFind)
}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if (bet < 0 || bet >100){
    alert('Aposta Invalida!')
    return;
    }
    if (bet > numberToFind) {
        attemps++;
        alert('⚠️ O numero para ser encontrado é menor!!! ➖ ')
    }
    else if (bet < numberToFind) {
        attemps++;
        alert('⚠️ O numero para ser encontrado é maior!!! ➕')
    }
    else if (bet == numberToFind) {
        alert('PARABENSS VOCÊ ACERTOU!!!✅ Com '+ attemps+' erros! ❌ ');
        refresh();
    }
}
refresh();