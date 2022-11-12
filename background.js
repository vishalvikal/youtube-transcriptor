chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("yes");
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      console.log(queryParameters);
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(urlParameters);
      if (urlParameters.has("v")){
        console.log(urlParameters.get("v"));
        chrome.tabs.sendMessage(tabId, {
          videoId: urlParameters.get("v"),
        });
      } 
    }
  });
  