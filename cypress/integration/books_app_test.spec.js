it('Should open main app page', () => {
    cy.visit('/');
    cy.contains('Books list').should('be.visible');
    cy.contains('Log in').should('be.visible');
});

it('Should successefully login', () => {
    cy.visit('/');
    cy.contains('Log in').click();
    cy.get('#mail').type('test@test.com');
    cy.get('#pass').type('test');
    cy.contains("Submit").click();
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
});

it("Should not login with empty login", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
  it("Should not login with empty password", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });