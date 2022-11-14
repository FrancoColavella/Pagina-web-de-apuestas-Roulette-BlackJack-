<?php
require("conexion.php");
session_start();
if (isset($_POST['aceptar']) && !empty($_POST['aceptar'])) {

$idusuario=$_SESSION['usuario'];
$ConsultarSaldo=mysqli_query($conexion,"SELECT saldo FROM usuarios WHERE idusuario=$idusuario");
while($r=mysqli_fetch_assoc($ConsultarSaldo)){
    $dinero=$r['saldo'];
}

$recarga = $_POST['recargar'];

$dinero= $dinero + $recarga;

$CargarSaldo=mysqli_query($conexion,"UPDATE usuarios SET saldo=$dinero WHERE idusuario=$idusuario");

header('location:principal.php?estado=1');

}
?>