<?php
session_start();
require("conexion.php");
if (isset($_POST['ingresar']) && !empty($_POST['ingresar'])) {
	$usuario=$_POST['usuario'];
	$password=sha1($_POST['contrasenia']);
	$consulta= mysqli_query($conexion,"SELECT idusuario,nombreusuario,contrasenia,saldo FROM usuarios where nombreusuario='$usuario' and contrasenia='$password' LIMIT 1"); 
	if($p=mysqli_fetch_assoc($consulta)){
        if ($p['nombreusuario']==$usuario && $p['contrasenia']==$password) {

            $_SESSION['usuario'] = $p['idusuario'];
            $_SESSION['nombre'] = $p['nombreusuario'];

            header("location:principal.php");
        }else{ 
            header("location:ingresar.php?error=1");
        }
    }
}

?>