
import SearchPage from '../pages/search.pages'

describe('Negative search pattern', () => {
  it('open wikipedia search page', () => {
    cy.visit('https://www.wikipedia.org/')
  })

  it('verify empty search yields no result', () =>{
    SearchPage.click_search_bar()
  })

  it('verify no search suggestion for empty search', () =>{
    SearchPage.click_empty_search_yields_no_result()
  })

})