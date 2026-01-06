// ==UserScript==
// @name         Exclude Saved Google Scholar Results
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Hides search results that are already saved in "My Library" using data-lid and data-rp attributes.
// @author       Sam Shields, Gemini used during development
// @match        *://scholar.google.com/scholar*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Filters out search results that are already in the user's library.
     * Saved items are identified by having a non-empty 'data-lid' attribute
     * and a 'data-rp' attribute value of '1'.
     */
    function hideSavedResults() {
        const results = document.querySelectorAll('.gs_r.gs_or.gs_scl');

        results.forEach(result => {
            const libraryId = result.getAttribute('data-lid');
            const savedFlag = result.getAttribute('data-rp');

            // Check if the library ID exists and is not an empty string,
            // or if the data-rp attribute indicates a saved state.
            const isAlreadySaved = (libraryId && libraryId.length > 0) || savedFlag === '1';

            if (isAlreadySaved) {
                result.style.display = 'none';
            }
        });

        console.log("Attempted to hide results.");
    }

    // Execute the filter on initial page load.
    hideSavedResults();

    // Monitor the results container for changes to handle pagination and dynamic loading.
    const targetNode = document.getElementById('gs_res_ccl_mid');
    if (targetNode) {
        const observer = new MutationObserver(() => {
            hideSavedResults();
        });

        observer.observe(targetNode, { childList: true });
    }
})();
