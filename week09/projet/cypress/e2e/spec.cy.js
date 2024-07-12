describe('tester app the lab', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('passe', () => {
  });
  it('tester les boutons d\'inscription ', () => {
    cy.get('a[href="/signup"]').contains("Inscription").click();
    cy.url().should('include', '/signup');
    cy.get('#lastname').type("khelifa").wait(1000);
    cy.get("#firstname").type("smail").wait(1000);
    cy.get("#birthday").type("2000-05-12").wait(1000);
    cy.get("#email").type("khelifa.smail08@gmail.com").wait(1000);
    cy.get("#password").type("smailwild").wait(1000);
    cy.get("#confirmPassword").type("smailwild").wait(1000);
    cy.get('#terms').check().wait(1000);
    cy.get('#terms').should('be.checked').wait(1000);
    cy.get('button').contains("Je M'inscris").click().wait(1500);
    cy.url().should('include', '/login');
  });
  it('tester les boutons de connexion', () => {
    cy.get('a[href="/login"]').contains("Connexion").click();
    cy.url().should('include', '/login');
    cy.get("#email").type("khelifa.smail08@gmail.com").wait(1000);
    cy.get("#password").type("smailwild").wait(1000);
    cy.get('button').contains("Se Connecter").click().wait(1500); 
  });

});


