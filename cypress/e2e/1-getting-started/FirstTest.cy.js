describe('My First Test', () => {
    it('Verify The Title Of The Page', () => {
      expect(true).to.equal(true)
      // Valediat The page title
      cy.visit("https://www.moneycorp.com/en-gb/",{failOnStatusCode:false});
      cy.title().should('eq','Moneycorp | Global Payments');
    
      
      //Change the language and region 
      cy.get('[id="language-dropdown-flag"]').click();
      cy.wait(2000);
      
      cy.get('.country-language').eq(8).contains('English');
      cy.get('.country-language').eq(8).click();
      cy.wait(2000);
    
      // Search For international payments
      cy.get('[class="c-hamburger__inner"]').click();
      cy.wait(2000);
      cy.get('#nav_search').eq(0).type("international payments");
      cy.wait(2000);
      
      cy.get('#nav_search').eq(0).type('{enter}')
      cy.wait(2000);
    
      //Validate The Page Title 
      cy.title().should('eq','Search');
      cy.wait(2000);
    
      //Verify The Location Of The Page 
      cy.location().should((location) => {
        expect(location.href).to.contains('https://www.moneycorp.com/en-us/')

      }) 
      
    })

    })
 