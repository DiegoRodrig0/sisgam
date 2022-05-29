<h5 align="center">
</br>
<img src="https://user-images.githubusercontent.com/40738499/168456236-ce8aac11-ddb7-4dbb-a540-00c39e10927b.png" width="250px" />
</br></br>

DEPARTAMENTO DE COMPUTAÇÃO</br>
SISTEMAS DE INFORMAÇÃO</br>
</br>

[![interação_homem_máquina](https://img.shields.io/badge/Interação_Homem_Máquina-Profa%20Eveline%20Sá-blue.svg)](url)</br>
[![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](url)</br>
</br>

DIEGO RODRIGO DO CARMO TEIXEIRA</br>
JAILSON SOARES CANTANHEDE</br>
IULANO SILVA DOS SANTOS</br>
ODIVAL QUARESMA NETO</br>
</br></br>

Relatório Técnico do Sistema de Gerenciamento de Alertas de Manutenção</br>
Cliente: Empresa Maranhense de Serviços Ferroviários (EMSERF)</br>
</br>


SÃO LUÍS, MA </br>
2022
</h5>

---

### • Demanda

Empresas de grande porte que trabalham com manutenção, logística, gerenciamento de estoque, etc. geralmente possuem sistemas de informação que geram alertas, seja para manutenção de equipamentos, seja para informar atualização de estoque, manutenções urgentes e etc.

Nesse contexto, temos o cenário da **EMSERF** *Empresa Maranhense de Serviços Ferroviários*, que tem um endpoint para gerar alertas de manutenção e atualização de estoque por e-mail, todavia o banco de dados que informa os técnicos que recebem alerta é atualizado manualmente. 

O setor de manutenção manda um "planilhão de excel" semanalmente com a relação de técnicos. Por conseguinte, também de forma manual, o Administrador de Banco de Dados <a href="https://github.com/scjailson"> *@scjailson* </a> escreve consultas SQL *(INSERT/UPDATE/DELETE)*, no banco de dados com os técnicos que devem receber os alertas. 

Esse processo fatalmente demanda tempo, concentração, sujeição à falha humana e gera impacto direto na fila de demandas do time de Desenvolvedores.

Como MVP, temos uma **Aplicação Web para Gerenciamento do Mapa de Alertas de Manutenção**.

---

| Documentação Geral | Mestre | Foco |Status |
| ----------- | ---------------------- | ------------------------- | --------- |
| <a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/1.%20Project_IHC.md"> Projeto IHM </a> | ![Eveline_Sá](https://img.shields.io/badge/Eveline_Sá-IHM-yellow.svg) | Prototipagem de Software e Modelagem de Usuário | *Andamento* |
| <a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/2.%20Project_ES.md"> Projeto ES </a> | ![Daniel_Lima](https://img.shields.io/badge/Daniel_Lima-ES-yellow.svg)  | Qualidade no Desenvolvimento de Software  |*Andamento*  |


---


### • Tecnologias

- [x] **Draw.io + Figma** para Diagramação da Arquitetura e Prototipagem de Interface da app.

- [x] **ReactJS + NodeJS** para Desenvolvimento da Interface + API com a Stack Javascript.

- [x] **HeidiSQL + MySQL** para Desenvolvimento, Modelagem e Adminstração do Banco de Dados.

- [x] **Trello** para apoio no Controle do Product Backlog + Planejamento e Fluxo de Sprints.

---

### • Equipe

| Documentação |Programador| Disciplina(s)| Status|
| ----------------- | -------- | ----------------- |-------|
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/3.%20Prototyping.md"> Prototyping </a>|<a href="https://github.com/DiegoRodrig0"> [![diego_teixeira](https://img.shields.io/badge/Diego_Teixeira-Prototyping-orange.svg)](https://github.com/DiegoRodrig0) </a> | Interação Homem-Máquina | *Andamento* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/4.%20Front-end.md"> Client-side </a>|<a href="https://github.com/odivalq"> [![odival_quaresma](https://img.shields.io/badge/Odival_Quaresma-Frontend-orange.svg)](https://github.com/odivalq) </a>| Interação Homem-Máquina + Engenharia de Software| *Andamento* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/5.%20Back-end.md"> Server-side </a>|<a href="https://github.com/yullano90"> [![iulano_santos](https://img.shields.io/badge/Iulano_Santos-Backend-orange.svg)](https://github.com/yullano90) </a>| Interação Homem-Máquina + Engenharia de Software | *Andamento* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/6.%20Database.md"> Database </a>|<a href="https://github.com/scjailson"> [![jailson_soares](https://img.shields.io/badge/Jailson_Soares-Database-orange.svg)](https://github.com/scjailson) </a>| Engenharia de Software | *Andamento* |

