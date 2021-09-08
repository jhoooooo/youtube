// URL Query
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiKey = urlParams.get('key') //&key=name
const channelId = urlParams.get('channelId') //&channelid=name

// End URL Query

let jsondata2 = "";
let apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&type=video&"
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
    console.log('Video ID: ', jsondata2.items[0].id.videoId);
    console.log('HD Thumbnail URL: ', jsondata2.items[0].snippet.thumbnails.high.url);
    console.log('Max Res Thumbnail: ', 'https://img.youtube.com/vi/' + jsondata2.items[0].id.videoId + '/maxresdefault.jpg')
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
        videoId: jsondata2.items[0].id.videoId,
        playerVars: {
            'fs': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'rel': 0,
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'mute': 0,
            'origin': 'https://jhoooooo.github.io/'
            }
    });
}

main();