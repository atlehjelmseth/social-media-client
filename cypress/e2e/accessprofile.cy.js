const correctUrl = "http://127.0.0.1:5500/?view=profile&name=atle";

it('access profile test', () => {
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
  cy.url().should("eq", correctUrl);
})
