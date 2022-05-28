> [![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](url) </br>
> [![sistemas_de_informação](https://img.shields.io/badge/Sistemas_de_Informação-@IFMA-blue.svg)](url) </br>
> [![jailson_soares](https://img.shields.io/badge/Jailson_Soares-DBA-orange.svg)](url) </br>

---

### • Database

### • Entidades:


O start da modelagem se dá a partir das ENTIDADES. Uma entidade é uma representação de um conjunto de informações sobre determinado conceito do sistema. Toda entidade possui ATRIBUTOS, que são as informações que referenciam a entidade.

Segue abaixo o bloco de criação do bancos de dados Mapa de Alertas e a tabela de Emails:

   CREATE DATABASE db_Sisgam_Emserf;
   USE db_Sisgam_Emserf;

Após criar o banco de dados é importante que se crie as tabelas que contém os registros, compostos por campos de informações.
Para se criar as tabelas dê o comando create table. Importe informar qual o tipo de cada um dos campos informados. Os campos podem ser dos tipos primitivos: numérico, data & tempo, literal e espacial. Porem todos eles possuem subdivisões.

  CREATE TABLE tbUsers_Emserf (
  id_email int, 
  user_Emserf varchar(100) ,
  funcao_Emserf varchar(100) ,
  PRIMARY KEY (id_email),
  UNIQUE KEY email (user_Emserf)
);