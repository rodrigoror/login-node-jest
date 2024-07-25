const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

let cpf;
let response;
const address = "http://localhost:3000";

Given('que o usuário está na página de login', function () {
    // Contexto não é necessário neste exemplo
  });
  
When('o usuário insere um CPF com menos de 11 dígitos', function () {
    cpf="123456789";
});

When('o usuário clica no botão de login', async function () {
    response = await request(address)
      .post('/login')
      .send({ "username":cpf, "password" :"adsgt34" });
  });

  Then('o sistema deve exibir a mensagem "CPF inválido."', function () {
    assert.strictEqual(response.status, 400);
  });