CREATE TABLE `Client` (
	`ID_client` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(40) NOT NULL,
	`mail` TEXT NOT NULL,
    `password` TEXT NOT NULL,
	PRIMARY KEY (`ID_client`)
);

CREATE TABLE `Emprunt` (
	`ID_emprunt` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`document_id` INT NOT NULL,
	`date_sortie` DATETIME,
	`date_retour` DATETIME,
	PRIMARY KEY (`ID_emprunt`)
);

CREATE TABLE `Document` (
	`ID_document` INT NOT NULL AUTO_INCREMENT,
	`type` varchar(10) NOT NULL,
	`examplaire` SMALLINT UNSIGNED NOT NULL, 
	`titre` VARCHAR(60) NOT NULL,
	`auteur` VARCHAR(40) NOT NULL,
	`genre` VARCHAR(30),
    `description` TEXT,
	PRIMARY KEY (`ID_document`)
);

ALTER TABLE `Emprunt` ADD CONSTRAINT FOREIGN KEY (`user_id`) REFERENCES `Client` (`ID_client`);
ALTER TABLE `Emprunt` ADD CONSTRAINT FOREIGN KEY (`document_id`) REFERENCES `Document` (`ID_document`);