## Requirements
npm install express body-parser
npm install --save-dev jest @cucumber/cucumber cucumber-jest supertest

## How to run
in the terminal:
```
npm start
npm run cucumber
```

## RF-01: Validação do CPF
Descrição: O sistema deve validar o formato do CPF inserido pelo usuário no campo de login.

### Critério de Aceitação:

O sistema deve verificar se o CPF contém 11 dígitos numéricos.

O sistema deve verificar a validade do CPF utilizando o algoritmo de validação de CPF.

Se o CPF for inválido, o sistema deve exibir uma mensagem de erro específica.

https://fullturists.atlassian.net/browse/KAN-7 


### Cenário 1: CPF com Formato Inválido

#### Feature: Validação do CPF

  Scenario: CPF com formato inválido
    Given que o usuário está na página de login
    When o usuário insere um CPF com menos de 11 dígitos
    And o usuário clica no botão de login
    Then o sistema deve exibir a mensagem "CPF inválido."

  Scenario: CPF com caracteres não numéricos
    Given que o usuário está na página de login
    When o usuário insere um CPF contendo letras ou caracteres especiais
    And o usuário clica no botão de login
    Then o sistema deve exibir a mensagem "CPF inválido. O CPF deve conter apenas números."

### Cenário 2: CPF com Formato Válido, mas Inválido Algoritmicamente

#### Feature: Validação do CPF

  Scenario: CPF com formato válido, mas inválido algoritmicamente
    Given que o usuário está na página de login
    When o usuário insere um CPF com 11 dígitos numéricos que não passa na validação do algoritmo
    And o usuário clica no botão de login
    Then o sistema deve exibir a mensagem "CPF inválido. Por favor, verifique os dígitos inseridos."

### Cenário 3: CPF Válido

#### Feature: Validação do CPF

  Scenario: CPF válido
    Given que o usuário está na página de login
    When o usuário insere um CPF com 11 dígitos numéricos que passa na validação do algoritmo
    And o usuário clica no botão de login
    Then o sistema deve aceitar o CPF e prosseguir com a autenticação da senha
