<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registrar</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet" href="css/estilo.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">   
  <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css"> 
</head>

<body>
    <?php
    if (isset($_GET['error'])&& $_GET['error']==1) {
        echo "<div class='alert alert-danger'>¡El nombre de usuario ingresado ya existe, por favor ingrese otro!</div>";
    }
    ?>
    <div class="registrar-box">
      <img src="image/logo.png" class="avatar" alt="Avatar Image">
      <h1>Registro Aqui</h1>
      <form method="POST" action="registro.php" onsubmit="return registrar(this)">
        <label for="username">Nombre de usuario</label>
        <input type="text" name="nombre_usu" id="nombre_usuario" onkeypress="return check(event)" placeholder="Ingrese Nombre de usuario" required>
        <label for="password">Contraseña</label>
        <input type="password" name="contrasenia" id="contrasenia" onkeypress="return check(event)" placeholder="Ingrese Contraseña" required>
        <label for="password">Repetir Contraseña</label>
        <input type="password" name="contrasenia2" id="contrasenia2" onkeypress="return check(event)" placeholder="Repetir Contraseña" required>
        <button type="submit" name="registrado" value="registrado" onclick="registrar();">Registrar</button>
        <br>
        <br>
        <a href="ingresar.php">Ya tengo cuenta!</a>
      </form>
    </div>
  

  <script src="js/jquery.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="js/script.js"></script>
  <script src="https://kit.fontawesome.com/2be8605e79.js"></script>
  <script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
  <script>
    function registrar(v) {
        var ok = true;
        var msg = "ERROR: \n";

        if (v.elements['contrasenia'].value != v.elements['contrasenia2'].value) {
            msg += "Las contraseñas no coinciden \n";
            ok = false;
        }
        if (ok == false) {
            Swal.fire(msg);
            return ok;
        }
    }

    function check(e) {
        tecla = (document.all) ? e.keyCode : e.which;

        //Tecla de retroceso para borrar, siempre la permite
        if (tecla == 8) {
            return true;
        }

        // Patron de entrada, en este caso solo acepta numeros y letras
        patron = /[A-Za-z0-9_-]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }
</script>
  
</body>

</html>