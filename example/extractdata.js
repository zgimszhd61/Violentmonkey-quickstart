// ==UserScript==
// @name         Extract Page Content
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract and log page content
// @author       Your Name
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var bodyText = document.body.innerText;
        console.log(bodyText);
    }, false);
})();