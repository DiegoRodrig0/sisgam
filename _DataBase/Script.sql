CREATE DATABASE db_Sisgam_Emserf;
USE db_Sisgam_Emserf;
CREATE TABLE tbUsers_Emserf (
  id_email int, 
  user_Emserf varchar(100) ,
  funcao_Emserf varchar(100) ,
  PRIMARY KEY (id_email),
  UNIQUE KEY email (user_Emserf)
);

INSERT INTO tbUsers_Emserf (id_email, user_Emserf, funcao_Emserf) VALUES
	(1, "jailson.soares@emserf.com", "Técnico Ferroviário"),
	(2, "yullano.santos@emserf.com", "Técnico Ferroviário"),
	(3, "odival.quaresma@emserf.com", "Técnico Ferroviário"),
	(4, "diego.teixeira@emserf.com", "Técnico Ferroviário"),
	(5, "daniel.gomes@emserf.com", "Gerente Operacional"),
	(6, "eveline.sa@emserf.com", "Diretora Executiva");

CREATE TABLE tbUnidades_Emserf (
  id_unidade int,
  unidade_Emserf varchar(50),
  PRIMARY KEY (id_unidade)
);
INSERT INTO tbUnidades_Emserf (id_unidade, unidade_Emserf) VALUES
	(1, 'Monte Castelo'),
	(2, 'Centro Histórico'),
	(3, 'São José de Ribamar'),
	(4, 'Maracanã'),
	(5, 'Prédio da Reitoria'),
	(6, 'Itaqui Bacanga');

CREATE TABLE tbEnderecos_Emserf (
  id_endereco int, 
  unidade_Endereco VARCHAR(100)  DEFAULT '',
  unidade_Bairro VARCHAR(50)  DEFAULT '',
  unidade_Cidade VARCHAR(50)  DEFAULT '',
  PRIMARY KEY (id_endereco),
  KEY FK_Endereco_Unidade (id_endereco),
  CONSTRAINT FK_Unidade_Emserf FOREIGN KEY (id_endereco) REFERENCES tbUnidades_Emserf (id_unidade)
);
INSERT INTO tbEnderecos_Emserf (id_endereco, unidade_Endereco, unidade_Bairro, unidade_Cidade) VALUES
	(1, 'Av. Getúlio Vargas', 'Monte Castelo', 'São Luís - MA'),
	(2, 'Av. Cel. Colares Moreira', 'Jardim Renascença', 'São Luís - MA'),
	(3, 'Rodovia MA 201', 'Piçarreira','São José de Ribamar - MA'),
	(4, 'Av. dos Curiós', 'Vila Esperança', 'São Luís - MA'),
	(5, 'Av. Cel. Colares Moreira', 'Jardim Renascença', 'São Luís - MA'),
	(6, 'Av. Newton Belo', 'Vila Maria', 'Imperatriz - MA');	
    
CREATE TABLE tbMapa_Emserf (
  id_Mapa int NOT NULL AUTO_INCREMENT,
  id_UserMapa int DEFAULT NULL,
  id_UnidadeMapa int DEFAULT NULL,
  PRIMARY KEY (id_mapa),
  UNIQUE KEY USER_ID_UNIDADE_ID (id_Mapa, id_UnidadeMapa ),
  KEY fk_tbMapa_Emserf_id_UnidadeMapa (id_UnidadeMapa),
  KEY fk_tbMapa_Emserf_id_Mapa (id_Mapa),
  CONSTRAINT fk_tbMapa_Emserf_id_UnidadeMapa FOREIGN KEY (id_Mapa) REFERENCES tbUsers_Emserf (id_email),
  CONSTRAINT fk_tbMapa_Emserf_id_Mapa FOREIGN KEY (id_UnidadeMapa) REFERENCES tbUnidades_Emserf (id_unidade)
);

INSERT INTO tbMapa_Emserf (id_Mapa, id_UserMapa, id_UnidadeMapa) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 1),
	(4, 4, 1),
	(5, 5, 1),	
	(6, 6, 1);