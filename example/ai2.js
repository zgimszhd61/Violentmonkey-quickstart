// ==UserScript==
// @name         Print Current URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Print the current URL to console
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Current URL:', window.location.href);
})();


