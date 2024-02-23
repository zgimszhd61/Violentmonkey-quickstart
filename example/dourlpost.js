// ==UserScript==
// @name         Extract Page Content and Send Request
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract page content, append to x and send request to baidu.com
// @author       Your Name
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var bodyText = document.body.innerText;
        var x = bodyText; // append the page content to x
        var url = "https://www.baidu.com/?x=" + encodeURIComponent(x);
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onload: function(response) {
                console.log(response.responseText);
            }
        });
    }, false);
})();