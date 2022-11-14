<!DOCTYPE html>
<html>

<head>
    <title>Tarjeta de credito</title>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://fonts.googleapis.com/css?family=Lato|Liu+Jian+Mao+Cao&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/estilo.css">
</head>
    <div class="contenedor">
        <h1 style="color:white">Tarjeta de Credito</h1>
            <section class="tarjeta" id="tarjeta">
                <div class="delantera">
                    <div class="logo-marca" id="logo-marca">
                        <!-- <img src="img/logos/visa.png" alt=""> -->
                    </div>
                        <img src="img/chip-tarjeta.png" class="chip" alt="">
                    <div class="datos">
                        <div class="grupo" id="numero">
                            <p class="label">Número Tarjeta</p>
                            <p class="numero">#### #### #### ####</p>
                        </div>
                        <div class="flexbox">
                            <div class="grupo" id="nombre">
                                <p class="label">Nombre Tarjeta</p>
                                <p class="nombre">Jhon Doe</p>
                            </div>
                            <div class="grupo" id="expiracion">
                                <p class="label">Expiracion</p>
                                <p class="expiracion"><span class="mes">MM</span> / <span class="year">AA</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="trasera">
                    <div class="barra-magnetica"></div>
                    <div class="datos">
                        <div class="grupo" id="firma">
                            <p class="label">Firma</p>
                            <div class="firma"><p></p></div>
                        </div>
                        <div class="grupo" id="ccv">
                            <p class="label">CCV</p>
                            <p class="ccv"></p>
                        </div>
                    </div>
                    <p class="leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem, voluptates illo.</p>
                    <a href="#" class="link-banco">www.tubanco.com</a>
                </div>
            </section>

            <!-- Contenedor Boton Abrir Formulario -->
            <div class="contenedor-btn">
                <button class="btn-abrir-formulario" id="btn-abrir-formulario">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <!-- Formulario -->
            <form action="comprar.php" method="POST" id="formulario-tarjeta" class="formulario-tarjeta">
                <div class="grupo">
                    <label for="recargar">Cuanto desea recargar?</label>
                    <input type="text" name="recargar" id="recargar" autocomplete="off" required>
                </div>
                <div class="grupo">
                    <label for="inputNumero">Número Tarjeta</label>
                    <input type="text" name="inputNumero" id="inputNumero" maxlength="19" autocomplete="off" required>
                </div>
                <div class="grupo">
                    <label for="inputNombre">Nombre</label>
                    <input type="text" name="inputNombre" id="inputNombre" maxlength="19" autocomplete="off" required>
                </div>
                <div class="flexbox">
                    <div class="grupo expira">
                        <label for="selectMes">Expiracion</label>
                        <div class="flexbox">
                            <div class="grupo-select">
                                <select name="mes" id="selectMes">
                                    <option disabled selected required>Mes</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                            <div class="grupo-select">
                                <select name="year" id="selectYear">
                                    <option disabled selected required>Año</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="grupo ccv">
                        <label for="inputCCV">CCV</label>
                        <input type="text" name="inputCCV" id="inputCCV" maxlength="3" required>
                    </div>
                </div>
                <button type="submit" name="aceptar" value="aceptar" class="btn-enviar">Continuar</button>
            </form>
        </div>
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
</html>