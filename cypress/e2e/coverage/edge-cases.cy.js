describe("Edge Cases", () => {

  it("should disable prev button on first page", () => {
    cy.visit("http://localhost:5173/data")
    cy.get('[data-testid="prev-page-button"]').should("be.disabled")
  })

  it("should handle empty search result", () => {
    cy.visit("http://localhost:5173/data")
    cy.get('[data-testid="search-input"]').type("xyz123")
  })

})