describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
      crypto.visit("https://www.moneycorp.com/en-gb/");
      crypto.title().should('eq','Moneycorp | Global Payments');

    })
  })