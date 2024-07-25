Feature: Validação do CPF
  Scenario: CPF com formato inválido
    Given que o usuário está na página de login
    When o usuário insere um CPF com menos de 11 dígitos
    And o usuário clica no botão de login
    Then o sistema deve exibir a mensagem "CPF inválido."