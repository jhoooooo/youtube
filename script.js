var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

new ClipboardJS('.btn');

// Generate Browser Source URL

function generator() {
    var apiInput = document.getElementById('input1').value;
    var channelInput = document.getElementById('input2').value;
    const browserurl = 'https://jhoooooo.github.io/youtube/output'
    var result;
    result = browserurl + '?key=' + apiInput + '&channelId=' + channelInput;

    if (apiInput == "") {
        alert("API Key must be filled out");
        return false;
    }
    if (channelInput == "") {
        alert("Channel ID must be filled out");
        return false;
    }
    document.getElementById('result').innerHTML = result;
    console.log(result);
}
