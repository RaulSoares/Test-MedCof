# Test-MedCof

# Projeto Cypress_MedCof

Este é um projeto utilizando o framework de teste end-to-end Cypress para testes no Site da Medcof.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js: https://nodejs.org/
- Cypress: https://www.cypress.io/
- Java 8: https://www.oracle.com/java/technologies/downloads/#java8
**obs**: É necessário ter o java 8 instalado para ser possível utilizar o plugin de reports da Allure.

## Instalação

1. Clone este repositório para sua máquina local;
2. Navegue até o diretório do projeto;
3. Dentro do diretório do projeto MedCof, inicialize um projeto node com o seguinte comando: **yarn install**; tag <br />
**obs1:** Caso yarn não funcione, execute: **npm install** tag <br />

4. Dentro do diretório do projeto MedCof, inicialize o cypress com o seguinte comando: **yarn add cypress@12.2.0 -D**

## Instalação e Configuração Allure Reports

 Já com o Java 8 instalado, crie uma variavél de ambiente para perfeito funcionamento do Allure reports com os seguintes passos:
 1. Clicar com o botão direito em "Este Computador" e clicar em propriedades;
 2. CLicar em configurações avançadas do sistema;
 3. CLicar em variáveis de ambiente;
 4. Clicar em novo para variáveis do sistema;
 5. Definir um nome da variável, como: JAVA_HOME;
 6. Clicar em Procurar no Diretório:tag <br />
    a. Expandir Este Computador;tag <br />
    b. Expandir Arquivos de Programas;tag <br />
    c. Expandir Java;tag <br />
    d. Selecionar a pasta jdk-1.8
7. Clicar em ok para fechar todas as janelas.
 
## Executando os testes

Para executar os testes, utilize o seguinte comando:

1. Se quiser executar os testes na interface gráfica do Cypress, execute o seguinte comando: yarn cypress open
2. Se quiser executar os testes em modo headless, execute o seguinte comando: yarn cypress run

## Executando os testes para gerar relatório no Allure Reports

Será necessário executar algumas linhas de comando para acessar o relatório no allure reports. No caso abaixo, vamos subir um servidor local para acessar o mesmo:
## Acessando o Relatório no Allure Reports

Para acessar o relatório gerado pelo Allure Reports, siga estas etapas:

1. Certifique-se de que você tenha executado os testes com a flag `allure=true` para gerar os resultados necessários. Você pode fazer isso executando o seguinte comando:

   ```bash
   yarn cypress run --env allure=true
2. Após a execução dos testes, gere o relatório Allure executando o seguinte comando:

   ```bash
    yarn allure generate ./allure-results/ -o ./report-server

3. Inicie um servidor local para visualizar o relatório. Para fazer isso, primeiro, instale o servidor HTTP usando o seguinte comando:

  ```bash
  yarn add http-server -D

Em seguida, execute o seguinte comando para iniciar o servidor:

  ```bash
  yarn http-server report-server/



Certifique-se de substituir `tag` pela porta que foi indicada no terminal após iniciar o servidor HTTP. Geralmente, a porta padrão é `8080`, mas pode variar dependendo da configuração do seu ambiente.

No terminal, será indicada a porta em que o relatório subiu. tag <br />
Exemplo: http://localhost:8080/







