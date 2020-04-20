describe("test add hotel/objects", () => {
  it("Main page (Desktop)", () => {
    cy.visit("/");
    cy.get("[name='type_5']").click();
    cy.get("#create-new-hotel").click();
    cy.get("[cy-select-country]").click();
    cy.get("[cy-select-country]").find("ul li")[2].click(); //абхазия
    cy.wait(2000);
    cy.get("[cy-select-region]").click();
    cy.get("[cy-select-country]").find("ul li")[3].click(); //гагрский район
    cy.get("[cy-select-city]").click();
    cy.get("[cy-select-country]").find("ul li")[4].click(); //гагра
    cy.get("[cy-submit]").click();
  });
});
