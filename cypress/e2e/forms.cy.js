describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe Form", () => {
    cy.contains(/Testing forms/i);
    cy.getDataTest("subscribe-form").find("input").type("masamata98@gmail.com");
    cy.getDataTest("subscribe-btn").click();
  });
});
