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
VERSÃO 1.0.0 • JUNHO 2022
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
| Versão v1.0.0 | São Luís - MA | 07 de Julho de 2022 |	

</br></br>

## Público Alvo:

Este manual destina-se aos gestores e pontos focais da equipe técnica de Manutenção Ferroviária do cliente EMSERF, dando-lhes o conhecimento necessário para operar em uma interface Web capaz de definir, em tempo real, quais profissionais devem receber alertas de manutenção em sua região de atuação.
</br></br></br></br>

---

<h3 align="center">
  SUMÁRIO </br></br>
 </h3>
 
**INTRODUÇÃO**
- Demanda do Cliente EMSERF
- Identificação dos requisitos
- Prioridades dos requisitos

**CAPÍTULO I - DESCRIÇÃO GERAL DO SISTEMA**
- Abrangência e sistemas relacionados
- Descrição dos usuários
- Nome do tipo específico de usuário
- Nome do tipo específico de usuário

**CAPÍTULO II - REQUISITOS FUNCIONAIS (CASOS DE USO)**
- Nome de subseção para agrupar casos de uso correlacionados
- Nome do caso de uso
- Fluxo de eventos principal
- Fluxos secundários (alternativos e de exceção)
- [RF…] Nome do outro caso de uso
- Nome da outra subseção para agrupar outros casos de uso correlacionados

**CAPÍTULO III - REQUISITOS NÃO FUNCIONAIS**
- Usabilidade
- Confiabilidade
- Desempenho
- Segurança
- Distribuição
- Padrões
- Hardware e Software
		
**CAPÍTULO IV - DESCRIÇÃO DA INTERFACE COM O USUÁRIO**
- Identificador de uma interface
- Críticas da Interface
- Indetificador de outra interface
- Críticas da Interface
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
 
 ---
 
 <h3 align="center">
CAPÍTULO II - REQUISITOS FUNCIONAIS (CASOS DE USO)</br>
 </h3>
 
 ---
 
 <h3 align="center">
CAPÍTULO III - REQUISITOS NÃO FUNCIONAIS </br>
 </h3>
 
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
<img src="https://user-images.githubusercontent.com/40738499/176888676-1b91e9f3-fe44-4ba7-b108-d759db5bba25.gif" width="700px" />
</div><br/><br/>

**Dashboard responsivo**:

<img src="https://user-images.githubusercontent.com/40738499/176888728-e17009a5-8ab8-4798-9428-3d4f57f9e2ea.gif" width="700px" />
</div><br/><br/>

**Detalhes da Unidade**:

<img src="https://user-images.githubusercontent.com/40738499/176888787-7b663239-8f88-4cbc-a66a-2afde277186b.gif" width="700px" />
</div><br/><br/>

**Exportação de Relatórios**:

<img src="https://user-images.githubusercontent.com/40738499/176888841-e10a5aee-e51d-4fc8-a578-d4b73762fa4a.gif" width="700px" />
</div><br/><br/>

**Logout**:

<img src="https://user-images.githubusercontent.com/40738499/176888907-d79d7aff-652d-4c32-878b-e37349ae5441.gif" width="700px" />
</div>

---
