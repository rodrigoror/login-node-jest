Feature: User Login
  As a user
  I want to be able to login
  So that I can access my account

  Scenario: Successful login
    Given a valid username and password
    When I make a POST request to the login endpoint
    Then I should receive a success response with a 200 status code
    And the response body should contain a success flag set to true

  Scenario: Incorrect password
    Given a valid username and an incorrect password
    When I make a POST request to the login endpoint
    Then I should receive an error response with a 401 status code
    And the response body should contain a success flag set to false
    And the response body should contain an error message indicating incorrect password

  Scenario: Non-existent user
    Given a non-existent username
    When I make a POST request to the login endpoint
    Then I should receive an error response with a 401 status code
    And the response body should contain a success flag set to false
    And the response body should contain an error message indicating non-existent user
