describe('Simple Cypress Test', function() {
    it('Base Functional Tests', function() {
        cy.visit('/polls/');
        cy.get('a').click();
        cy.get('h1').should(($h1) => {
            expect($h1).to.contain('Is Django cool?');
        });
    });
});
