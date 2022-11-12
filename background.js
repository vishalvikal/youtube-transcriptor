chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("yes");
  // fetch('http://localhost:105/person/')
  // .then((response) => response.json())
  // .then((data) => console.log(data));
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(urlParameters);
      chrome.tabs.sendMessage(tabId, {
        videoId: urlParameters.get("v"),
      });
    }
  });
  