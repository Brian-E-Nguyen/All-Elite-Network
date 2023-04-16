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

describe('Signup form errors', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Throws an error for duplicate email', () => {
    cy.get('input[name="email"]').type('foo@bar.baz');
    cy.get('input[name="password"]').type('fakePassword');
    cy.get('input[name="retypedPassword"]').type('fakePassword');
    cy.get('input[name="plan"][value="all-elite"]').click();
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('not.exist');
    cy.get('[data-cy="form-error"]').contains(/email already exists/i);
  });

  it('Throws an error for invalid password', () => {
    cy.get('input[name="email"]').type('foo@bar.baz');
    cy.get('input[name="password"]').type('1');
    cy.get('input[name="retypedPassword"]').type('1');
    cy.get('input[name="plan"][value="all-elite"]').click();
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('not.exist');
    cy.get('[data-cy="form-error"]').contains(
      /password must be at least 6 characters/i
    );
  });

  it("Throws an error when passwords don't match", () => {
    cy.get('input[name="email"]').type('foo@bar.baz');
    cy.get('input[name="password"]').type('11111111111');
    cy.get('input[name="retypedPassword"]').type('22222222222222');
    cy.get('input[name="plan"][value="all-elite"]').click();
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="loading-animation"]').should('not.exist');
    cy.get('[data-cy="form-error"]').contains(/passwords do not match/i);
  });
});
