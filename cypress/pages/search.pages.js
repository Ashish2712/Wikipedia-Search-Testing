/// <reference types="cypress" />

// ii - when user start typing it should suggest words that matches typed keyword
// ii - predefined matching criteria after typing 3 words it should suggest  matching keyword
// iii - result should be maintained when user clicks on any search result
// iv - verify the result language should change on changing the language
// For Advanced Search - limited search filters should be provided
// Water text should be provided for user to understand what to search
// Validate search rules defined for “Exact Match” with the search key word
// Validate search rules defined for “Similar Match” with the search key word
// Validate search rules defined to search with a set of keywords
// User should be able to search when he enters the keyword and hits ‘Enter’ button on keyboard
// Negative case:
// 1. empty Search yields no result
// 2. Click enter without typing any word
// 3. Selecting language yields wrong result
// ii - % in the search keyword should not redirect to 404 error
// iii - application should not crash if user inserted % in search field

import SearchPageLocator from '../locators/searchpage.locators';

var SearchPage = {

    enter_keyword: function(word) {
        cy.get(SearchPageLocator.search_input())
        .type(word)
    },

    select_language: function(lang) {
        cy.get('select').select(lang).should('have.value', lang)
    },

    select_n_search_result: function(n){
        cy.get(SearchPageLocator.search_result_selector(n)).click()
    },
    click_search_bar: function(){
        cy.get(SearchPageLocator.click_search_button()).click()
    },

    click_empty_search_yields_no_result: function(){
        cy.get(SearchPageLocator.suggested_options()).should('not.exist');
    },

    relevant_result_validation : function(word){
        // verify the result are matching to 
        cy.get(SearchPageLocator.suggested_options())
    },
};

export default SearchPage;