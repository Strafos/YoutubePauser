
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    text = document.getElementById("timer")
    if (text) {
      console.log("found");
      text.textContent = request.time;
    } else {
      console.log("not found");
      var text = document.createElement("p");
      text.setAttribute("id", "timer");
      document.body.append(text);
      text.textContent = request.time;
    }
  });