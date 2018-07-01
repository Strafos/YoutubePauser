'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.signal == "pause_all") {
      chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {signal: "pause"}, function(response) {
            console.log("send pause to other tabs");
          });
        });
      });
      sendResponse({info: "successfully paused"});
    }

    if (request.signal == "play_all"){
      chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {signal: "play"}, function(response) {
            console.log("send play to other tabs");
          });
        });
      });
      sendResponse({info: "successfully played"});
    }
  });