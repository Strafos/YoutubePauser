'use strict';

class DefaultDict {
  constructor(defaultVal) {
    return new Proxy({}, {
      get: (target, name) => name in target ? target[name] : defaultVal
    })
  }
}

const allTimes = new DefaultDict(0);

function parseHostname(url){
  const parser = document.createElement("a");
  parser.href = url;
  return parser.hostname;
}

chrome.runtime.onInstalled.addListener(
  function() {
    setInterval(() => {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabs.forEach(tab => {
          const hostname = parseHostname(tab.url);
          allTimes[hostname] += 1;
          chrome.tabs.sendMessage(tab.id, {time: allTimes[hostname]}, function(response) {
            var a = 1
          });
        });
      });
    }, 1000);
  });