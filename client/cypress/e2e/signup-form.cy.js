describe('Submit form data', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Retrieves the sign up form', () => {
    cy.get('[data-cy="signup-form"]').should('exist');
  });

  it('Fills the signup form with information and submits', () => {
    cy.get('input[name="email"]').type('test@email.com');
    cy.get('input[name="password"]').type('fakePassword');
    cy.get('input[name="retypedPassword"]').type('fakePassword');
    cy.get('input[name="plan"][value="all-elite"]').click();
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('exist');

    cy.url().should('include', '/login');

    cy.task('deleteUser', {
      query: {
        email: 'test@email.com',
      },
      operation: 'deleteOne',
      collection: 'users',
    });
  });
});
