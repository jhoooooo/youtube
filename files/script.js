var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

new ClipboardJS('.btn');

// Generate Browser Source URL

function generator() {
    let autoplayId = 0;
    let muteId = 0;
    var apiInput = document.getElementById('input1').value;
    var channelInput = document.getElementById('input2').value;
    const browserurl = 'https://jhoooooo.github.io/youtube/'
    var result;

    if (apiInput == "") {
        alert("API Key must be filled out");
        return false;
    }
    if (channelInput == "") {
        alert("Channel ID must be filled out");
        return false;
    }

    var radioChecker = document.getElementsByName('styleoption');
    for (i = 0; i < radioChecker.length; i++) {
        if (radioChecker[i].checked)
            var radioValue = radioChecker[i].value;
    }

    if (document.querySelector('#inlineCheckbox1:checked') !== null) {
        autoplayId = 1
    }
    if (document.querySelector('#inlineCheckbox2:checked') !== null) {
        muteId = 1
    }

    result = browserurl + radioValue + '?key=' + apiInput + '&channelId=' + channelInput + '&autoplay=' + autoplayId + '&mute=' + muteId;

    document.getElementById('result').innerHTML = result;
    console.log(result);
}

const imgSrc = ["images/Youtube-fullscreen.png", "images/Youtube-Ending.png", "images/Youtube-Thumbnail.png"];

function imagePreview(number) {
    var image = document.getElementById("img-preview");
    image.src = imgSrc[number];
}
