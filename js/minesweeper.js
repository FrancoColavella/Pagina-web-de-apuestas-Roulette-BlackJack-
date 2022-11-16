var board = [];
var rows = 8;
var columns = 8;

var minesCount = 10;
var minesLocation = []; // "2-2", "3-4", "2-1"

var tilesClicked = 0; //goal to click all tiles except the ones containing mines
var flagEnabled = false;

var gameOver = false;

var saldo;

var Terminaste = 0;

var apuesta;

window.onload = function() {
    startGame();
    BotonDesabilitar();
}

function setMines() {
    // minesLocation.push("2-2");
    // minesLocation.push("2-3");
    // minesLocation.push("5-6");
    // minesLocation.push("3-4");
    // minesLocation.push("1-1");

    let minesLeft = minesCount;
    while (minesLeft > 0) { 
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}


function startGame() {
    document.getElementById("mines-count").innerText = minesCount;
    document.getElementById("flag-button").addEventListener("click", setFlag);
    setMines();

    //populate our board
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
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

function setFlag() {
    if (flagEnabled) {
        flagEnabled = false;
        document.getElementById("flag-button").style.backgroundColor = "lightgray";
    }
    else {
        flagEnabled = true;
        document.getElementById("flag-button").style.backgroundColor = "darkgray";
    }
}

function clickTile() {
    if (gameOver || this.classList.contains("tile-clicked")) {
        return;
    }

    document.getElementById('x0').disabled = true;
    document.getElementById('x1').disabled = true;
    document.getElementById('x2').disabled = true;
    document.getElementById('x5').disabled = true;
    document.getElementById('x10').disabled = true;

    let tile = this;
    if (flagEnabled) {
        if (tile.innerText == "") {
            tile.innerText = "🚩";
        }
        else if (tile.innerText == "🚩") {
            tile.innerText = "";
        }
        return;
    }

    if (minesLocation.includes(tile.id)) {
        gameOver = true;
        revealMines();
        Terminaste=2;
    }


    let coords = tile.id.split("-"); // "0-0" -> ["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);

    saldo1 = document.getElementById("saldo1").value;
    apuesta1 = document.getElementById('apostado1').value

    if (Terminaste == 2) {

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

    } else if (Terminaste == 1){

        resultadoganado = parseInt(saldo1) + (apuesta1 * 2);

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
    
}

function revealMines() {
    for (let r= 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";                
            }
        }
    }
}

function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if (board[r][c].classList.contains("tile-clicked")) {
        return;
    }

    board[r][c].classList.add("tile-clicked");
    tilesClicked += 1;

    let minesFound = 0;

    //top 3
    minesFound += checkTile(r-1, c-1);      //top left
    minesFound += checkTile(r-1, c);        //top 
    minesFound += checkTile(r-1, c+1);      //top right

    //left and right
    minesFound += checkTile(r, c-1);        //left
    minesFound += checkTile(r, c+1);        //right

    //bottom 3
    minesFound += checkTile(r+1, c-1);      //bottom left
    minesFound += checkTile(r+1, c);        //bottom 
    minesFound += checkTile(r+1, c+1);      //bottom right

    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString());
    }
    else {
        //top 3
        checkMine(r-1, c-1);    //top left
        checkMine(r-1, c);      //top
        checkMine(r-1, c+1);    //top right

        //left and right
        checkMine(r, c-1);      //left
        checkMine(r, c+1);      //right

        //bottom 3
        checkMine(r+1, c-1);    //bottom left
        checkMine(r+1, c);      //bottom
        checkMine(r+1, c+1);    //bottom right
    }

    if (tilesClicked == rows * columns - minesCount) {
        document.getElementById("mines-count").innerText = "Cleared";
        gameOver = true;
        Terminaste=1;
    }

}


function checkTile(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if (minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }
    return 0;
}