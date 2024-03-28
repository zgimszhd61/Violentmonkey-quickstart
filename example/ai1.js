// ==UserScript==
// @name         Get Xpath Content and Send to URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get content from specified xpath and send it as a parameter to a URL
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取指定xpath的元素内容
    function getXpathContent(xpath) {
        let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (matchingElement) {
            return matchingElement.textContent.trim();
        } else {
            return null;
        }
    }

    // 发送GET请求
    function sendGetRequest(url, param) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url + '?param=' + encodeURIComponent(param), true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('Response:', xhr.responseText);
            }
        };
        xhr.send();
    }

    // 获取xpath内容并发送到URL
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
