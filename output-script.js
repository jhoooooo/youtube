// URL Query
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiKey = urlParams.get('key') //?key=name
const channelId = urlParams.get('channelId') //?channelid=name

// End URL Query

let jsondata2 = "";
let apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&type=video&"

async function getJson(url) {
    let response = await fetch(url + new URLSearchParams({
        channelId: channelId,
        key: apiKey,
    }));
    let data = await response.json()
    return data;
}

async function main() {

    jsondata2 = await getJson(apiUrl)
    console.log(jsondata2);
    console.log('Video ID: ', jsondata2.items[0].id.videoId);
    console.log('HD Thumbnail URL: ', jsondata2.items[0].snippet.thumbnails.high.url);
    console.log('Max Res Thumbnail: ', 'https://img.youtube.com/vi/' + jsondata2.items[0].id.videoId + '/maxresdefault.jpg')

}

main();