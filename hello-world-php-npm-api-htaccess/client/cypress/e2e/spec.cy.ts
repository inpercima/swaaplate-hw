describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Hello world with php, npm, api folder and htaccess file')
  })
})
