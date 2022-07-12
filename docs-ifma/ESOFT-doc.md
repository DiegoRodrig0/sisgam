<h5 align="center">
</br>
<img src="https://user-images.githubusercontent.com/40738499/168456236-ce8aac11-ddb7-4dbb-a540-00c39e10927b.png" width="250px" />
</br></br></br></br>


DEPARTAMENTO DE COMPUTAÇÃO</br>
SISTEMAS DE INFORMAÇÃO</br>
</br>

<!-- [![interação_homem_máquina](https://img.shields.io/badge/Interação_Homem_Máquina-Profa%20Eveline%20Sá-blue.svg)](url)</br> -->
[![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](https://br.linkedin.com/in/danieljr)</br>
</br>

<h4 align="center">
  DOCUMENTO DE REQUISITOS </br>
  SISGAM • SISTEMA DE GERENCIAMENTO DE ALERTAS DE MANUTENÇÃO </br>
 </h4>
</br></br></br></br>

<h5 align="center">
VERSÃO 1.0.0 • JULHO 2022
 <br/><br/>
SÃO LUÍS, MARANHÃO </br>
</br></br></br></br>
</h5>

</br></br></br></br>

---

<h3 align="center">
  FICHA TÉCNICA </br>
 </h3>

##  Equipe Responsável pela Elaboração:

JAILSON SOARES CANTANHEDE • Database </br>
IULANO SILVA DOS SANTOS • Server-side </br>
ODIVAL QUARESMA NETO • Client-side </br>
</br></br>
	
| Release/Versão | Local | Data |
| ------------ | ----------------- | ------------------------- |
| Release vs_0.1.0 | São Luís - MA | 16 de Maio de 2022 |
| Release vs_0.2.0 | São Luís - MA | 28 de Junho de 2022 |
| Versão v1.0.0 | São Luís - MA | 12 de Julho de 2022 |	

</br></br>

## Público Alvo:

Este manual destina-se aos gestores e pontos focais da equipe técnica de Manutenção Ferroviária do cliente EMSERF *Empresa Maranhense de Serviços Ferroviários*, dando-lhes o conhecimento necessário para operar em uma interface Web capaz de definir, em tempo real, quais profissionais devem receber alertas de manutenção em sua região de atuação.
</br></br></br></br>

---

<h3 align="center">
  SUMÁRIO </br></br>
 </h3>
 
**INTRODUÇÃO**

**CAPÍTULO I - DESCRIÇÃO GERAL DO SISTEMA**

**CAPÍTULO II - REQUISITOS FUNCIONAIS**

**CAPÍTULO III - REQUISITOS NÃO FUNCIONAIS**

**CAPÍTULO IV - DESCRIÇÃO DA INTERFACE COM O USUÁRIO**
</br></br></br></br>

---

<h3 align="center">
  INTRODUÇÃO </br>
 </h3>
 
## Demanda: 
 
Empresas de grande porte que trabalham com manutenção, logística, gerenciamento de estoque, etc, geralmente possuem sistemas de informação que geram alertas para suas equipes, seja para manutenção de equipamentos, seja para informar atualização de estoque, manutenções urgentes e etc.

Nesse contexto, temos o cenário da **EMSERF** *Empresa Maranhense de Serviços Ferroviários*, que já possui um **Sistema Core** que gerencia toda a organização, e este possui um endpoint para gerar alertas de manutenção e atualização de estoque por e-mail, todavia o banco de dados que informa os técnicos que recebem alerta é atualizado manualmente. Isso se deve ao fato da empresa ter feito apenas a aquisição do ***serviço de envio de alertas sem comprar a interface*** (que na ocasião teria um custo bastante elevado), por conta desse desvio a equipe de operações passou a seguir o seguinte fluxo: 
O setor de manutenção manda um *"Planilhão de Excel"* semanalmente com a relação de técnicos, por conseguinte, também de forma manual, o Administrador de Banco de Dados escreve consultas SQL (INSERT/UPDATE/DELETE) diretamente na base de dados, com os técnicos que, de fato, devem receber os alertas. Isso gera desgaste, sujeição à falha humana e sobretudo impacto direto no SLA das demandas do time de desenvolvimento EMSERF.

Como MVP, temos a proposta do **SISGAM • Sistema de Gerenciamento de Alertas de Manutenção**. Reiteramos que, o SISGAM não substitui o SISCORE, ele é apenas uma **Aplicação Satélite** desenvolvida especialmente para automatizar o processo e reduzir custos de implementação do fabricante do SISCORE, conforme diagrama abaixo:

<div align="center">
<img src="https://user-images.githubusercontent.com/40738499/175784007-abc51aea-0a5f-4a59-ba36-1ca939e0efbc.png" width="800px" />
	<p>Diagrama da Solução</p>
</div>
</br>

---

<h3 align="center">
CAPÍTULO I - DESCRIÇÃO GERAL DO SISTEMA </br>
 </h3>
 
 **Abrangência e Sistemas Relacionados:**

O SISGAM é uma Aplicação do tipo Satélite e compreende o fluxo completo de gerenciamento de usuários que recebem alertas de manutenção do endpoint (já existente) do SISCORE, portanto ele contempla uma operação de monitoramento preventivo e/ou corretivo da área de manutenção.
Sua relevância na operação é muito alta, pois quanto mais agilidade há no processo de priorização de alertas, mais rapidamente problemas serão resolvidos ou previnidos.

A aplicação possui 03 tipos de usuário:

- **Ponto Focal**: Usuário administrativo que seguindo diretrizes da gestão operacional gerencia usuários recebedores de alertas de manutenção em sua região de atuação.

- **Gestor**: Usuário responsável pela operação e pelo mapa de manutenção EMSERF. Possui acesso as mesmas funcionalidades do Ponto Focal, contudo as utiliza conforme conveniência ou até mesmo ausência do Ponto Focal.

- **Administrador**: Usuário desenvolvedor da aplicação, atua em melhorias do software tendo pleno acesso ao código fonte da aplicação.
 
<h5 align="center">
<img src="https://user-images.githubusercontent.com/40738499/178416362-3b72850e-0ef4-454d-a1b0-0e015838084a.jpeg" width="800px" /></br>
<p> Diagrama de Caso de Uso </p>
</h5>

 ---
 
 <h3 align="center">
CAPÍTULO II - REQUISITOS FUNCIONAIS </br>
 </h3>
 
**Edição de Grade de Unidades**

O sistema deve permitir que Ponto Focal e/ou Gestor adicionem, editem ou deletem unidades da empresa em uma grade na tela principal.

**Ator**: Ponto Focal e/ou Gestor.

**Prioridade**:
- [x] Essencial 
- [ ] Importante
- [ ]  Desejável

**Entradas e pré condições:** Conexão com internet e privilégios de administração

**Saídas e pós condições:** Modificação na configuração da grade de unidades

**Fluxo de eventos principal**

1. Ponto Focal e/ou Gestor loga no sistema e vai para página principal;  
2. Ponto Focal e/ou Gestor clica no ícone de edição nos elementos que representam as unidades da empresa (dispostos em forma de grade);  
3. Uma nova tela se abre oferecendo opções para editar detalhes numa unidade específica, há opção para deletar a unidade também.
  

**Gerenciamento de usuários que devem receber alertas**

O sistema deve permitir que Ponto Focal e/ou Gestor habilitados possam vincular ou desvincular gerenciando quem de fato deve receber alertas de manutenção

**Ator**: Ponto Focal e/ou Gestor.

**Prioridade**:
- [ ] Essencial 
- [x] Importante
- [ ]  Desejável

**Entradas e pré condições:** Estar logado no sistema, ter um alerta aberto

**Saídas e pós condições:** Modificação em um alerta específico

**Fluxo de eventos principal**

1. O Ponto Focal e/ou Gestor seleciona uma unidade da empresa na tela principal; 2. Na listagem de técnicos da unidade escolhida ele pode então vincular ou desvincular técnicos na sede de manutenção selecionada e a partir de então o sistema core de alertas passa automaticamente a disparar alertas para o usuário vinculado a determinada sede, pois ele enxerga apenas o banco de dados, cumprindo assim o seu papel de "Aplicação Satélite".

  

**Geração de Tabela HTML dos Técnicos Alocados no Sistema**

O sistema deve gerar tabela excel em arquivo que pode ser impresso ou salvo em disco com extensão .xls, contendo todos os técnicos, separados por unidades da organização, que estão adicionados no sistema e aptos para receber notificações.

**Ator**: Ponto Focal e/ou Gestor.

**Prioridade**:
- [ ] Essencial 
- [x] Importante
- [ ]  Desejável

**Entradas e pré condições:** Acesso ao sistema

**Saídas e pós condições:** Um arquivo com extensão .xls

**Fluxo de eventos principal**

1. O Ponto Focal e/ou Gestor clica no ícone de "Export Excel" no Menu Lateral Retrátil; 2. O sistema executa método de exportação do array resultante das movimentações aplicadas.

 ---
 
 <h3 align="center">
CAPÍTULO III - REQUISITOS NÃO FUNCIONAIS </br>
 </h3>
 
**Usabilidade**: A aplicação presente, possui uma interação homem-máquina muito didática. Com acessos que facilitam a navegação do operador de forma intuitiva e simplificada. O usuário tem o total acesso a documentação da aplicação disponibilizada no GitHub, com demos da navegação através de .GIFs.

**MANUAL DE USO**

Manual de instruções para a utilização do programa no formato de documentação web, disponiblizada através de uma rota na própria aplicação.

**Prioridade**:
- [ ] Essencial 
- [ ] Importante
- [x]  Desejável

**Confiabilidade**: A aplicação trabalha com manutenções preventivas e corretivas, programadas para evitar perda de ativos da companhia e cuidar da vida útil dos equipamentos dos clientes da EMSERF.

**TESTE DE ERROS**

Eventuais testes para prevenção de erros.

**Prioridade**:
- [ ] Essencial 
- [x] Importante
- [ ]  Desejável

**Desempenho**: Trata-se de uma aplicação rápida e leve em que não depende totalmente de outros softwares para a sua execução, exportação de arquivos em menos de 10 segundos e acesso feito de qualquer dispositivo móvel.

**TESTE DE RAPIDEZ**

Teste para ver a rapidez e eficiência da aplicação.

**Prioridade**:
- [ ] Essencial 
- [x] Importante
- [ ]  Desejável

**Segurança**: No modo de segurança para o operador utilizamos da autenticação via LocalStorage, onde o utilizando o recurso do próprio navegador é possível realizar a autenticação e mantê-lo na sessão até que efetue logout.

**TESTE DO CAPTCHA**

Validação se é ou não um robô.

**Prioridade**:
- [x] Essencial 
- [ ] Importante
- [ ]  Desejável

**HARDWARE E SOFTWARE:**

Utilizou-se para o desenvolvimento da aplicação programas como, MySQL Workbench, HeidiSQL, Draw.io, Figma, Stack Javascript, React JS, Node JS, etc. Foram componentes fundamentais para a criação e fundamentação da aplicação.

**PROGRAMAS GRATUITOS**

Utilização de programas gratuitos para diminuição de custos.

**Prioridade**:
- [x] Essencial 
- [ ] Importante
- [ ]  Desejável

 ---
 
 <h3 align="center">
CAPÍTULO IV - DESCRIÇÃO DA INTERFACE COM O USUÁRIO </br>
 </h3>


**Autenticação do Usuário**
O fluxo de Autenticação do SISGAM, à princípio era no formato de assinatura digital com JWT (Json Web Token), todavia conforme realizamos o processo de refinar os requisitos, identificamos que na nossa infraestrutura EMSERF, não precisaríamos deste recurso, uma vez que ao fazer Logon na máquina (S.O), com usuário de rede EMSERF, uma GPO* já roda na sesssão do usuário, dando-lhe privilégios ou não e autenticando sistemas web e desktop. Além do controle de logs para efeito de Auditorias internas.

Por conseguinte, simplificamos o fluxo para a estratégia de autenticação via LocalStorage, onde o utilizando o recurso do próprio navegador é possível realizar a autenticação e mantê-lo na sessão até que efetue logout. Abaixo o componente "Auth.jsx", cuja variável "authenticated" é o termômetro da sessão, dessa forma, componentes que precisam do status da sessão passam a acessá-la em tempo de execução para serem renderizados ou não. Vide abaixo trecho do código de construção do componente "Auth.jsx", responsável pela Autenticação e Gerenciamento de sessão do SISGAM.

---

<h5 align="center">
<img src="https://user-images.githubusercontent.com/40738499/175664238-67f52738-4080-431b-9264-6db78021b15b.gif" width="900px" /></br>
<p> Estratégia LocalStorage </p>
</h5>

--- 

**Importante considerar que os usuários da EMSERF, utilizam a mesma senha pra logar em qualquer sistema web ou desktop**. Uma vez autenticado na rede corporativa, ou seja, ao seja, **Logon no Sistema Operacional, um script é carregado no servidor tratando privilégios e diretrizes de segurança**.
Sendo assim, **não existe necessidade do sistema ter a funcionalidade "esqueceu sua senha?"**. Além disso como todo bom sistema, há o fluxo de captura de logs, gerado automaticamente para fins de auditoria e **Política Antifraude.**

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
