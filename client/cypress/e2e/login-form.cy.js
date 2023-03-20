describe('Login form data', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Retrieves the login form', () => {
    cy.get('[data-cy="login-form"]').should('exist');
    cy.contains(/login/i);
  });

  it('Fills the login form with information and submits', () => {
    cy.get('input[name="email"]').type('test@email.com');
    cy.get('input[name="password"]').type('fakepassword');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('exist');
  });
});
