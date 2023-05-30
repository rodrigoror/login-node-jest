const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('express'); // Replace './app' with the path to your Express.js app

Given('a valid username and password', function () {
  this.credentials = {
    username: 'testuser',
    password: 'testpassword'
  };
});

Given('a valid username and an incorrect password', function () {
  this.credentials = {
    username: 'testuser',
    password: 'wrongpassword'
  };
});

Given('a non-existent username', function () {
  this.credentials = {
    username: 'nonexistentuser',
    password: 'password'
  };
});

When('I make a POST request to the login endpoint', async function () {
  this.response = await request(app)
    .post('/login')
    .send(this.credentials);
});

Then('I should receive a success response with a {int} status code', function (statusCode) {
  expect(this.response.statusCode).toBe(statusCode);
  expect(this.response.body.success).toBe(true);
});

Then('the response body should contain a success flag set to false', function () {
  expect(this.response.body.success).toBe(false);
});

Then('the response body should contain an error message indicating {string}', function (errorMessage) {
  expect(this.response.body.message).toBe(errorMessage);
});
