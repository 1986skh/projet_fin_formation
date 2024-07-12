describe('tester app the lab', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('tester les boutons d\'inscription', () => {
    cy.get('a[href="/signup"]').click()
  })
})
