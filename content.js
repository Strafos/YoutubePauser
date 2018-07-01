function pauseVideos() {
  // var vids = document.getElementsByClassName("video-stream html5-main-video vsc-initialized");
  var vids = [];
  vids = Array.prototype.concat.apply(vids, document.getElementsByClassName("video-stream html5-main-video vsc-initialized"))
  var frames = document.getElementsByTagName("iframe")
  for (var i = 0; i < frames.length; i++) {
    vids = Array.prototype.concat.apply(vids, frames[i].getElementsByClassName("video-stream html5-main-video vsc-initialized"))
  }
  console.log(vids);
  for (var i = 0; i < vids.length; i++) {
    vids[i].pause();
  }
}

function playVideos() {
  var vids = document.getElementsByClassName("video-stream html5-main-video vsc-initialized");
  console.log(vids);
  for (var i = 0; i < vids.length; i++) {
    vids[i].play();
  }
}

if (window == top) {
  window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

function doKeyPress(e){
  var pause_key = 67; // c key
  var play_key = 86; // v key
  if (e.shiftKey && e.keyCode == pause_key) {
    chrome.runtime.sendMessage({signal: "pause_all"}, function(response) {
      console.log(response.info);
    });
  } 
  if (e.shiftKey && e.keyCode == play_key) {
    chrome.runtime.sendMessage({signal: "play_all"}, function(response) {
      console.log(response.info);
    });
	}
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.signal == "pause"){
      pauseVideos();
    }
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.signal == "play"){
      playVideos();
    }
  });