/* Youtube Search Api = 100 points/query - https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&type=video&channelId=[ChannelId]&maxResults=1&key=[YOUR_API_KEY]
Youtube Activities API = 1 point/query - https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=[ChannelId]&maxResults=1&key=[YOUR_API_KEY]

Basic Youtube API limit is 10,000 points, so avoid using search api as you can only do query 100 times a day.
*/


// URL Query
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiKey = urlParams.get('key'); //&key=name
const channelId = urlParams.get('channelId');//&channelid=name
const mute = urlParams.get('mute');
const autoplay = urlParams.get('autoplay');
const endplay = urlParams.get('end') || '30';
// End URL Query


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

async function logger() {
    jsondata2 = await getJson(fullUrl)
    console.log(jsondata2);
    console.log('Lastest Video Title: ', jsondata2.items[0].snippet.title);
    console.log('Upload Date: ', jsondata2.items[0].snippet.publishedAt);
    console.log('Video ID: ', jsondata2.items[0].contentDetails.upload.videoId);
    console.log('HD Thumbnail URL: ', jsondata2.items[0].snippet.thumbnails.high.url);
    console.log('Max Res Thumbnail: ', jsondata2.items[0].snippet.thumbnails.maxres.url);
    console.log(mute);
    console.log(autoplay);
    console.log(apiKey);
    console.log(channelId);
}

// Youtube Embeder
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
            'autoplay': autoplay,
            'controls': 0,
            'autohide': 1,
            'start': 0,
            'end': endplay,
            'mute': mute,
            'origin': 'https://jhoooooo.github.io/'
            }
    });
}

logger();