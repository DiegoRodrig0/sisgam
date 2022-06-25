-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.27 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_sisgam_emserf
CREATE DATABASE IF NOT EXISTS `db_sisgam_emserf` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_sisgam_emserf`;

-- Dumping structure for table db_sisgam_emserf.tb_map_sisgam
CREATE TABLE IF NOT EXISTS `tb_map_sisgam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `receiver_id` int DEFAULT NULL,
  `sede_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `receiver_id_sede_id` (`receiver_id`,`sede_id`),
  KEY `fk_receiversede_sede_idx` (`sede_id`),
  KEY `fk_receiversede_receiver_idx` (`receiver_id`),
  CONSTRAINT `fk_receiversede_receiver` FOREIGN KEY (`receiver_id`) REFERENCES `tb_user_sisgam` (`id`),
  CONSTRAINT `fk_receiversede_sede` FOREIGN KEY (`sede_id`) REFERENCES `tb_unity_sisgam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=384 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table db_sisgam_emserf.tb_map_sisgam: ~9 rows (approximately)
DELETE FROM `tb_map_sisgam`;
/*!40000 ALTER TABLE `tb_map_sisgam` DISABLE KEYS */;
INSERT INTO `tb_map_sisgam` (`id`, `receiver_id`, `sede_id`) VALUES
	(1, 1, 1),
	(2, 2, 2),
	(373, 2, 5),
	(3, 3, 3),
	(4, 4, 4),
	(5, 5, 9),
	(383, 6, 2),
	(366, 6, 9),
	(21, 7, 4),
	(368, 7, 5),
	(7, 7, 9),
	(382, 8, 2),
	(8, 8, 8),
	(9, 9, 1),
	(12, 12, 6),
	(14, 14, 3),
	(15, 15, 4),
	(169, 16, 3),
	(16, 16, 5),
	(369, 17, 5),
	(17, 17, 6),
	(370, 18, 5),
	(18, 18, 8),
	(365, 19, 1),
	(19, 19, 7),
	(363, 20, 2),
	(20, 20, 5);
/*!40000 ALTER TABLE `tb_map_sisgam` ENABLE KEYS */;

-- Dumping structure for table db_sisgam_emserf.tb_unity_sisgam
CREATE TABLE IF NOT EXISTS `tb_unity_sisgam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `site` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `ref` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table db_sisgam_emserf.tb_unity_sisgam: ~9 rows (approximately)
DELETE FROM `tb_unity_sisgam`;
/*!40000 ALTER TABLE `tb_unity_sisgam` DISABLE KEYS */;
INSERT INTO `tb_unity_sisgam` (`id`, `nome`, `site`, `ref`) VALUES
	(1, 'Tamancão', 'R. do Apicum, 6-198', 'Próx. Sítio Tamancão'),
	(2, 'Gancharia', '2a Travessa da Rua Nova', 'Próx. Lanchonete Arena Gancharia'),
	(3, 'Fumacê', 'Av. Vaticano', 'Próx. Igreja Adventista do Sétimo Dia'),
	(4, 'Madre deus', 'Av. Sen. Vitorino Freire, S/N', 'Próx. Tribunal Regional Eleitoral MA'),
	(5, 'Monte Castelo', 'Av. Getúlio Vargas, 04', 'Próx. ao SENAI Monte Castelo'),
	(6, 'Apeadouro', 'Av. Getúlio Vargas, 88', 'Próx. Igreja São Vicente de Paulo'),
	(7, 'João Paulo', 'Av. São Marçal, s/n ', 'Prox. ao 24ª BIS Exército Brasileiro'),
	(8, 'Anil', 'Av. Casemiro Júnior, 12', 'Próx. a Faculdade CEST'),
	(9, 'Lima Verde', 'Estrada de Ribamar, MA-201, Km-05', 'Próx. Pátio Norte Shopping');
/*!40000 ALTER TABLE `tb_unity_sisgam` ENABLE KEYS */;

-- Dumping structure for table db_sisgam_emserf.tb_user_sisgam
CREATE TABLE IF NOT EXISTS `tb_user_sisgam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table db_sisgam_emserf.tb_user_sisgam: ~0 rows (approximately)
DELETE FROM `tb_user_sisgam`;
/*!40000 ALTER TABLE `tb_user_sisgam` DISABLE KEYS */;
INSERT INTO `tb_user_sisgam` (`id`, `email`) VALUES
	(18, 'alberico@emserf.com'),
	(17, 'alexandre@emserf.com'),
	(19, 'claudio@emserf.com'),
	(4, 'diego@emserf.com'),
	(14, 'erik@emserf.com'),
	(8, 'evaldinolia@emserf.com'),
	(7, 'eveline@emserf.com'),
	(13, 'flavio@emserf.com'),
	(1, 'jailson@emserf.com'),
	(11, 'joaocarlos@emserf.com'),
	(9, 'josenildo@emserf.com'),
	(15, 'josias@emserf.com'),
	(16, 'juciana@emserf.com'),
	(12, 'mauro@emserf.com'),
	(3, 'odival@emserf.com'),
	(20, 'omar@emserf.com'),
	(6, 'osvaldo@emserf.com'),
	(5, 'santiago@emserf.com'),
	(2, 'yullano@emserf.com');
/*!40000 ALTER TABLE `tb_user_sisgam` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
