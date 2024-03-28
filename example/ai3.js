// ==UserScript==
// @name         Print Visible Text
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Print all visible text on the current page to console
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // XPath to match elements
    const xpath = '//*[@id="TopstoryContent"]/div/div[2]/div[1]/section/div[2]/a/h2';

    // Get matching elements
    const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    let element = elements.iterateNext();

    // Loop through matching elements and print text content
    while (element) {
        console.log(element.textContent);
        element = elements.iterateNext();
    }
})();


