if (window == top) {
  window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.signal == "pause"){
      pauseVideos();
    }
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.url);
    console.log(request.time);
  });