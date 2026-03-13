describe("Data Table Operations", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/data")
  })

  it("should display data table", () => {
    cy.get('[data-testid="data-table"]').should("exist")
  })

  it("should search users", () => {
    cy.get('[data-testid="search-input"]').type("User 1")
    cy.get('[data-testid="table-row-0"]').should("exist")
  })

  it("should navigate to next page", () => {
    cy.get('[data-testid="next-page-button"]').click()
    cy.get('[data-testid="page-number"]').should("contain", "2")
  })

  it("should navigate to previous page", () => {
    cy.get('[data-testid="next-page-button"]').click()
    cy.get('[data-testid="prev-page-button"]').click()
  })

})