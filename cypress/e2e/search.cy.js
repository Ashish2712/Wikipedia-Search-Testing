
import SearchPage from '../pages/search.pages'

describe('positive search', () => {
  it('open wikipedia search page', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.url().should('include', 'wikipedia')
  })

  it('enter the word to search',() =>{
    SearchPage.enter_keyword('apollo 11')
    SearchPage.select_language('en')
    // cy.get('#searchLanguage>option').select('EN')
    SearchPage.click_search_bar()
  })

  it('verify the title on the navigated page', () =>{
    cy.title().should('include','Apollo 11')
  })

  it('verify the url on the navigated page', () =>{
    cy.title().should('include','Apollo 11')
  })

  it('go back to previous page', () =>{
    cy.go('back')
  })
})