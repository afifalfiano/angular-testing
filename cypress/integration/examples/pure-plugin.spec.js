describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1440, 747)
    
       cy.visit('http://localhost:4200/')
    
       cy.get('.row > .col-md-6 > .ng-untouched > .form-group > #username').click()
    
       cy.get('.row > .col-md-6 > .ng-untouched > .form-group > #username').type('afif')
    
       cy.get('.row > .col-md-6 > .ng-dirty > .form-group > #password').type('12345')
    
       cy.get('.ng-dirty > .form-group > .row > .col-6 > .btn-primary').click()
    
    })
   
   })
   