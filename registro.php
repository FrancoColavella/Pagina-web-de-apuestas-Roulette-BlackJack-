<?php
 require("conexion.php");
 if (isset($_POST['registrado']) && !empty($_POST['registrado'])) {
    $usuario=$_POST['nombre_usu'];
    $contrasenia=sha1($_POST['contrasenia']);
    $verificarUsuario=mysqli_query($conexion,"SELECT nombreusuario FROM usuarios WHERE nombreusuario='$usuario' LIMIT 1");
    if(mysqli_num_rows($verificarUsuario)>0){
        header("location:registrar.php?error=1");
    }else{
        $insertar=mysqli_query($conexion,"INSERT INTO usuarios(idusuario,nombreusuario,contrasenia,saldo) VALUES (00,'$usuario','$contrasenia',0)");
        header("location:ingresar.php?estado=1");
    }
}

?>