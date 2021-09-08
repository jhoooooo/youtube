// Generate Browser Source URL

function generator() {
    var apiInput = document.getElementById('input1').value;
    var channelInput = document.getElementById('input2').value;
    const browserurl = 'https://jhoooooo.github.io/youtube/output'
    var result;

    result = browserurl + '?key=' + apiInput + '?channelId=' + channelInput;

    document.getElementById('result').innerHTML = result;
    console.log(result);
}