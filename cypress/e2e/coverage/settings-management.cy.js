describe("Settings Page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/settings")
  })

  it("should display settings form", () => {
    cy.get('[data-testid="settings-form"]').should("exist")
  })

  it("should change currency", () => {
    cy.get('[data-testid="currency-select"]').select("INR")
  })

  it("should toggle notifications", () => {
    cy.get('[data-testid="notifications-toggle"]').click()
  })

  it("should toggle theme", () => {
    cy.get('[data-testid="theme-toggle"]').click()
  })

  it("should reset settings", () => {
    cy.get('[data-testid="reset-settings-button"]').click()
  })

})