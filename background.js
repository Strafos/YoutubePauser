'use strict';

chrome.runtime.onInstalled.addListener(
  function() {
    setInterval(() => {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {time: "1", url: tab.url}, function(response) {
            console.log("Foo");
          });
        });
      });
    }, 1000);
  });