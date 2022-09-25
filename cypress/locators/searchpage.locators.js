var SearchPageLocator = {

    search_input: function() {
           return '#search-input>input'
    },

    change_language: function() {
       return '#searchLanguage>option'
    },

    suggested_options: function(){
           return '.suggestions-dropdown>a'
    },

    search_result_selector: function(n){
           return '.suggestions-dropdown>a:nth-child(1)'
    },
    click_search_button: function(){
           return '.pure-button-primary-progressive>i'
    }
};

export default SearchPageLocator;