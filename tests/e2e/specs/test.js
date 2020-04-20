// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Main page (Desktop)", () => {
    cy.visit("/");
    // cy.server()
    // cy.route('GET', '**/search/**', {}).as('getTermSuggestions')
    cy.get(".choice-city-header input").focus().type("Ульяновс");
    // /api/rest/search/getTermSuggestions
    // cy.wait('@getTermSuggestions')
    cy.wait(2000);
    cy.get(".choice-city-elem").first().click();
    cy.get(".btn-search-main").click();
  });
  it("Main page (Mobile)", () => {
    cy.viewport("iphone-6");
    cy.visit("/");
    cy.get(".main-block-field--city").click();
    cy.get(".choice-city-header input").focus().type("Ульяновс");
    cy.wait(2000);
    cy.get(".choice-city-elem").first().click();
    cy.get(".btn-search-main").click();
  });
});
