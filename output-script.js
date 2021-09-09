// Youtube Search Api = 100 points - https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&type=video&channelId=[ChannelId]&maxResults=1&key=[YOUR_API_KEY]
// Youtube Activities API = 1 Point - https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&maxResults=1&key=[YOUR_API_KEY]

// URL Query
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiKey = urlParams.get('key') //&key=name
const channelId = urlParams.get('channelId') //&channelid=name
const mute = urlParams.get('mute') //&mute=1

// End URL Query

console.log(mute);
console.log(apiKey);
console.log(channelId);
let jsondata2 = "";
let apiUrl = "https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=1&"
let fullUrl = apiUrl + 'key=' + apiKey + '&channelId=' + channelId;

// async function getJson(url) {
//     let response = await fetch(url + new URLSearchParams({
//         channelId: channelId,
//         key: apiKey,
//     }));
//     let data = await response.json()
//     return data;
// }

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    jsondata2 = await getJson(fullUrl)
    console.log(jsondata2);
    console.log('Lastest Video Title: ', jsondata2.items[0].snippet.title);
    console.log('Upload Date: ', jsondata2.items[0].snippet.publishedAt);
    console.log('Video ID: ', jsondata2.items[0].contentDetails.upload.videoId);
    console.log('HD Thumbnail URL: ', jsondata2.items[0].snippet.thumbnails.high.url);
    console.log('Max Res Thumbnail: ', jsondata2.items[0].snippet.thumbnails.maxres.url);
}

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
async function onYouTubeIframeAPIReady() {
    jsondata2 = await getJson(fullUrl)
    video = new YT.Player('player', {
        height: 360,
        width: 640,
        videoId: jsondata2.items[0].contentDetails.upload.videoId,
        playerVars: {
            'modestbranding': 1,
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'mute': 0,
            'origin': 'https://jhoooooo.github.io/'
            }
    });
}

main();