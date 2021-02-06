
describe('Frontend  Testing', () => {

    it ('has a title', () => {
        cy.visit('localhost:4200');
        cy.contains('Frontend Testing');
        expect(true).to.be.true;
    })

    it ('fill username and password with correct', () => {
        cy.get('input#username').type('afif');
        cy.get('input#password').type('12345');
        cy.wait(1000);
        cy.contains('LogIn').click();
    })

    it('check validate when username and password is wrong', () => {
        cy.get('input#username').type('alfiano');
        cy.get('input#password').type('123456');
        cy.wait(1000);
        cy.contains('LogIn').click();
    })
})
