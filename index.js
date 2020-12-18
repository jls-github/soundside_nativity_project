let contentWrapper = document.getElementsByClassName("content-wrapper")[0];

const data = [
    {title: "Track 1", url: "https://drive.google.com/uc?export=download&id=1HZFhwjO7nj8hW45-7MiYJqHSGqG10OTq"},
    {title: "Track 2", url: "https://drive.google.com/uc?export=download&id=1JeltGQk_JX4q_d0NBInl70jKMS4Od7UE"},
    {title: "Track 3", url: "https://drive.google.com/uc?export=download&id=1S34i9K9LODyUj__U1rQbMzo7kKErBBjt"},
    {title: "Track 4", url: "https://drive.google.com/uc?export=download&id=1UPZiBGpJzbxbiJmOpmVCFS_pq6Vmzvyq"},
    {title: "Track 5", url: "https://drive.google.com/uc?export=download&id=1JYalWTlqS0mPTYFEkd4ba2NT-P4GL4qW"},
    {title: "Track 6", url: "https://drive.google.com/uc?export=download&id=1ECRYEhTrKoRw45JRQd4cXM_5xMu2wdS8"},
    {title: "Track 7", url: "https://drive.google.com/uc?export=download&id=1FFotRHCxhCSg5MIH7F8d-xvARG7tKC0m"},
    {title: "Track 8", url: "https://drive.google.com/uc?export=download&id=1BCTJYPUWObICCoqt0eRRbCtYNTp9N5P-"},
]

let widget = (url) => {
    let widgetWrapper = document.createElement("div");
    widgetWrapper.className="sc-widget-wrapper";
    let widgetWrapperHTML = `<audio controls src="${url}"></audio>`
    // let widgetWrapperHTML = `<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;&show_artwork=false&show_playcount=false&show_user=false&buying=false&sharing=false&download=false&color=008000"></iframe>`;
    widgetWrapper.innerHTML = widgetWrapperHTML
    return widgetWrapper;
}

for (let i = 0; i < data.length; i++) {
    contentWrapper.appendChild(widget(data[i]["url"]));
}