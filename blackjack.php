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
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Black Jack</title>
        <link rel="icon" href="data:,">
        <link rel="stylesheet" href="css/blackjack.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">   
        <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css"> 
    </head>

    <body>
    <div id="premio">
        <table style="margin: 0 auto;">
            <tr>
                <td>
                    <br>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <label>Su saldo es:</label>
                    <input type="text" name="agrega" id="agrega" value="agrega" hidden>
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
                <a href="principal.php" onMouseover="this.style.background='#B7B7B7'" onMouseout="this.style.background='white'" class="dropdown-item" ><i class='fas fa-hand-holding-usd'></i> Roulette</a>
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
  <div id="multiplicador">
    <table style="margin: 0 auto;">
      <tr>
        <td><button class='btn btn-success' name='x0' id='x0' value="x0" onclick="SinApuesta();">Sacar Apuesta</button></td>
      </tr>
      <tr>
        <td><button class='btn btn-success' name='x1' id='x1' value="x1" onclick="Normal(50);">Normal</button></td>
      </tr>
      <tr>
        <td><button class='btn btn-success' name='x2' id='x2' value="2" onclick="Multi2(100);">x2</button></td>
      </tr>
      <tr>
        <td><button class='btn btn-success' name='x5' id='x5' value="5" onclick="Multi5(250);">x5</button></td>
      </tr>
      <tr>
        <td><button class='btn btn-success' name='x10' id='x10' value="10" onclick="Multi10(500);">x10</button></td>
      </tr>
    </table>
  </div>
        <h1 style="margin: 100px;">Maquina: <span id="dealer-sum"></span></h1>
        <div id="dealer-cards">
            <img id="hidden" src="./cards/BACK.png">
        </div>

        <h1 style="margin: 100px;">Tu: <span id="your-sum"></span></h1>
        <div id="your-cards"></div>

        <br>
        <button id="hit">Tomar otra</button>
        <button id="stay">Quedarse</button>


        <script src="js/blackjack.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://kit.fontawesome.com/2be8605e79.js"></script>
        <script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>

    </body>
</html>