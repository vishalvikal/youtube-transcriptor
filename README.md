
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

## Demo

#### Step 1
Clone the repository using vcs
```http
  git clone https://github.com/vishalvikal/youtube-transcriptor.git
```
#### Step 2
 Enable the developer option in chrome.  
 Take the help of this link https://support.google.com/chrome_webstore/answer/2664769?hl=en
 
#### Step 3
 Navigate to the source directory and start the server. 
```
  $ cd youtube-transcriptor
  #start the flask server 
  $ cd server
  #Before starting the server please install modules
  $ pip install Flask youtube_transcript_api englisttohindi
````
#### Step 4
  Before going to last step you must have done above steps

  Open a youtube and play video. See your server terminal you will have a post request there
  Content js is sending the request here. After some time your server will be responding
  json format transcripted diologues. 



## Authors

- [@vishavikal](https://www.github.com/vishalvikal)
