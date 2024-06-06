# AvOficial2-QA
# Cypress Project

Este projeto utiliza o Cypress para testes automatizados. Abaixo estão as instruções para configurar, instalar e executar o Cypress no seu ambiente local.

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm (ou Yarn) instalados na sua máquina. Você pode baixá-los a partir dos seguintes links:

- [Node.js](https://nodejs.org/) -V21.7.2
- [npm](https://www.npmjs.com/) -10.5.0

## Instalação

1. Clone o repositório do projeto:
    ```
    git clone https://github.com/AlisonMuniz/AvOficial2-QA.git
    ```
3. Navegue até o diretório do projeto:
   ```
    cd AvOficial2-QA
    ```
4. Instale as dependências do projeto:
    ```
      npm install
    ```
5. Instale o Cypress caso não o tenha ( utilizei a versão 13.11.0 ):
     ```
      npm install cypress --save-dev
     ```
7. Executando o Cypress

    Para abrir a interface do Cypress, execute o seguinte comando:
      ```
      npx cypress open
      ```
    Isso abrirá a interface gráfica do Cypress onde você poderá selecionar e executar os testes.

9. Executando testes no modo headless
    Para executar os testes no modo headless (sem interface gráfica), você pode usar o seguinte comando:
     ```
      npx cypress run
     ```
10. OBSERVAÇÃO...
    Lembre se de levantar a API antes de rodar os testes.
    
    Execute com o: Intellij Idea Community
    
    URL da API: https://github.com/PHPauloReis/oficial2-matriculas-api/

    
    ## Mais informações
    Para mais informações sobre como utilizar o Cypress, consulte a <a href="https://docs.cypress.io/guides/overview/why-cypress/">documentação oficial.</a>
