
var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; 

var hidden;
var deck;

var saldo;

var apuesta;

var canHit = true; //allows the player (you) to draw while yourSum <= 21

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
    BotonDesabilitar();

}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }

    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);

}
function BotonDesabilitar(){

    saldo = document.getElementById("saldo1").value;

    if(parseInt(saldo) < 50 ){
        document.getElementById('x1').disabled = true;
    }
    if(parseInt(saldo) < 100 ){
        document.getElementById('x2').disabled = true;
    }
    if(parseInt(saldo) < 250 ){
        document.getElementById('x5').disabled = true;
    }
    if(parseInt(saldo) < 500 ){
        document.getElementById('x10').disabled = true;
    }
}


function SinApuesta(){
    saldo = document.getElementById("saldo1").value;
    apuesta = document.getElementById("apostado1").value;
    sumar = apuesta;

    apuesta = parseInt(apuesta) * 0;
    document.getElementById('apostado1').value = apuesta;
    menosapuesta = parseInt(saldo) + parseInt(sumar);
    document.getElementById('saldo1').value = menosapuesta;
    saldo2 = document.getElementById("saldo1").value;
    if(parseInt(saldo2) >= 0){
        document.getElementById('x0').disabled = true;
        if(parseInt(saldo2) >= 50){
            document.getElementById('x1').disabled = false;
            if(parseInt(saldo2) >= 100){
                document.getElementById('x2').disabled = false;
                if(parseInt(saldo2) >= 250){
                    document.getElementById('x5').disabled = false;
                    if(parseInt(saldo2) >= 500){
                        document.getElementById('x10').disabled = false;
                    }
                }
            }
        }
    }
}

function Normal(num){
    saldo = document.getElementById("saldo1").value;
    apuesta = document.getElementById("apostado1").value;

    apuesta = parseInt(apuesta) + parseInt(num);
    document.getElementById('apostado1').value = apuesta;
    menosapuesta = parseInt(saldo) - parseInt(apuesta);
    document.getElementById('saldo1').value = menosapuesta;
    if(apuesta == 50){
        document.getElementById('x0').disabled = false;
        document.getElementById('x1').disabled = true;
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
    if(parseInt(saldo) < 50 ){
        document.getElementById('x1').disabled = true;
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
}

function Multi2(num){
    saldo = document.getElementById("saldo1").value;
    apuesta = document.getElementById("apostado1").value;

    apuesta = parseInt(apuesta) + parseInt(num);
    document.getElementById('apostado1').value = apuesta;
    menosapuesta = parseInt(saldo) - parseInt(apuesta);
    document.getElementById('saldo1').value = menosapuesta;
    if(apuesta == 100){
        document.getElementById('x0').disabled = false;
        document.getElementById('x1').disabled = true;
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
    if(parseInt(saldo) < 100 ){
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
}

function Multi5(num){
    saldo = document.getElementById("saldo1").value;
    apuesta = document.getElementById("apostado1").value;

    apuesta = parseInt(apuesta) + parseInt(num);
    document.getElementById('apostado1').value = apuesta;
    menosapuesta = parseInt(saldo) - parseInt(apuesta);
    document.getElementById('saldo1').value = menosapuesta;
    if(apuesta == 250){
        document.getElementById('x0').disabled = false;
        document.getElementById('x1').disabled = true;
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
    if(parseInt(saldo) < 250 ){
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
}

function Multi10(num){
    saldo = document.getElementById("saldo1").value;
    apuesta = document.getElementById("apostado1").value;

    apuesta = parseInt(apuesta) + parseInt(num);
    document.getElementById('apostado1').value = apuesta;
    menosapuesta = parseInt(saldo) - parseInt(apuesta);
    document.getElementById('saldo1').value = menosapuesta;
    if(apuesta == 500){
        document.getElementById('x0').disabled = false;
        document.getElementById('x1').disabled = true;
        document.getElementById('x2').disabled = true;
        document.getElementById('x5').disabled = true;
        document.getElementById('x10').disabled = true;
    }
    if(parseInt(saldo) < 500 ){
        document.getElementById('x10').disabled = true;
    }
}


function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
    }

    document.getElementById('x0').disabled = true;
    document.getElementById('x1').disabled = true;
    document.getElementById('x2').disabled = true;
    document.getElementById('x5').disabled = true;
    document.getElementById('x10').disabled = true;

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    saldo1 = document.getElementById("saldo1").value;
    apuesta1 = document.getElementById('apostado1').value

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    if (yourSum > 21) {

        resultadoperdido = parseInt(saldo1);

        var agregar=document.getElementById('agrega').value;

        $.ajax({
            url: 'saldos.php',
            type: 'POST',
            data: { 
                valor: resultadoperdido,
                alta: agregar,
            },
        })
    Swal.fire({
        icon:'error',
        title:'Perdiste!',
        confirmButtonText:'Aceptar',
        allowOutsideClick: false,
    }).then((result)=>{
        if(result.value==true){
            location.reload();
        }
    })

    }
    else if (dealerSum > 21) {

        resultadoganado = parseInt(saldo1) + (apuesta * 2);

        var agregar=document.getElementById('agrega').value;

        $.ajax({
            url: 'saldos.php',
            type: 'POST',
            data: { 
                valor: resultadoganado,
                alta: agregar,
            },
        })
    Swal.fire({
        icon:'success',
        title:'Ganaste!',
        confirmButtonText:'Aceptar',
        allowOutsideClick: false,
    }).then((result)=>{
        if(result.value==true){
            location.reload();
        }
    })

    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
        
        Swal.fire({
            icon:'info',
            title:'Empate!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })

    }
    else if (yourSum > dealerSum) {

        resultadoganado = parseInt(saldo1) + (apuesta * 2);

        var agregar=document.getElementById('agrega').value;

        $.ajax({
            url: 'saldos.php',
            type: 'POST',
            data: { 
                valor: resultadoganado,
                alta: agregar,
            },
        })
    Swal.fire({
        icon:'success',
        title:'Ganaste!',
        confirmButtonText:'Aceptar',
        allowOutsideClick: false,
    }).then((result)=>{
        if(result.value==true){
            location.reload();
        }
    })

    }
    else if (yourSum < dealerSum) {

        resultadoperdido = parseInt(saldo1);

        var agregar=document.getElementById('agrega').value;

        $.ajax({
            url: 'saldos.php',
            type: 'POST',
            data: { 
                valor: resultadoperdido,
                alta: agregar,
            },
        })
    Swal.fire({
        icon:'error',
        title:'Perdiste!',
        confirmButtonText:'Aceptar',
        allowOutsideClick: false,
    }).then((result)=>{
        if(result.value==true){
            location.reload();
        }
    })

    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;

    /*if (yourSum > 21) {
        resultadoperdido = parseInt(saldo) - parseInt(apuesta);

    }
    else if (dealerSum > 21) {
        resultadoganado = parseInt(saldo) + (parseInt(apuesta) * 2);

    }
    else if (yourSum == dealerSum) {
        message = "Tie!";

    }
    else if (yourSum > dealerSum) {
        resultadoganado = parseInt(saldo) + (parseInt(apuesta) * 2);

    }
    else if (yourSum < dealerSum) {
        resultadoperdido = parseInt(saldo) - parseInt(apuesta);

    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;

    if ( dealerSum > 21 ){
            
            $.ajax({
                url: 'saldos.php',
                type: 'POST',
                data: { 
                    valor: resultadoganado,
                    alta: agregar,
                },
            })
        Swal.fire({
            icon:'success',
            title:'Ganaste!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })
    }else if ( yourSum > dealerSum ){
            
            $.ajax({
                url: 'saldos.php',
                type: 'POST',
                data: { 
                    valor: resultadoganado,
                    alta: agregar,
                },
            })
        Swal.fire({
            icon:'success',
            title:'Ganaste!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })
    }else if ( yourSum > 21 ){
            
            $.ajax({
                url: 'saldos.php',
                type: 'POST',
                data: { 
                    valor: resultadoperdido,
                    alta: agregar,
                },
            })
        Swal.fire({
            icon:'error',
            title:'Perdiste!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })
    }else if ( yourSum < dealerSum ){
            
            $.ajax({
                url: 'saldos.php',
                type: 'POST',
                data: { 
                    valor: resultadoperdido,
                    alta: agregar,
                },
            })
        Swal.fire({
            icon:'error',
            title:'Perdiste!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })
    }else {
        Swal.fire({
            icon:'info',
            title:'Empate!',
            confirmButtonText:'Aceptar',
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.value==true){
                location.reload();
            }
        })
    }*/

}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}