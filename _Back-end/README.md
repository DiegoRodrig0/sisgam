> [![interação_homem_máquina](https://img.shields.io/badge/Interação_Homem_Máquina-Profa%20Eveline%20Sá-blue.svg)](url) </br>
> [![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](url) </br>
> [![sistemas_de_informação](https://img.shields.io/badge/Sistemas_de_Informação-@IFMA-blue.svg)](url) </br>
> [![iulano_santos](https://img.shields.io/badge/Iulano_Santos-Backend%20Developer-orange.svg)](url) </br>

---

### • Aplicação do lado do Servidor (Server-side):

No backend, também conhecido como Server-side, temos a estrutura necessária para a operação de um sistema. No nosso caso, o backend tem função também de API, cuja construção foi feita com o framework **Node** da Stack Javascript.

Importante sabermos o que é uma API (*Interface de Programação de Aplicações*): Conjunto de padrões, rotinas e instruções de programação que permite que softwares ou aplicativos diferentes se conectem. O uso de uma API evita que um desenvolvedor precise criar e instalar diferentes recursos para que sistemas ou aplicativos diferentes “conversem” entre si. Isso contribui para reduzir o tempo da integração e para liberar o uso da solução muito mais rápido.</br></br>
Vide abaixo a arquitetura utilizada e o papel da API no **SISGAM - Sistema de Gerenciamento de Alertas de Manutenção**:

<h5 align="center">
<img src="https://user-images.githubusercontent.com/40738499/170811381-a1222db6-a889-44c9-a6b2-bfe6562a2fad.png" width="600px" /></br>
</h5>

Abaixo listaremos 03 principais motivos de usarmos esse recurso ao desenvolver o produto do cliente **EMSERF**:

- **Segurança**: as APIs são seguras, pois criam uma espécie de barreira que permite acesso apenas às informações que fazem parte daquela aplicação, e não ao sistema por inteiro.
- **Menor volume de dados**: considerando que cada API é específica para determinada função, são inseridos no sistema apenas os dados que realmente são necessários para a ação esperada.
- **Aumento da eficiência de sistemas e aplicativos**: as APIs contribuem para melhorar a performance de sistemas, sem que seja preciso iniciar processos de desenvolvimento que levem a esse resultado do zero.

---
### CONSTRUÇÃO DO BACKEND:
Para que o backend funcione em uma aplicação web, é necessário um serviço de roteamento e que sobretudo seja capaz de simular o funcionamento de um servidor web. Sendo assim, devemos importar o respectivo pacote com essas propriedades. A partir da nossa App Desktop, vamos subir um servidor Web e assim abrir um socket com uma porta que recebe requisições através do Express.js.

---
### **Definição de porta(s) de comunicação do serviço + credenciais no arquivo de configuração**:
Sempre que um pacote de dados for enviado, "app" usa o protocolo HTTP, que por sua vez, roda em cima do TCP. Sendo assim, 
envia-se bytes pra uma determinada porta da aplicação de quem está escutando a request. Todo cliente que quer escutar uma 
conexão remota precisa de uma porta TCP, e o próprio protocolo TCP designa portas para alguns softwares (Ex: React, 3001).

Para tal, é crucial criar o *Arquivo de Configuração*, que simula um ambiente de execução. Ou seja, as variáveis dele sobrescrevem as variáveis de produção. Então podemos usá-lo conforme ambiente (produção, teste, etc). O pacote usado para gerenciar esse processo é o dotenv/npm:

```text

SERVER_PORT=3001

SISGAM_MYSQL_DB_HOST=127.0.0.1
SISGAM_MYSQL_DB_USER=root
SISGAM_MYSQL_DB_PASSWORD=root
SISGAM_MYSQL_DB_PORT=33060
SISGAM_MYSQL_DB_SCHEMA=db_sisgam_emserf

```

---

### **Conexão com o Banco de Dados**:
Nas configurações do Banco de Dados MySQL, usamos uma interface para um conector oficial do MySQL: @mysql/xdevapi.

```js
require('dotenv').config({ path: 'config.env' });
const mysqlx = require('@mysql/xdevapi');
const dbClient = function () { };

async function getConnection() {
    const config = {
        password: process.env.SISGAM_MYSQL_DB_PASSWORD,
        user: process.env.SISGAM_MYSQL_DB_USER,
        host: process.env.SISGAM_MYSQL_DB_HOST,
        port: parseInt(process.env.SISGAM_MYSQL_DB_PORT),
        schema: process.env.SISGAM_MYSQL_DB_SCHEMA
    }     
    return mysqlx.getSession(config);
}

dbClient.getConnection = getConnection;
module.exports = dbClient;
```

---

### **Models, Controllers e Routes**:

As rotas precisam ser registradas antes da aplicação ouvir. Logo, além de definí-las, é necessário exportá-las.
As actions efetivamente, são feitas por Controllers. A seguir temos alguns exemplos de Models, Controlers e Rotas criadas por contexto:


*Model UNITY*

```js
const sisgamDb = require('../repository/sisgamDb');
const Unity = function () { };

Unity.getAllUnits = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql('SELECT id, nome, site FROM tb_unity_sisgam ORDER BY site');

    let data = [];
    try {
        data = await query.execute();
    }
    catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return data.fetchAll();
}

module.exports = Unity;
```


*Controller MAP*

```js
const User = require('../model/sisgam_user_model');
const Map = require('../model/sisgam_map_model');

async function bindMap(req, res) {
    if (req.body && req.body.email && req.body.sedeId) {
        try {
            let email = req.body.email;
            let sede_id = req.body.sedeId;
            if (email) {
                let receiver_id = await User.findIdByEmail(email);
                if (receiver_id === -1) {
                    receiver_id = await User.insertUsers(email);
                }

                await Map.insertUserByUnity(receiver_id, sede_id);
                res.status(200).send({msg: "✅ Email vinculado com sucesso!"});
            }
            else {
                res.status(500).send({ error: 'A propriedade email precisa estar no domínio @emserf.com' });
            }
        }
        catch (ex) {                        
            res.status(500).send({ error: "⚠️ Email já está vinculado a esta unidade!" });
        }
    }
    else {
        res.status(500).send({ error: '⚠️ Você precisa informar o email!' });        
    }
}

async function getGeneralList(req, res) {
    try {
        const response = await Map.getGeneralList();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.bindMap = bindMap;
exports.getGeneralList = getGeneralList;
```


Munidos de Models e Controllers, construimos o componente *Routes*, vide abaixo:

```js
const Sisgam_Unity_Controller = require('../controller/sisgam_unity_controller');
const Sisgam_User_Controller = require('../controller/sisgam_user_controller');
const Sisgam_Map_Controller = require('../controller/sisgam_map_controller');

module.exports = async function (app) {
    //================================== UNITY ROUTES ==============================================
    app.route('/sisgam_unity/deleteUsersByUnity').post(Sisgam_Unity_Controller.deleteUsersByUnity);
    app.route('/sisgam_unity/insertUserByUnity').post(Sisgam_Unity_Controller.insertUserByUnity);
    app.route('/sisgam_unity/getUsersByUnity').post(Sisgam_Unity_Controller.getUsersByUnity);
    app.route('/sisgam_unity/getUnityDetails').post(Sisgam_Unity_Controller.getUnityDetails);
    app.route('/sisgam_unity/getUserDetails').post(Sisgam_Unity_Controller.getUserDetails);
    app.route('/sisgam_unity/getCountUsers').get(Sisgam_Unity_Controller.getCountUsers);
    app.route('/sisgam_unity/getAllUnits').get(Sisgam_Unity_Controller.getAllUnits);

    //================================== USER ROUTES ====================================
    app.route('/sisgam_user/insertUsers').post(Sisgam_User_Controller.insertUser);
    app.route('/sisgam_user/getAllUsers').get(Sisgam_User_Controller.getAllUsers);
    app.route('/sisgam_user/bindMap').post(Sisgam_Map_Controller.bindMap);

    //================================== MAP ROUTES =================================   
    app.route('/sisgam_map/getGeneralList').get(Sisgam_Map_Controller.getGeneralList);
}
```

---

<!-- ### <a href="https://github.com/yullano90/emserf_service_map_manager/tree/master/_Back-end"> ACESSE O CÓDIGO COMPLETO AQUI. </a> -->


<!-- ### IMPORTANTE: 
*O bom programador, ao documentar o comportamento da API durante requisições HTTP, usa o 'Index' pra "logar" o feedback no console da API e
a 'Controller' para "logar" no console do cliente. Assim a manutenção da aplicação torna mais fácil a rastreabilidade/mapeamento de erros.* 

```js

```

-->
