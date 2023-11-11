const wrongEmail = "wrong-email@wrong.no";
const wrongEmailNoroff = "wrong-email@noroff.no"
const wrongPassword = "wrong-password";
const correctUrl = "http://127.0.0.1:5500/?view=profile&name=atle";

it('wrong email/not a noroff email', () => {
  cy.visit('http://127.0.0.1:5500/');
  cy.wait(1000);
  cy.get("#registerModal").should("be.visible").contains("Login").click();
  cy.wait(500);
  cy.get('#loginModal').should('be.visible');
  cy.get('#loginEmail').type(wrongEmail);
  cy.wait(500);
  cy.get('#loginPassword').type(wrongPassword);
  cy.wait(500);
  cy.get('#loginForm > .modal-footer > .btn-success').click();
  cy.wait(500);
  cy.get("#loginEmail")
  .invoke("attr", "title")
  .should("equal", "Only Noroff student or teacher emails are valid.")
})

it('invalid email/password', () => {
  cy.visit('http://127.0.0.1:5500/');
  cy.wait(1000);
  cy.get("#registerModal").should("be.visible").contains("Login").click();
  cy.wait(500);
  cy.get('#loginModal').should('be.visible');
  cy.get('#loginEmail').type(wrongEmailNoroff);
  cy.wait(500);
  cy.get('#loginPassword').type(wrongPassword);
  cy.wait(500);
  cy.get('#loginForm > .modal-footer > .btn-success').click();
  cy.wait(500);
  cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Either your username was not found or your password is incorrect');
    })
})
