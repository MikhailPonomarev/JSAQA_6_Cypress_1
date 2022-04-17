it('Should open main app page', () => {
    cy.contains('Books list').should('be.visible');
    cy.contains('Log in').should('be.visible');
});

it('Should successefully login', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
});

it("Should not login with empty login", () => {
    cy.login('', 'test');
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
it("Should not login with empty password", () => {
    cy.login('test@test.com', '');
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

it('Favourites tab should be empty', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Favorites').click();
    cy.contains('Please add some book to favorit on home page!').should('be.visible');
});

it('Should add new book', () => {
    cy.login('test@test.com', 'test');
    cy.addNewBook('Книга 1', 'Описание книги', 'Автор 1');
    cy.contains('Книга 1').should('be.visible');

    cy.contains('Log out').click();
    cy.contains('Книга 1').should('be.visible');
    
    cy.login('bropet@mail.ru', '123');
    cy.contains('Книга 1').should('be.visible');
});

it('Add book to Favourites', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Книга 1').should('be.visible');
    cy.contains('Add to favorite').click();
    cy.contains('Favorites').click();
    cy.contains('Книга 1').should('be.visible');
});


