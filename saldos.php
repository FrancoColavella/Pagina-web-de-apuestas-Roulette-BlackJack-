<?php 
require("conexion.php");
session_start();
if(isset($_POST['alta']) && !empty($_POST['alta'])){ 
  $idusuario=$_SESSION['usuario'];
  $saldo1= $_POST['valor'];
  $insertarsaldo=mysqli_query($conexion,"UPDATE usuarios SET saldo=$saldo1 WHERE idusuario=$idusuario");
}
?>
