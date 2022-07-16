<h5 align="center">
</br>
<img src="https://user-images.githubusercontent.com/40738499/168456236-ce8aac11-ddb7-4dbb-a540-00c39e10927b.png" width="250px" />
</br></br></br></br>

DEPARTAMENTO DE COMPUTAÇÃO</br>
SISTEMAS DE INFORMAÇÃO</br>
</br>

[![interação_homem_máquina](https://img.shields.io/badge/Interação_Homem_Máquina-Profa%20Eveline%20Sá-blue.svg)](url)</br>
<!-- [![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](url)</br> -->
</br>

<h4 align="center">
  RELATÓRIO TÉCNICO DE PROTOTIPAÇÃO E MODELAGEM DE USUÁRIO</br>
  SISGAM • SISTEMA DE GERENCIAMENTO DE ALERTAS DE MANUTENÇÃO </br>
 </h4>
</br></br></br></br>

<h5 align="center">
VERSÃO 1.0.0 • JUNHO 2022
 <br/><br/>
SÃO LUÍS, MARANHÃO </br>
</h5>
</br></br></br></br>

---

<h3 align="center">
  FICHA TÉCNICA </br>
 </h3>

**Equipe Responsável pela Elaboração**

DIEGO RODIRGO TEIXEIRA  • Product Design </br>
IULANO SILVA DOS SANTOS • Server-side </br>
ODIVAL QUARESMA NETO • Client-side </br>
</br></br>

## Demanda: 
 
Empresas de grande porte que trabalham com manutenção, logística, gerenciamento de estoque, etc, geralmente possuem sistemas de informação que geram alertas para suas equipes, seja para manutenção de equipamentos, seja para informar atualização de estoque, manutenções urgentes e etc.

Nesse contexto, temos o cenário da **EMSERF** *Empresa Maranhense de Serviços Ferroviários*, que já possui um **Sistema Core** que gerencia toda a organização, e este possui um endpoint para gerar alertas de manutenção e atualização de estoque por e-mail, todavia o banco de dados que informa os técnicos que recebem alerta é atualizado manualmente. Isso se deve ao fato da empresa ter feito apenas a aquisição do ***serviço de envio de alertas sem comprar a interface*** (que na ocasião teria um custo bastante elevado), por conta desse desvio a equipe de operações passou a seguir o seguinte fluxo: 
O setor de manutenção manda um *"Planilhão de Excel"* semanalmente com a relação de técnicos, por conseguinte, também de forma manual, o Administrador de Banco de Dados escreve consultas SQL (INSERT/UPDATE/DELETE) diretamente na base de dados, com os técnicos que, de fato, devem receber os alertas. Isso gera desgaste, sujeição à falha humana e sobretudo impacto direto no SLA das demandas do time de desenvolvimento EMSERF.

Como MVP, temos a proposta do **SISGAM • Sistema de Gerenciamento de Alertas de Manutenção**. Reiteramos que, o SISGAM não substitui o SISCORE, ele é apenas uma **Aplicação Satélite** desenvolvida especialmente para automatizar o processo e reduzir custos de implementação do fabricante do SISCORE, conforme diagram abaixo:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/175784007-abc51aea-0a5f-4a59-ba36-1ca939e0efbc.png" width="800px" />
	<p>Diagrama da Solução</p>
</div>

## Público Alvo:

Esta aplicação é destinada aos gestores e pontos focais da equipe técnica de Manutenção Ferroviária do cliente EMSERF, podendo estes usuários através de uma interface Web e em tempo real, definir quais profissionais devem receber alertas de manutenção em sua região de atuação.

| Release/Versão | Local | Data |
| ------------ | ----------------- | ------------------------- |
| Release vs_0.1.0 | São Luís - MA | 16 de Maio de 2022 |
| Release vs_0.2.0 | São Luís - MA | 28 de Junho de 2022 |
| Versão v1.0.0 | São Luís - MA | 07 de Julho de 2022 |

---
</br>

## Seção 1.
### Descrição das Histórias de Usuários:

Histórias de usuários são um dos principais componentes em Desenvolvimento Ágil de Software, uma vez que colocam as pessoas como peça-chave na hora de se pensar no design e funcionalidade de uma aplicação.
Essas histórias usam linguagem não-técnica para dar contexto à equipe de desenvolvimento e suas iniciativas.
Menor unidade de trabalho na estrutura do Desenvolvimento Ágil, é uma explicação informal e geral sobre um recurso de software, articulado na forma de uma única tarefa que pode oferecer valor ao cliente ou _stakeholder_ da aplicação em tela
### Usuários da aplicação:
**Ponto Focal**: Usuário responsável por realizar a destinação dos alertas de manutenção no Sisgam conforme diretrizes da supervisão/gerência e assim aplicar priorização de manutenções. <br/><br/>
**Gestor**: Determina as prioridades dos alertas pra os pontos focais de sua respectiva cobertura operacional. A princípio é um usuário que apenas visualiza informações, porém ele possui exatamente as mesmas funcionalidades do Ponto Focal, para quando conveniente ou necessário realizar movimentações no sistema.<br/><br/>
**Administrador**: Usuário desenvolvedor, sendo responsável pelo suporte da aplicação.

Segue abaixo algumas histórias de usuários relacionadas ao desenvolvimento da aplicação para o cliente EMSERF:
| Categoria      | Descrição                                                                                                                                                                                         |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  			 NOTIFICAÇÃO 		 |  			 Como ponto focal eu quero poder informar facilmente quando houver necessidade de manutenção. 		                                                                                                       |
|  			 NOTIFICAÇÃO 		 |  			 Como ponto focal eu quero alertar rapidamente uma necessidade de manutenção. 		                                                                                                                       |
|  			 INTERFACE 		   |  			 Como ponto focal eu quero poder detalhar o item, local e tipo de manutenção necessária. 		                                                                                                            |
|  			 API 		         |  			 Como gestor quero poder revisar e editar qualquer uma das entradas de alerta gerados pelos usuários. 		                                                                                    |
|  			 INTERFACE 		   |  			 Como gestor quero poder visualizar os alertas e os técnicos escalados para cada demanda. 		                                                                                                      |
|  			 NOTIFICAÇÃO 		 |  			 Como gestor eu quero receber notificação de alertas automaticamente via email. 		                                                                                                                |
|  			 INTERFACE 		   |  			 Como gestor quero poder acessar a plataforma e visualizar o alerta e seus detalhes. 		                                                                                                           |
|  			 INTERFACE 		   |  			 Como gestor ou ponto focal gostaria de ter uma tela que oferece visão geral dos alertas e unidades onde os alertas estão alocados. 		                                                                           |
|  			 ACESSO 		      |  			 Como ponto focal gostaria de poder ter um login próprio para que eu possa ter a garantia de que as movimentações feitas por mim ficaram registradas com segurança. 		                                                                    |
|  			 RELATORIA 		   |  			 Como gestor gostaria que a aplicação gere relatórios com base em critérios específicos como tipos de alerta e unidades alocadas. 		                                                        | 		 |
|  			 RELATORIA 		   |  			 Como ponto focal gostaria de ter um recurso que permita exportar os relatórios como planilhas de Excel ou documentos .pdf ou .csv.                                             

---
## Seção 2.
### Definição de Personas:

A definição de personas é fundamental para determinar se o produto oferecido será bem sucedido ou se ajustes precisam ser feitos pra que um modelo transversal seja desenvolvido para os usuários, baseado em seus objetivos, tarefas, perfil, facilidade ou dificuldade com determinada habilidade, entre outras características. Com base nesse levantamento, utilizamos o padrão **PROTO PERSONA**, que é uma "engenharia reversa do nosso produto", onde analisamos o conteúdo do nosso sistema, os requisitos do cliente EMSERF, ambiente de trabalho dos usuários, tarefas executadas entre outros atributos. </br>
Vide abaixo as duas personas que melhor representam a essência de quem é nosso usuário do sistema:

	• PERSONA 1:
	Nome: Maria Joana
	Idade: 41 anos;
	Formação Acadêmica: Bacharel em Engenharia Mecânica;
	Status da Graduação: Concluídos;
	Cargo no setor: Técnico Especializado em Manutenção;
	Tempo na empresa: 21 anos;
	Localidade: Trabalha em São Luís, Maranhão;
	Conhecimento em TI: Essencial;
	

	• PERSONA 2:
	Nome: Paulo Alberto
	Idade: 19 anos;
	Formação Acadêmica: Bacharel em Sistemas de Informação;
	Status da Graduação: Em andamento;
	Cargo no setor: Estagiário de Programação;
	Tempo na empresa: 8 meses;
	Localidade: Trabalha em Santa Inês, Maranhão;
	Conhecimento em TI: Avançado;
	


---
## Seção 3.
### Aplicação do PACT Framework:

<h5 align="center">
<img src="https://user-images.githubusercontent.com/11811499/176829327-25fede78-dc43-4618-8e00-e59ba79882db.jpeg" width="800px" />
</h5>

### **PESSOAS:**

A aplicação é projetada para ser simples e interativa para o usuário final, tornando-se de fácil manuseio.</br>
Importante frisar que seu acesso é permitido apenas para colaboradores da empresa **EMSERF**, por ser uma aplicação de contexto estritamente interno e passivo de autenticação em rede corporativa.</br>
O sistema é desenvolvido para rodar apenas via browser, pois as pessoas que irão acessá-lo não ficam em campo, apenas em salas de monitoramento operacional, não impactando no processo ergonômico de suas demais atividades, com utilização semanal. Além disso, a aplicação também foi pensada para pessoas que eventualmente sejam portadoras de *daltonismo* através da aplicação de paleta de cores adequadas, sem agredir o padrão de identidade visual da marca EMSERF.

### **ATIVIDADES:**

**Vamos destacar atividades de nossos usuários, com base em funcionalidades chave do sistema, assim fica mais fácil mapear cada atividade impactada:**

**Aspectos Temporais** </br>
Algumas das atividades serão realizadas apenas uma vez por sessão, tais como Login/Autenticação e Logout. Outras atividades são realizadas diversas vezes numa mesma sessão de uso, tais como Acesso ao Dashboard, Detalhes da Sede, Selecionar Técnicos, Vincular/Desvincular Técnicos e Menu Retrátil;

**Cooperação** </br>
O uso do sistema não requer a colaboração de ninguém e pode ser operado inteiramente sozinho. Dito isto a presença ou supervisão no uso do sistema por outros não prejudica o uso do mesmo;

**Complexidade** </br>
De modo geral as atividades são bem específicas, e pouco complexas ocorrendo em apenas um ou duas etapas, no entanto uma das atividades, o Acesso ao Dashboard é complexa e relativamente vaga pois o usuário pode navegar por diversos menus a partir do Dashboard, o que pode levar às funções que requerem mais de duas etapas;

**Segurança** </br>
Nenhum erro crítico pode ser gerado sem que seja possível sua reversão, de modo que embora a maioria das atividades sejam importantes do ponto de vista da segurança do sistema nenhuma delas é crítica à exceção do Login/Autenticação, que constitui uma função sensível para saneamento e controle do uso da plataforma.

**Conteúdo** </br>
As atividades realizadas no sistema não necessitam de nenhum tipo de dispositivo diferente de um mouse, teclado e monitor presentes no computador para utilização do sistema. Em termos de dados o Login/Autenticação requer inserir senhas alfanuméricas simples (uma para cada usuário), ademais temos apenas a exportação de tabela Excel com os dados dos técnicos de cada matriz;

### **CONTEXTO:**

**Contexto Organizacional:**
O acesso de dados não possui classificação pois somente pontos focais e gestores acessam o sistema na mesma hierarquia de usuário.

**Contexto Social:**
Um sistema de fácil usabilidade, prático e por isso tutoriais e manuais não se fazem essenciais. Uma única explanação já deixa o usuário da área apto ao uso.

### **TECNOLOGIA:**

Durante o desenvolvimento do projeto é utilizada a tecnologia de edição gráfica **Figma**, largamente aplicada para prototipagem de projetos de design baseados principalmente no navegador web e aplicações mobile.

**Execução**:
- Os sistemas operacionais Windows, MacOS, diferentes versões do Linux, Docker entre outros podem executar a aplicação e qualquer browser popular incluindo internet explorer 8 ou superior, podem renderizá-la sem problemas de compatibilidade.

**Frontend e Backend**: 
Adotou-se a Stack Javascript para desenvolver o software, tanto do lado do cliente quanto do lado do servidor, pois é uma tecnologia estável, performática em browser, os frameworks Nodejs (Backend) e Reactjs (Frontend) possuem boa aprovação pelos times de governança de TI dos grandes players de Tecnologia em auditorias cibernéticas, além de ter o suporte de uma das maiores comunidades do planeta.

**Requisitos básicos para bom funcionamento:**
- 32GB de armazenamento ou superior;
- 2GB de RAM ou superior;
- Processador Quad-Core ou superior;
- Internet de 1 Mb/s ou superior;

**Suporte e Tempo de Entrega da aplicação**:
A infraestrutura de TI é do próprio cliente EMSERF, e os Desenvolvedores fazem parte também do time de TI EMSERF, sendo assim torna-se mais fácil entender as dores e limitações do cliente, além disso o tempo estimado para desenvolver e entregar a aplicação está entre 08 a 12 semanas (dias corridos expurgando feriados), pois na esteira entram: Prototipagem, Reuniões com o cliente, Frontend, Backend (API), Testes de Estress da app, Testes de aceitação com o cliente, Conteinerização e Deployment do sistema em infratestrutura corporativa EMSERF.

**Dispositivos de Entrada:**  Dizem respeito a maneira como as pessoas irão inserir dados e instruções em um sistema de forma segura. No caso deste sistema, o uso dos dedos para o manuseio e seleção dos campos do sistema – login, senha, clique em cartões ou ícones, etc. Também é necessário o teclado físico ou virtual do PC/Notebook utilizado.

**Dispositivos de Saída:** Dizem respeito a maneira como o conteúdo será exibido para as pessoas interessadas. No caso desse sistema, haverá o uso da tela do monitor do PC ou Notebook para a visualização dos dados que serão mostrados de acordo com o manuseio do software.


---
## Seção 4.
### Lista de Requisitos:
Requisitos são solicitações e demandas que se espera de uma dada aplicação projetada. Os requisitos expressam de forma técnica e objetiva as propriedades que um _software_ exibe ou precisa exibir para satisfazer um objeto, comportamento ou atender um determinado objetivo.
Estes podem ser divididos em duas grandes categorias, a saber, __requisitos funcionais__ e __requisitos não funcionais__.

#### Requisitos Funcionais

Requisitos funcionais são a materialização de uma necessidade ou solicitação realizada pelo _software_. Estes descrevem os comportamentos básicos do sistema sob condições específicas, seus requisitos de funcionamento e restrições.
Segue abaixo os requisitos funcionais do sistema em tela:

| __RF001__                     | Edição da grade de unidades                                                                                                                                                                                                                                                                                                     |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                               | O sistema deve permitir que administradores adicionem, editem ou deletem unidades da empresa em uma grade na tela principal.                                                                                                                                                                                                 |
|  			 __Ator:__                   | Administrador                                                                                                                                                                                                                                                                                                                |
|  			 __Prioridade:__             | Essencial                                                                                                                                                                                                                                                                                                                    |
|  			 __Entrada e pré-condições__ | Conexão com internet e privilégios de administração                                                                                                                                                                                                                                                                          |
|  			 __Saída e pós-condições__   | Modificação na configuração da grade de unidades                                                                                                                                                                                                                                                                             |
|  			 __Fluxo de Eventos:__       | 1. Administrador loga no sistema e vai para página principal;<br/> 2. Administrador clica no ícone de edição nos elementos que representam as unidades da empresa (dispostos em forma de grade);<br/> 3. Uma nova tela se abre oferecendo opções para editar detalhes numa unidade específica, há opção para deletar a unidade também. |


| __RF002__                     | Gerenciamento de usuários que devem receber alertas                                                                                                                                                                                                                               |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                               | O sistema deve permitir que usuários habilitados possam vincular ou desvincular gerenciando quem de fato deve receber alertas de manutenção.                                                                                                                                                              |
|  			 __Ator:__                   | Administrador                                                                                                                                                                                                                                |
|  			 __Prioridade:__             | Importante                                                                                                                                                                                                                                   |
|  			 __Entrada e pré-condições__ | Estar logado no sistema, ter um alerta aberto                                                                                                                                                                                                |
|  			 __Saída e pós-condições__   | Modificação em um alerta específico                                                                                                                                                                                                          |
|  			 __Fluxo de Eventos:__       | 1. O administrador seleciona uma unidade da empresa na tela principal; 2. Na listagem de técnicos da unidade escolhida ele pode então vincular ou desvincular técnicos na sede de manutenção selecionada e a partir de então o sistema core de alertas passa automaticamente a disparar alertas para o usuário vinculado a determinada sede, pois ele enxerga apenas o banco de dados, cumprindo assim o seu papel de "Aplicação Satélite". |


| __RF003__                     | Geração de relatório das movimentações realizadas                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                               | O sistema deve gerar relatório com arquivo pode ser impresso ou salvo em disco com extensão .csv, com as movimentações realizadas.                                                                                                                                                                                                                                                                                                                   |
|  			 __Ator:__                   | Usuário                                                                                                                                                                                                                                                                                                                                                                                                                |
|  			 __Prioridade:__             | Importante                                                                                                                                                                                                                                                                                                                                                                                                             |
|  			 __Entrada e pré-condições__ | Acesso ao sistema 		                                                                                                                                                                                                                                                                                                                                                                                                     |
|  			 __Saída e pós-condições__   | Um arquivo com extensão .pdf ou .csv		                                                                                                                                                                                                                                                                                                                                                                                     |
|  			 __Fluxo de Eventos:__       | 1. O usuário clica no ícone de "Export Excel" no Menu Lateral Retrátil; 2. O sistema executa método de exportação do array resultante das movimentações aplicadas. |

#### Requisitos Não Funcionais

Requisitos não funcionais por sua vez definem o que o sistema fará, como cada comportamento será realizado. São as próprias premissas e restrições técnicas de um projeto. Segue abaixo lista de requisitos não-funcionais do sistema em tela:

| __Id.:__ | NF001 |
|---|---|
| __Categoria:__ | Usabilidade |
| __Nome:__ | Uso de Design Responsivo nas interfaces gráficas |
| __Descrição:__ | As telas do sistema serão construídos para rodar em ambiente web e, portanto, devem possuir um design responsivo. A interface do sistema deverá se comportar de modo adequado independentemente de tamanho de tela ou configuração da janela – lembrando que o sistema deve ser utilizado na própria empresa, em desktop próprio da companhia. Ao longo do desenvolvimento serão realizados testes de usabilidade para validar este requisito. |
| __Prioridade:__ | Importante |

| __Id.:__ | NF002 |
|---|---|
| __Categoria:__ | Compatibilidade |
| __Nome:__ | Compatibilidade do sistema com navegadores |
| __Descrição:__ | Uma vez que o sistema é acessado via website, ele deve ser compatível com os principais navegadores – Firefox, Chrome, Internet Explorer e Edge. |
| __Prioridade:__ | Importante |

| __Id.:__ | NF003 |
|---|---|
| __Categoria:__ | Padrões |
| __Nome:__ | Divisão arquitetural do sistema em módulos |
| __Descrição:__ | O projeto do sistema deve ser orientado observando os princípios de design de desacoplamento e alta coesão, dividindo tanto quanto possível as responsabilidades entre suas diferentes partes. O projeto será arquitetado de forma modular, onde cada módulo contém apenas os algoritmos pertinentes à sua responsabilidade. |
| __Prioridade:__ | Essencial |


---

## Seção 5.
### Prototipação:

A criação do protótipo foi feita com a Tecnologia Figma, software recomendado pela professora Eveline Sá, onde foi possível gerar um modelo de Alta Fidelidade.

Os componentes IHC analisados e utilizados foram: 

**As primitivas:** 

- Arranjo ou layout onde o foco foi em proporcionar ao usuário um equilíbrio nas telas, distribuindo os elementos de forma balanceada;
- Fundos ou background onde optou-se por fundos de telas e janelas com cores neutras, pensando em usuários com desvios visuais como o Daltonismo, Astigmatismo entre outros. Desta forma a aplicação possui dois temas:
- *Emserf Theme:* Paleta de cores brandes em referência a bandeira do Maranhão).
- *Dark Theme:* Cores mais escuras com paletas espefícas para daltônicos e pessoas com sensibilidade a luz.

**Diálogo:** 

- Ação onde o foco foi proporcionar ao usuário uma linguagem simples e objetiva e por ser um sistema satélite a resposta é bem rápida; 

**Objetos de Interação**: 

- Planos de fundo, primeiro plano, janelas e bordas bem definidas;

**Sistema de significados:** 

- Utilizou-se ícones em várias partes da interface, reduzindo a máximo o volume de textos, tornando a comunicação limpa e sobretudo que para o usuário seja intuitivo onde precisa clicar pra atingir determinado objetivo. Essa relação simbólica foi usada de forma simples e respeitando seus significados, visando uma interpretação clara, partindo do ponto que os ícones estão sujeitos a interpretações individuais de cada pessoa, e por conseguinte atribuiu-se a eles funcionalidades coerentes.</br>

</br>A ideia central do sistema foi desde o início conseguir transmitir ao usuário uma clara interpretação baseando-se pelos princípios de design que tratam sobre **Organizar e Comunicar**. 

Sobre a organização, visou-se ter um layout de tela muito bem definido que conseguisse facilitar a vida do usuário, prezamos por uma boa navegabilidade e foco na atenção. Com a comunicação, buscamos uma compreensão clara das ações do sistema, mostrando simplicidade, evitando densidade, ter objetividade e uma clara comunicação visual, utilizando ícones de fácil identificação e interpretação. 

O sistema tem um ótimo modelo conceitual, evitando que o usuário opere cegamente sem conseguir identificar o efeito de suas ações. Aplicou-se alguns *padrões em cada frame*, como: as paletas de cores visando dois fatores, abranger usuários com desvios visuais e cores que fizessem referência ao **Maranhão** e um menu lateral com a utilização de ícones de fácil interpretação, buscando uma melhor navegabilidade.

**1° Frame:** Uma interface limpa onde o nosso usuário tem acesso ao sistema
<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/173443250-97f6e4d5-0fe5-4486-bf06-b5d775076ebc.gif" width="700px" />
</div>

**2° Frame:** Nessa nossa primeira tela pós login, temos uma interface com janelas buscando os seguintes princípios de design:
- Boa navegabilidade e com bastante foco na atenção; 
- Bordas arredondadas visando um layout mais atual;
- Usuário pode também ter um acesso a informações mais detalhadas de cada sede.

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/173443445-633714a1-1d59-4110-8f87-f8e04b7fd39d.gif" width="700px" />
</div>

**3° Frame:** Tela com uma comunicação buscando objetividade e simplicidade, nesse frame temos os técnicos alocados em cada sede e através de um ícone de fácil interpretação é possível realocar outros técnicos pra essa localidade.

<!-- <div align="center">
<img src="https://user-images.githubusercontent.com/84028669/173393823-c7b60715-8c00-4cac-9e13-bc41fcac23ae.jpeg"width="700px" />
</div> -->

**4° e 5° Frame:** Duas telas onde continuamos propondo um design simples, é mostrado a facilidade de compreenção das acões do sistema, possibilitando deletar apenas um técnico ou todos da sede, e um ícone de representatividade universal para significar o termo "deletar".

</br>
<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/174424686-785f8635-d321-459f-bd25-1745c82395be.gif" width="800px" />
</div>

<!-- <div align="center">
<img src="https://user-images.githubusercontent.com/84028669/173394174-d355f65b-04e8-4e1b-93ad-2069dfe36abb.jpeg"width="800px" />
</div>
</br>
<div align="center">
<img src="https://user-images.githubusercontent.com/84028669/173394370-cd585cb4-5443-4b44-9d10-33ea8b705028.jpeg"width="800px" />
</div> -->


**6° Frame:** Nesse frame é onde o usuário tem uma visão geral sobre as alocações em cada sede, podendo exportar um documento (.cvs ou .pdf) ao final de suas ações no sitema.

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/174424704-b0edc611-7660-43e9-a4f4-40b10d1d791b.gif"width="800px" />
</div>
<br/>

---

## Seção 6.

### Pesquisa UX:

<a href="https://docs.google.com/forms/d/e/1FAIpQLSeNK915CZaDpIhgumv9YWdxGEW-oY90FjKTZW1briknAPw7pA/viewform"> **Formulário da Pesquisa** </a> <br/><br/>
<a href="https://docs.google.com/forms/d/1uoUeZNKSXIeKx9c8seaA5VYIKzpwjhWXilgovIvwZgo/viewanalytics"> **Resultados da Pesquisa** </a> <br/><br/>
<a href="https://www.figma.com/file/8nohgZFsrHimifrt5FvQzy/Projeto-EMSERF?node-id=0%3A1"> **Protótipo Melhorado** </a> <br/><br/>
<a href="https://www.figma.com/proto/8nohgZFsrHimifrt5FvQzy/Projeto-EMSERF?node-id=5%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=5%3A2"> **Demo** </a> <br/><br/>
Principais oportunidades de melhoria:

Cruzando as estatísticas fornecidas pela pesquisa supracitada com os requisitos e demandas do sistema em questão determinou-se que as principais orpotunidades de melhoria do sistema se referem aos aspectos da plataforma que permitem ao usuário compreender o que ele está fazendo, bem como a finalidade de cada uma das funções a sua disposição, evitando assim que o mesmo se sinta perdido diante das diferentes telas e opções disponibilizadas.

<!-- A primeira oportunidade para melhoria envolve adotar uma das sugestões realizadas por um dos participantes da pesquisa: a utilização de _tooltips_ nos botões e links do sistema, detalhando a finalidade de cada um deles antes que sejam clicados, bastando que se mantenha o cursor do mouse sobre os mesmos. Com base nessa idéia também cogitou-se um botão com ícone de ponto de interrogação <?> no canto superior direito de algumas telas. Ao serem clicados tais botões podem abrir um pop-up ou tooltip contendo detalhes mais extensos da função ou finalidade de uma dada seção da plataforma. -->

Por fim, pode-se ponderar a adição de uma tela que apresente um _mapa do sistema_ e/ou mesmo um manual do sistema, instruindo o usuário com dificuldades para que o mesmo não se sinta perdido entre as diferentes telas e funções do sistema. Porém cabe ressaltar aqui que o escopo da plataforma é ser utilizada na empresa que demandou o desenvolvimento do mesmo, visando automatizar algumas tarefas necessárias no trabalho cotidiano de um setor específico da organização. Com efeito é de se esperar que a implementação do sistema na empresa venha acompanhado de um treinamento da equipe, inicialmente instruídos por algum membro da equipe de desenvolvedores. Futuramente a mesma capacitação pode ser realizada pelos funcionários veteranos aos funcionários mais novos.

---

## Seção 7.
### Aplicação Real:

**Login**:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/176888676-1b91e9f3-fe44-4ba7-b108-d759db5bba25.gif" width="900px" />
</div><br/><br/>

**Dashboard responsivo**:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/176888728-e17009a5-8ab8-4798-9428-3d4f57f9e2ea.gif" width="900px" />
</div><br/><br/>

**Detalhes da Unidade**:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/176888787-7b663239-8f88-4cbc-a66a-2afde277186b.gif" width="900px" />
</div><br/><br/>

**Exportação de Relatórios**:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/176888841-e10a5aee-e51d-4fc8-a578-d4b73762fa4a.gif" width="900px" />
</div><br/><br/>

**Logout**:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/176888907-d79d7aff-652d-4c32-878b-e37349ae5441.gif" width="900px" />
</div>

---
