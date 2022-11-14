<?php
require("conexion.php");
session_start();
if (isset($_POST['retirar']) && !empty($_POST['retirar'])) {

$idusuario=$_SESSION['usuario'];
$ConsultaSaldo=mysqli_query($conexion,"SELECT saldo FROM usuarios WHERE idusuario=$idusuario");
while($r=mysqli_fetch_assoc($ConsultaSaldo)){
    $dinero=$r['saldo'];
}

$retiro = $_POST['saldoretirado'];
$billetera = $_POST['direccion'];


if($dinero>=$retiro){

    $saldototal=$dinero-$retiro;
    $RetirarSaldo=mysqli_query($conexion,"UPDATE usuarios SET saldo=$saldototal WHERE idusuario=$idusuario");
    header('location:principal.php?estado=2');

}else{

    header('location:principal.php?error=1');

}

}
?>