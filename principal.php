<?php 
require("conexion.php");
$idusuario = 0;
$nombreusuario = "";
session_start();
if (isset($_SESSION['usuario']) && !empty($_SESSION['usuario'])) {
    $idusuario = $_SESSION['usuario'];
    $nombreusuario = $_SESSION['nombre'];
    $ConsultarSaldo=mysqli_query($conexion,"SELECT saldo FROM usuarios WHERE idusuario=$idusuario");
    while($r=mysqli_fetch_assoc($ConsultarSaldo)){
      $dinero=$r['saldo'];
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Juego de la ruleta</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet" href="css/estilo.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">   
  <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css"> 
</head>

<body>
  <?php
  if (isset($_GET['estado'])&& $_GET['estado']==1) {
    echo "<div class='alert alert-success'>¡Saldo cargado con exito!</div>";
  }
  if (isset($_GET['estado'])&& $_GET['estado']==2) {
    echo "<div class='alert alert-success'>¡Saldo retirado con exito!</div>";
  }
  if (isset($_GET['error'])&& $_GET['error']==1) {
    echo "<div class='alert alert-danger'>¡El saldo que intenta retirar es superior a su saldo actual!</div>";
  }
?>
  <div id="premio">
    <table style="margin: 0 auto;">
      <tr>
        <td>
          <p class="elije">Numero es: </p>
        </td>
      </tr>
      <tr>
        <td>
          <label>Su saldo es:</label>
          <input type="text" name="agregar" id="agregar" value="agregar" hidden>
          <input id="saldo1" value="<?php echo $dinero; ?>" disabled></input>
        </td>
      </tr>
      <tr>
        <td>
          <label>Saldo apostado en ronda:</label>
          <input id="apostado1" value="0" disabled></input>
        </td>
      </tr>
    </table>
  </div>
  <div id="perfil">
    <div class="col-md-9">
      <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto login">
            <li class="nav-item">
              <a class="btn btn-light user" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-alt"></i> <?php echo $nombreusuario; ?>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <form action="cargarsaldo.php" method="POST">
                  <button type="submit" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" name="saldo"><i class='fa fa-cc-visa'></i> Cargar Saldo</button>
                </form>
                  <a href="#" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" data-toggle="modal" data-target="#retirarsaldo"><i class='fas fa-hand-holding-usd'></i> Retirar Saldo</a>
                  <a href="blackjack.php" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" ><i class='fas fa-hand-holding-usd'></i> Blackjack</a>
                  <a href="buscamina.php" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" ><i class='fas fa-hand-holding-usd'></i> Busca Mina</a>
                <form action="logout.php" method="POST">
                  <button type="submit" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" name="borrar"><i class='fa fa-sign-out'></i> Cerrar Sesión</button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div data-backdrop="static" class="modal fade" id="retirarsaldo">
    <div class="col-md-12 modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Retirar Saldo</h4>
                <button type="button" class="close" data-dismiss="modal">X</button>
            </div>
            <div class="col-md-12" style="background:#e0e0e0">
                <div class="modal-body">
                    <form action="retirarsaldo.php" method="POST">
                        <div class="form-group" id="user-group">
                            <label for="user">Cuanto dinero desea retirar?</label>
                            <input type="text" class="form-control" name="saldoretirado" id="saldoretirado" onkeypress="return check(event)" placeholder="Ingrese saldo a retirar" required>
                        </div>
                        <div class="form-group" id="password-group">
                            <label for="contra">CVU o Alias</label>
                            <input type="text" class="form-control" name="direccion" id="direccion" placeholder="Ingrese su CVU o Alias" required>
                        </div>
                        <div align="center" class="form-group">
                            <button style="margin-top:7%;width:50%" name="retirar" value="retirar" type="submit" class="btn btn-light">Retirar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="vara"></div>
  <div>
    <img class="img-fluid" src="image/Ruleta.png" id="ruleta">
  </div>
  <div id="numeros">
    <table style="margin: 0 auto;">
      <tr>
        <td>
          <p>Numeros apostados:</p>
          <p class="num"></p>
        </td>
      </tr>
    </table>
  </div>
  <div id="eliminar">
    <input type="button" class='btn btn-primary' name='eliminar' id='eliminar' value="Eliminar Ultimo" onclick="EliminarDato();">
  </div>
  <div id="eliminarTodo">
    <input type="button" class='btn btn-primary' name='eliminartodo' id='eliminartodo' value="Eliminar Todo" onclick="EliminarTodo();">
  </div>
  <div id="tablero">
    <table id="patio">
      <tr>
        <td rowspan="3"><?php if($dinero>50){ ?><input type="button" class="btn btn-success" name='0' id='0' value="0" onclick="AgregarDato(0);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="0"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='3' id='3' value="3" onclick="AgregarDato(3);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="3"></input> <?php } ?></td>
        <td style="background: black"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='6' id='6' value="6" onclick="AgregarDato(6);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="6"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='9' id='9' value="9" onclick="AgregarDato(9);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="9"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='12' id='12' value="12" onclick="AgregarDato(12);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="12"></input> <?php } ?></td>
        <td style="background: black"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='15' id='15' value="15" onclick="AgregarDato(15);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="15"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='18' id='18' value="18" onclick="AgregarDato(18);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="18"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='21' id='21' value="21" onclick="AgregarDato(21);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="21"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='14' id='24' value="24" onclick="AgregarDato(24);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="24"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='27' id='27' value="27" onclick="AgregarDato(27);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="27"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='30' id='30' value="30" onclick="AgregarDato(30);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="30"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='33' id='33' value="33" onclick="AgregarDato(33);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="33"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='36' id='36' value="36" onclick="AgregarDato(36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="36"></input> <?php } ?></td>
        <td style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='2to1' id='2to1' value="2to 1" onclick="Agregar12(3,6,9,12,15,18,21,24,27,30,33,36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="2to 1"></input> <?php } ?></td>
      </tr>
      <tr>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='2' id='2' value="2" onclick="AgregarDato(2);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="2"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='5' id='5' value="5" onclick="AgregarDato(5);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="5"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='8' id='8' value="8" onclick="AgregarDato(8);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="8"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='11' id='11' value="11" onclick="AgregarDato(11);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="11"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='14' id='14' value="14" onclick="AgregarDato(14);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="14"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='17' id='17' value="17" onclick="AgregarDato(17);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="17"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='20' id='20' value="20" onclick="AgregarDato(20);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="20"></input> <?php } ?></td>
        <td style="background: red"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='23' id='23' value="23" onclick="AgregarDato(23);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="23"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='26' id='26' value="26" onclick="AgregarDato(26);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="26"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='29' id='29' value="29" onclick="AgregarDato(29);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="29"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='32' id='32' value="32" onclick="AgregarDato(32);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="32"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='35' id='35' value="35" onclick="AgregarDato(35);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="35"></input> <?php } ?></td>
        <td style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='2to2' id='2to2' value="2to 1" onclick="Agregar12(2,5,8,11,14,17,20,23,26,29,32,35);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="2to 1"></input> <?php } ?></td>
      </tr>
      <tr>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='1' id='1' value="1" onclick="AgregarDato(1);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="1"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='4' id='4' value="4" onclick="AgregarDato(4);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="4"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='7' id='7' value="7" onclick="AgregarDato(7);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="7"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='10' id='10' value="10" onclick="AgregarDato(10);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="10"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='13' id='13' value="13" onclick="AgregarDato(13);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="13"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='16' id='16' value="16" onclick="AgregarDato(16);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="16"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='19' id='19' value="19" onclick="AgregarDato(19);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="19"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='22' id='22' value="22" onclick="AgregarDato(22);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="22"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='25' id='25' value="25" onclick="AgregarDato(25);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="25"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='28' id='28' value="28" onclick="AgregarDato(28);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="28"></input> <?php } ?></td>
        <td style="background: black;"><?php if($dinero>50){ ?><input type="button" class="btn btn-dark" name='31' id='31' value="31" onclick="AgregarDato(31);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-dark" value="31"></input> <?php } ?></td>
        <td style="background: red;"><?php if($dinero>50){ ?><input type="button" class='btn btn-danger' name='34' id='34' value="34" onclick="AgregarDato(34);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-danger" value="34"></input> <?php } ?></td>
        <td style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='2to3' id='2to3' value="2to 1" onclick="Agregar12(1,4,7,10,13,16,19,22,25,28,31,34);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="2to 1"></input> <?php } ?></td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='1st 12' id='1st 12' value="1st 12" onclick="Agregar12(1,2,3,4,5,6,7,8,9,10,11,12);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="1st 12"></input> <?php } ?></td>
        <td colspan="4" style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='2nd 12' id='2nd 12' value="2nd 12" onclick="Agregar12(13,14,15,16,17,18,19,20,21,22,23,24);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="2nd 12"></input> <?php } ?></td>
        <td colspan="4" style="color:white"><?php if($dinero>600){ ?><input type="button" class="btn btn-success" name='3er 12' id='3er 12' value="3er 12" onclick="Agregar12(25,26,27,28,29,30,31,32,33,34,35,36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="3er 12"></input> <?php } ?></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='1to18' id='1to18' value="1 to 18" onclick="Agregar18(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="1 to 18"></input> <?php } ?></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='EVEN' id='EVEN' value="EVEN" onclick="Agregar18(2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="EVEN"></input> <?php } ?></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='rojo' id='rojo' value="Rojo" onclick="Agregar18(1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="Rojo"></input> <?php } ?><span class="bi bi-diamond-fill red-color"> </span></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='negro' id='negro' value="Negro" onclick="Agregar18(2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="Negro"></input> <?php } ?><span class="bi bi-diamond-fill black-color"> </span></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='ODD' id='ODD' value="ODD" onclick="Agregar18(1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="ODD"></input> <?php } ?></td>
        <td colspan="2" style="color:white"><?php if($dinero>900){ ?><input type="button" class="btn btn-success" name='19to36' id='19to36' value="19 to 36" onclick="Agregar18(19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36);"></input> <?php }else{ ?><input disabled type="button" class="btn btn-success" value="19 to 36"></input> <?php } ?></td>
        <td></td>
      </tr>
    </table>
  </div>
  <div>
    <div id="sonido" style="display: none;">
      <iframe id="audio" src="sonido/ruleta.mp3">
      </iframe>

    </div>
  </div>

  <script src="js/jquery.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="js/script.js"></script>
  <script src="https://kit.fontawesome.com/2be8605e79.js"></script>
  <script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
  
</body>

</html>