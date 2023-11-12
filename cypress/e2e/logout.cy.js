const loggedInUrl = "http://127.0.0.1:5500/?view=profile&name=atle";
const loggedOutUrl = "http://127.0.0.1:5500/";

it('log in and then log out', () => {
  cy.visit('http://127.0.0.1:5500/');
  cy.wait(1000);
  cy.get("#registerModal").should("be.visible").contains("Login").click();
  cy.wait(500);
  cy.get('#loginModal').should('be.visible');
  cy.get('#loginEmail').type('atle@noroff.no');
  cy.wait(500);
  cy.get('#loginPassword').type('TrustNo1');
  cy.wait(500);
  cy.get('#loginForm > .modal-footer > .btn-success').click();
  cy.wait(500);
  cy.url().should("eq", loggedInUrl);
  cy.wait(1000);
  cy.get('.col > .form-control').type('Now im logging out');
  cy.wait(500);
  cy.get('[data-auth="logout"]').should('be.visible').click();
  cy.wait(500);
  cy.url().should("eq", loggedOutUrl);
})