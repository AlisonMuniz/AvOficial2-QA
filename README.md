# AvOficial2-QA
# Cypress Project

Este projeto utiliza o Cypress para testes automatizados. Abaixo estão as instruções para configurar, instalar e executar o Cypress no seu ambiente local.

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm (ou Yarn) instalados na sua máquina. Você pode baixá-los a partir dos seguintes links:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) Ou [Yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório do projeto:
    ```
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
   
3. Navegue até o diretório do projeto:
   ```
    cd seu-repositorio
    ```
4. Instale as dependências do projeto:

    Se você estiver usando npm:
    ```
      npm install
    ```
    Ou se você estiver usando Yarn:
    ```
      yarn install
    ```
5. Instale o Cypress:

    Se você estiver usando npm:
     ```
      npm install cypress --save-dev
     ```
    Ou se você estiver usando Yarn:
     ```
      yarn add cypress --dev
     ```
7. Executando o Cypress

    Para abrir a interface do Cypress, execute o seguinte comando:

    Se você estiver usando npm:
      ```
      npx cypress open
      ```
    Ou se você estiver usando Yarn:
      ```
      yarn run cypress open
      ```
    Isso abrirá a interface gráfica do Cypress onde você poderá selecionar e executar os testes.

9. Executando testes no modo headless
    Para executar os testes no modo headless (sem interface gráfica), você pode usar o seguinte comando:

    Se você estiver usando npm:
     ```
      npx cypress run
     ```
    Ou se você estiver usando Yarn:
     ```
      yarn run cypress run
     ```
    ## Mais informações
    Para mais informações sobre como utilizar o Cypress, consulte a <a href="https://docs.cypress.io/guides/overview/why-cypress/">documentação oficial.</a>
