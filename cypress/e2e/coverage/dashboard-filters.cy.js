describe("Dashboard Page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard")
  })

  it("should display dashboard container", () => {
    cy.get('[data-testid="dashboard-container"]').should("exist")
  })

  it("should show metric cards", () => {
    cy.get('[data-testid="metric-card-users"]').should("exist")
    cy.get('[data-testid="metric-card-revenue"]').should("exist")
    cy.get('[data-testid="metric-card-conversion"]').should("exist")
  })

  it("should show refresh button", () => {
    cy.get('[data-testid="refresh-button"]').should("be.visible")
  })

})