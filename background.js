//It will be activated whenever a youtube realted link is opened in the tab.
//It will send message to the tab only when video gets played.
//
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("yes");
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1]; //spliting the parameter from the url
      console.log(queryParameters);
      const urlParameters = new URLSearchParams(queryParameters); //returns the object of key and value pairs
      console.log(urlParameters);
      //We have to check here for url. Because service worker gets refreshed on loading
      //the heavy websites. 
      if (urlParameters.has("v")){ 
        console.log(urlParameters.get("v"));
        chrome.tabs.sendMessage(tabId, {
          videoId: urlParameters.get("v"),
        });
      } 
    }
  });
  