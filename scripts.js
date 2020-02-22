document.getElementById("img_request").addEventListener("click", function(event) {
    event.preventDefault();
    if(document.getElementById("dog_pic").hasChildNodes()) {
        document.getElementById("dog_pic").innerHTML = '';
    }

    const url = "https://random.dog/woof.json";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let result = "<img src=\"" + json.url + "\">";
        document.getElementById("dog_pic").innerHTML = result;
        document.getElementById("dog_pic").childNodes[0].style.maxWidth = "80%";
    });
});
