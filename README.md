
# YT Transcriptor

This chrome extension is build for transcripting the youtube videos. It uses the flask 
server in the backend for translating english to hindi. It uses ML for translating. 
Python module english-to-hindi is used. Link of pip module
https://pypi.org/project/englisttohindi/  for api references.




## API Reference

#### Get translated response

```http
  POST /api/translate 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.   |

## Prerequisite
#### python 
  1. Download and install **python** from https://www.python.org/
  2. Install vscode
  3. Install plugins for webdevlopment
## Demo

#### Step 1
Clone the repository using vcs
```http
  git clone https://github.com/vishalvikal/youtube-transcriptor.git
```
#### Step 2
 Enable the developer option in chrome.  
 Take the help of this link https://support.google.com/chrome_webstore/answer/2664769?hl=en 

 
 - Put this url in the chrome.
 
     ![Alt Text](/screenshots/extension.png?raw=true "Optional Title")
  - Turn on the developer mode. 

    ![Alt Text](/screenshots/developer_mode_on.png?raw=true "Optional Title")
  - Load the extension using load unpacked option.

    ![Alt Text](/screenshots/use_load.png?raw=true "Optional Title")
  - Select the extension. Use the chrome_extension directory for loading
  
    ![Alt Text](/screenshots/select_extension.png?raw=true "Optional Title")
  - You will get in the extensions list.
      
      ![Alt Text](/screenshots/extension_success.png?raw=true "Optional Title")

#### Step 3
 Navigate to the source directory and start the server. 
```
  $ cd youtube-transcriptor
  #start the flask server 
  $ cd server
  #Before starting the server please install modules
  $ pip install Flask youtube_transcript_api englisttohindi googletrans
  #For linux or mac users
  $ python3 resources.py
  #For windows users
  $ python resources.py
````
#### Step 5

Load chrome extension. The extension in the chrome_extension directory. For loading the custom extension Please make sure you have completed step 2. 

#### Step 4

Before going to last step you must have done above steps

Open a youtube and play video. See your server terminal you will have a post request there Content js is sending the request here. After some time your server will be responding json format transcripted diologues. **It some times doesn't work please remove and reupload it. Because It faild if youtube takes time to get loaded.** **Use it on small videos for now. It takes time to translate the script.** **Here are some video links to try on**
https://www.youtube.com/watch?v=ZyYqyYAKGC0&t=3s 
https://www.youtube.com/watch?v=ZyYqyYAKGC0&t=9s 
https://www.youtube.com/watch?v=yj8sAnZ6c3g 
https://www.youtube.com/watch?v=jx3wcdCtL58&t=9s
https://www.youtube.com/watch?v=9mXJK86GCsI&t=2s
.


## Authors

- [@vishavikal](https://www.github.com/vishalvikal)

