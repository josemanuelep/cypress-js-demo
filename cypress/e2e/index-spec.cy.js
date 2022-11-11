describe('Testing index page', () => {
    it('You should see the type title', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });
});