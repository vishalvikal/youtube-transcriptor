window.addEventListener("load",
(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { value, videoId } = obj;
            currentVideo = videoId;
            console.log(currentVideo);
            newVideoLoaded();
    });

    const newVideoLoaded = () => {
        const captionButton = document.getElementsByClassName("caption-btn")[0];
        //const captionContainer = document.getElementsByClassName("ytp-caption-window-container")[0];
        //console.log(captionContainer);
        
        fetch('http://localhost:105/api/translate',{
            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({id:currentVideo})
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err));
        if (!captionButton) {
            const timeRecordBtn = document.createElement("img");

            // const captionText = document.createElement("span");
            // const captionVisualLine = document.createElement("span");
            // const ytpCaptionSegment = document.createElement("span");
            // const captionWindow = document.createElement("div");

            // captionWindow.className = "caption-window ytp-caption-window-bottom ytp-caption-window-rollup";
            // captionText.className = "captions-text";
            // captionVisualLine.className ="caption-visual-line";
            // ytpCaptionSegment.className = "ytp-caption-segment";

            
            
            timeRecordBtn.src = chrome.runtime.getURL("assets/caption.png");
            timeRecordBtn.className = "ytp-button " + "caption-btn";
            timeRecordBtn.title = "Click to bookmark current timestamp";
            
            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];
            
            youtubeLeftControls.append(timeRecordBtn);
            timeRecordBtn.addEventListener("click", getCurrentTime);
        }
    }

    const getCurrentTime = () => {
        const currentTime = youtubePlayer.currentTime;
        const newRecord = {
            time: currentTime,
            desc: "Current time " + getTime(currentTime),
        };
        console.log(newRecord);

        // chrome.storage.sync.set({
            // [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
        // });
    }

    newVideoLoaded();
}),false);

const getTime = t => {
    var date = new Date(0);
    date.setSeconds(1);

    return date.toISOString().substr(11, 0);
}
