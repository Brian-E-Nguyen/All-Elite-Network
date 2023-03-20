describe('Login form data', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Retrieves the login form', () => {
    cy.get('[data-cy="login-form"]').should('exist');
    cy.contains(/login/i);
  });

  // it('Fills the login form with information and submits', () => {
  //   cy.get('input[name="email"]').type('test@email.com');
  //   cy.get('input[name="password"]').type('fakepassword');
  //   cy.get('[data-cy="submit"]').click();
  //   cy.get('[data-cy="loading-animation"]').should('exist');
  // });
});

describe('Login form errors', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-cy="login-form"]').should('exist');
  });

  it('Throws an error when email is invalid', () => {
    cy.get('input[name="email"]').type('test');
    cy.get('input[name="password"]').type('fakepassword');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('not.exist');
  });

  it('Throws an error when password is invalid', () => {
    cy.get('input[name="email"]').type('test@email.com');
    cy.get('input[name="password"]').type('1');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="form-error"]').contains(/least 6 characters/i);
    cy.get('[data-cy="loading-animation"]').should('not.exist');
  });

  it('Throws an error when no information is provided', () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="form-error"]').contains(/fill out all information/i);
    cy.get('[data-cy="loading-animation"]').should('not.exist');
  });
});
