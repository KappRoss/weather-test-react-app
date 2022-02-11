describe("App e2e", () => {
  it("should have a search form", function () {
    cy.visit("/");

    cy.get("input").should("have.value", "");
  });

  it("should have a search value", function () {
    cy.get('input[type="text"]').type("Kiev").should("have.value", "Kiev");
  });

  it("should load weather", function () {
    function waitTwoSecond() {
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 2000);
      });
    }

    cy.wrap(null).then(() => {
      return waitTwoSecond().then(() => {
        cy.get("#search-city").type("{downArrow}{enter}");
      });
    });

    cy.wrap(null).then(() => {
      return waitTwoSecond().then(() => {
        cy.get("#weekly-weather").children("div");
      });
    });
  });
});
