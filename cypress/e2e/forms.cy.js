describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe Form", () => {
    cy.contains(/Testing forms/i);
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    // cy.getDataTest("subscribe-form").find("input").type("masamata98@gmail.com");
    cy.get('@subscribe-input').type("masamata98@gmail.com");
    cy.contains(/Successfully subbed: masamata98@gmail.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Successfully subbed: masamata98@gmail.com!/i).should("exist");
    cy.wait(3000)
    cy.contains(/Successfully subbed: masamata98@gmail.com!/i).should("not.exist");
    //test email doesnot exist
    cy.get('@subscribe-input').type("masamata98@gmail.io");
    cy.contains(/Invalid email: masamata98@gmail.io!/i).should("not.exist")
    cy.getDataTest('subscribe-btn').click()
    cy.contains(/Invalid email: masamata98@gmail.io!/i).should("exist")
    cy.wait(3000)
    cy.contains(/fail!/i).should("not.exist")
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/fail!/i).should("exist")
  });
});
 