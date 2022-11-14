var datos = [];
const ruleta = document.querySelector('#ruleta');
var saldo = document.getElementById("saldo1").value;


function AgregarDato(numero){
    let valor = document.getElementById("saldo1").value;
    let apuesta = document.getElementById('apostado1').value;
    let dato = numero;
    if(parseInt(valor)>=50){
        datos.push(dato);
        document.querySelector('.num').innerHTML = datos.join('<br />');
        apuesta = parseInt(apuesta) + 50;
        document.getElementById('apostado1').value = apuesta;
        menosapuesta = parseInt(saldo) - parseInt(apuesta);
        document.getElementById('saldo1').value = menosapuesta;
    }else{
        document.getElementById('0').disabled = true;
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = true;
        document.getElementById('4').disabled = true;
        document.getElementById('5').disabled = true;
        document.getElementById('6').disabled = true;
        document.getElementById('7').disabled = true;
        document.getElementById('8').disabled = true;
        document.getElementById('9').disabled = true;
        document.getElementById('10').disabled = true;
        document.getElementById('11').disabled = true;
        document.getElementById('12').disabled = true;
        document.getElementById('13').disabled = true;
        document.getElementById('14').disabled = true;
        document.getElementById('15').disabled = true;
        document.getElementById('16').disabled = true;
        document.getElementById('17').disabled = true;
        document.getElementById('18').disabled = true;
        document.getElementById('19').disabled = true;
        document.getElementById('20').disabled = true;
        document.getElementById('21').disabled = true;
        document.getElementById('22').disabled = true;
        document.getElementById('23').disabled = true;
        document.getElementById('24').disabled = true;
        document.getElementById('25').disabled = true;
        document.getElementById('26').disabled = true;
        document.getElementById('27').disabled = true;
        document.getElementById('28').disabled = true;
        document.getElementById('29').disabled = true;
        document.getElementById('30').disabled = true;
        document.getElementById('31').disabled = true;
        document.getElementById('32').disabled = true;
        document.getElementById('33').disabled = true;
        document.getElementById('34').disabled = true;
        document.getElementById('35').disabled = true;
        document.getElementById('36').disabled = true;
        document.getElementById('2to1').disabled = true;
        document.getElementById('2to2').disabled = true;
        document.getElementById('2to3').disabled = true;
        document.getElementById('1st 12').disabled = true;
        document.getElementById('2nd 12').disabled = true;
        document.getElementById('3er 12').disabled = true;
        document.getElementById('ODD').disabled = true;
        document.getElementById('EVEN').disabled = true;
        document.getElementById('negro').disabled = true;
        document.getElementById('rojo').disabled = true;
        document.getElementById('19to36').disabled = true;
        document.getElementById('1to18').disabled = true;


    }
}
function Agregar12(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12){
    let dato1 = num1;
    let dato2 = num2;
    let dato3 = num3;
    let dato4 = num4;
    let dato5 = num5;
    let dato6 = num6;
    let dato7 = num7;
    let dato8 = num8;
    let dato9 = num9;
    let dato10 = num10;
    let dato11 = num11;
    let dato12 = num12;
    let valor = document.getElementById("saldo1").value;
    let apuesta = document.getElementById('apostado1').value;
    if(parseInt(valor)>=600){
        datos.push(dato1);
        datos.push(dato2);
        datos.push(dato3);
        datos.push(dato4);
        datos.push(dato5);
        datos.push(dato6);
        datos.push(dato7);
        datos.push(dato8);
        datos.push(dato9);
        datos.push(dato10);
        datos.push(dato11);
        datos.push(dato12);
        document.querySelector('.num').innerHTML = datos.join('<br />');
        apuesta = parseInt(apuesta) + 600;
        document.getElementById('apostado1').value = apuesta;
        menosapuesta = parseInt(saldo) - parseInt(apuesta);
        document.getElementById('saldo1').value = menosapuesta;
    }else{
        document.getElementById('2to1').disabled = true;
        document.getElementById('2to2').disabled = true;
        document.getElementById('2to3').disabled = true;
        document.getElementById('1st 12').disabled = true;
        document.getElementById('2nd 12').disabled = true;
        document.getElementById('3er 12').disabled = true;
        document.getElementById('ODD').disabled = true;
        document.getElementById('EVEN').disabled = true;
        document.getElementById('negro').disabled = true;
        document.getElementById('rojo').disabled = true;
        document.getElementById('19to36').disabled = true;
        document.getElementById('1to18').disabled = true;


    }
}
function Agregar18(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15,num16,num17,num18){
    let dato1 = num1;
    let dato2 = num2;
    let dato3 = num3;
    let dato4 = num4;
    let dato5 = num5;
    let dato6 = num6;
    let dato7 = num7;
    let dato8 = num8;
    let dato9 = num9;
    let dato10 = num10;
    let dato11 = num11;
    let dato12 = num12;
    let dato13 = num13;
    let dato14 = num14;
    let dato15 = num15;
    let dato16 = num16;
    let dato17 = num17;
    let dato18 = num18;
    let valor = document.getElementById("saldo1").value;
    let apuesta = document.getElementById('apostado1').value;
    if(parseInt(valor)>=900){
        datos.push(dato1);
        datos.push(dato2);
        datos.push(dato3);
        datos.push(dato4);
        datos.push(dato5);
        datos.push(dato6);
        datos.push(dato7);
        datos.push(dato8);
        datos.push(dato9);
        datos.push(dato10);
        datos.push(dato11);
        datos.push(dato12);
        datos.push(dato13);
        datos.push(dato14);
        datos.push(dato15);
        datos.push(dato16);
        datos.push(dato17);
        datos.push(dato18);
        document.querySelector('.num').innerHTML = datos.join('<br />');
        apuesta = parseInt(apuesta) + 900;
        document.getElementById('apostado1').value = apuesta;
        menosapuesta = parseInt(saldo) - parseInt(apuesta);
        document.getElementById('saldo1').value = menosapuesta;
    }else{
        document.getElementById('ODD').disabled = true;
        document.getElementById('EVEN').disabled = true;
        document.getElementById('negro').disabled = true;
        document.getElementById('rojo').disabled = true;
        document.getElementById('19to36').disabled = true;
        document.getElementById('1to18').disabled = true;
    }
}
function EliminarDato(){
    let apuesta = document.getElementById('apostado1').value;
    datos.pop();
    document.querySelector('.num').innerHTML = datos.join('<br />');
    apuesta = parseInt(apuesta) - 50;
    document.getElementById('apostado1').value = apuesta;
    masapuesta = parseInt(saldo) - (datos.length*50);
    document.getElementById('saldo1').value = masapuesta;
    if(masapuesta >=50){
        document.getElementById('0').disabled = false;
        document.getElementById('1').disabled = false;
        document.getElementById('2').disabled = false;
        document.getElementById('3').disabled = false;
        document.getElementById('4').disabled = false;
        document.getElementById('5').disabled = false;
        document.getElementById('6').disabled = false;
        document.getElementById('7').disabled = false;
        document.getElementById('8').disabled = false;
        document.getElementById('9').disabled = false;
        document.getElementById('10').disabled = false;
        document.getElementById('11').disabled = false;
        document.getElementById('12').disabled = false;
        document.getElementById('13').disabled = false;
        document.getElementById('14').disabled = false;
        document.getElementById('15').disabled = false;
        document.getElementById('16').disabled = false;
        document.getElementById('17').disabled = false;
        document.getElementById('18').disabled = false;
        document.getElementById('19').disabled = false;
        document.getElementById('20').disabled = false;
        document.getElementById('21').disabled = false;
        document.getElementById('22').disabled = false;
        document.getElementById('23').disabled = false;
        document.getElementById('24').disabled = false;
        document.getElementById('25').disabled = false;
        document.getElementById('26').disabled = false;
        document.getElementById('27').disabled = false;
        document.getElementById('28').disabled = false;
        document.getElementById('29').disabled = false;
        document.getElementById('30').disabled = false;
        document.getElementById('31').disabled = false;
        document.getElementById('32').disabled = false;
        document.getElementById('33').disabled = false;
        document.getElementById('34').disabled = false;
        document.getElementById('35').disabled = false;
        document.getElementById('36').disabled = false;
    }
    if(masapuesta >=600){
        document.getElementById('2to1').disabled = false;
        document.getElementById('2to2').disabled = false;
        document.getElementById('2to3').disabled = false;
        document.getElementById('1st 12').disabled = false;
        document.getElementById('2nd 12').disabled = false;
        document.getElementById('3er 12').disabled = false;
    }
    if(masapuesta >=900){
        document.getElementById('ODD').disabled = false;
        document.getElementById('EVEN').disabled = false;
        document.getElementById('negro').disabled = false;
        document.getElementById('rojo').disabled = false;
        document.getElementById('19to36').disabled = false;
        document.getElementById('1to18').disabled = false;
    }
}
function EliminarTodo(){
    document.getElementById('apostado1').value = 0;
    let valor = document.getElementById("saldo1").value;
    plata = (50 * datos.length) + parseInt(valor);
    document.getElementById('saldo1').value = plata;
    datos.length=0;
    document.querySelector('.num').innerHTML = datos.join('<br />');
    if(plata >=50){
        document.getElementById('0').disabled = false;
        document.getElementById('1').disabled = false;
        document.getElementById('2').disabled = false;
        document.getElementById('3').disabled = false;
        document.getElementById('4').disabled = false;
        document.getElementById('5').disabled = false;
        document.getElementById('6').disabled = false;
        document.getElementById('7').disabled = false;
        document.getElementById('8').disabled = false;
        document.getElementById('9').disabled = false;
        document.getElementById('10').disabled = false;
        document.getElementById('11').disabled = false;
        document.getElementById('12').disabled = false;
        document.getElementById('13').disabled = false;
        document.getElementById('14').disabled = false;
        document.getElementById('15').disabled = false;
        document.getElementById('16').disabled = false;
        document.getElementById('17').disabled = false;
        document.getElementById('18').disabled = false;
        document.getElementById('19').disabled = false;
        document.getElementById('20').disabled = false;
        document.getElementById('21').disabled = false;
        document.getElementById('22').disabled = false;
        document.getElementById('23').disabled = false;
        document.getElementById('24').disabled = false;
        document.getElementById('25').disabled = false;
        document.getElementById('26').disabled = false;
        document.getElementById('27').disabled = false;
        document.getElementById('28').disabled = false;
        document.getElementById('29').disabled = false;
        document.getElementById('30').disabled = false;
        document.getElementById('31').disabled = false;
        document.getElementById('32').disabled = false;
        document.getElementById('33').disabled = false;
        document.getElementById('34').disabled = false;
        document.getElementById('35').disabled = false;
        document.getElementById('36').disabled = false;
    }
    if(plata >=600){
        document.getElementById('2to1').disabled = false;
        document.getElementById('2to2').disabled = false;
        document.getElementById('2to3').disabled = false;
        document.getElementById('1st 12').disabled = false;
        document.getElementById('2nd 12').disabled = false;
        document.getElementById('3er 12').disabled = false;
    }
    if(plata >=900){
        document.getElementById('ODD').disabled = false;
        document.getElementById('EVEN').disabled = false;
        document.getElementById('negro').disabled = false;
        document.getElementById('rojo').disabled = false;
        document.getElementById('19to36').disabled = false;
        document.getElementById('1to18').disabled = false;
    }
}

ruleta.addEventListener('click', girar);

function girar(){

    let rand = Math.random() * 7200;
    console.log(datos);
    
    calcular(rand);

    let sonido = document.querySelector('#audio');
    sonido.setAttribute('src','sonido/ruleta.mp3');

    function premio(premios){
        document.querySelector('.elije').innerHTML = 'Numero es: '+premios;
        var contador=0;
        var premiototal=0;
        var resto=0;
        var aler=0;
        var max=0;
        
        for(i=0; i<=datos.length; i++){
            if(datos[i]==parseInt(premios)){
            contador++;
            }
        }
        premiototal = (contador * 1800) + parseInt(saldo) - (datos.length*50);
        resto = parseInt(saldo) - (datos.length*50);
        
        apuesta=0;

        aler = contador>0;
        max = datos.length>0;
        if(aler > 0){
            var agregar=document.getElementById('agregar').value;
                
                $.ajax({
                    url: 'saldos.php',
                    type: 'POST',
                    data: { 
                        valor: premiototal,
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
        }else if(max > 0){
            var agregar=document.getElementById('agregar').value;
                
                $.ajax({
                    url: 'saldos.php',
                    type: 'POST',
                    data: { 
                        valor: resto,
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
        }else{
            Swal.fire({
                icon:'info',
                title:'Intente apostar esta vez!',
                confirmButtonText:'Aceptar',
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.value==true){
                    location.reload();
                }
            })
        }
    }
    

   
    

    function calcular (rand){
        let valor = rand / 360;
        valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
        ruleta.style.transform = "rotate("+rand+"deg)";

        setTimeout(()=> {
            switch(true){
                case valor > 0 && valor <= 4.864864864864865:
                premio('0');
                break;
                case valor > 4.864864864864865 && valor <= 14.5945945945946:
                premio('26');
                break;
                case valor > 14.5945945945946 && valor <= 24.32432432432433:
                premio('3');
                break;
                case valor > 24.32432432432433 && valor <= 34.05405405405406:
                premio('35');
                break;
                case valor > 34.05405405405406 && valor <= 43.78378378378379:
                premio('12');
                break;
                case valor > 43.78378378378379 && valor <= 53.51351351351352:
                premio('28');
                break;
                case valor > 53.51351351351352 && valor <= 63.24324324324325:
                premio('7');
                break;
                case valor > 63.24324324324325 && valor <= 72.97297297297298:
                premio('29');
                break;
                case valor > 72.97297297297298 && valor <= 82.70270270270271:
                premio('18');
                break;
                case valor > 82.70270270270271 && valor <= 92.43243243243244:
                premio('22');
                break;
                case valor > 92.43243243243244 && valor <= 102.1621621621622:
                premio('9');
                break;
                case valor > 102.1621621621622 && valor <= 111.8918918918919:
                premio('31');
                break;
                case valor > 111.8918918918919 && valor <= 121.6216216216216:
                premio('14');
                break;
                case valor > 121.6216216216216 && valor <= 131.3513513513514:
                premio('20');
                break;
                case valor > 131.3513513513514 && valor <= 141.0810810810811:
                premio('1');
                break;
                case valor > 141.0810810810811 && valor <= 150.8108108108108:
                premio('33');
                break;
                case valor > 150.8108108108108 && valor <= 160.5405405405405:
                premio('16');
                break;
                case valor > 160.5405405405405 && valor <= 170.2702702702703:
                premio('24');
                break;
                case valor > 170.2702702702703 && valor <= 180:
                premio('5');
                break;
                case valor > 180 && valor <= 189.7297297297297:
                premio('10');
                break;
                case valor > 189.7297297297297 && valor <= 199.4594594594595:
                premio('23');
                break;
                case valor > 199.4594594594595 && valor <= 209.1891891891892:
                premio('8');
                break;
                case valor > 209.1891891891892 && valor <= 218.9189189189189:
                premio('30');
                break;
                case valor > 218.9189189189189 && valor <= 228.6486486486487:
                premio('11');
                break;
                case valor > 228.6486486486487 && valor <= 238.3783783783784:
                premio('36');
                break;
                case valor > 238.3783783783784 && valor <= 248.1081081081081:
                premio('13');
                break;
                case valor > 248.1081081081081 && valor <= 257.8378378378378:
                premio('27');
                break;
                case valor > 257.8378378378378 && valor <= 267.5675675675676:
                premio('6');
                break;
                case valor > 267.5675675675676 && valor <= 277.2972972972973:
                premio('34');
                break;
                case valor > 277.2972972972973 && valor <= 287.027027027027:
                premio('17');
                break;
                case valor > 287.027027027027 && valor <= 296.7567567567568:
                premio('25');
                break;
                case valor > 296.7567567567568 && valor <= 306.4864864864865:
                premio('2');
                break;
                case valor > 306.4864864864865 && valor <= 316.2162162162162:
                premio('21');
                break;
                case valor > 316.2162162162162 && valor <= 325.945945945946:
                premio('4');
                break;
                case valor > 325.945945945946 && valor <= 335.6756756756757:
                premio('19');
                break;
                case valor > 335.6756756756757 && valor <= 345.4054054054054:
                premio('15');
                break;
                case valor > 345.4054054054054 && valor <= 355.1351351351351:
                premio('32');
                break;
                case valor > 355.1351351351351 && valor <= 360:
                premio('0');
                break;
                    
            }
        },5000);
    }
}