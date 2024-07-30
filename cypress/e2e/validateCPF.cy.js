// Import Cypress commands and assertions
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps';

// Given step: Set up the initial context
Given('que o usuário está na página de login', () => {
    // Visit a URL to your homepage)
    cy.visit('http://localhost:3000/');
  });
  
  // When step: Navigate to the Google website
  When('o usuário insere um CPF com menos de 11 dígitos', () => {
    // Visit the Google homepage
    cy.get('input[name="username"]').type(31096547848);
    cy.get('input[name="password"]').type(password);
  });

  And('o usuário clica no botão de login', () => {
    cy.get('#login').click();
  });
  // Then step: Verify Google homepage elements
  Then('o sistema deve exibir a mensagem "CPF inválido."', () => {
    // Assert that the search bar and Google logo elements are visible
    cy.get('p[name="error-message"]').should('have.text', "CPF inválido.");
  });
  