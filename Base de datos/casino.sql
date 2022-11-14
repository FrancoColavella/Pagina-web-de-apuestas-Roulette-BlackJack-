-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2022 a las 17:20:54
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `casino`
--
CREATE DATABASE IF NOT EXISTS `casino` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `casino`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombreusuario` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `saldo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombreusuario`, `contrasenia`, `saldo`) VALUES
(1, 'Admin', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 0),
(3, 'FrancoDios96', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 45),
(4, 'Avezani', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 50),
(5, 'Luna', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 600),
(6, 'Killer', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 9950),
(7, 'Fabri', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 2350),
(8, 'Nikito', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
