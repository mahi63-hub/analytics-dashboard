describe("User Interactions", () => {

  it("should click refresh button", () => {
    cy.visit("http://localhost:5173/dashboard")
    cy.get('[data-testid="refresh-button"]').click()
  })

  it("should click export button", () => {
    cy.visit("http://localhost:5173/dashboard")
    cy.get('[data-testid="export-button"]').click()
  })

})