let contentWrapper = document.getElementsByClassName("content-wrapper")[0];

const data = [
    {title: "Track 1", subtitle: "It Came to Pass", url: "https://drive.google.com/uc?export=download&id=1HZFhwjO7nj8hW45-7MiYJqHSGqG10OTq"},
    {title: "Track 2", subtitle: "A Long Wait", url: "https://drive.google.com/uc?export=download&id=1JeltGQk_JX4q_d0NBInl70jKMS4Od7UE"},
    {title: "Track 3", subtitle: "The Announcement", url: "https://drive.google.com/uc?export=download&id=1S34i9K9LODyUj__U1rQbMzo7kKErBBjt"},
    {title: "Track 4", subtitle: "Little Town of Bethlehem", url: "https://drive.google.com/uc?export=download&id=1UPZiBGpJzbxbiJmOpmVCFS_pq6Vmzvyq"},
    {title: "Track 5", subtitle: "Shepherds and Angels", url: "https://drive.google.com/uc?export=download&id=1JYalWTlqS0mPTYFEkd4ba2NT-P4GL4qW"},
    {title: "Track 6", subtitle: "Herod's Place", url: "https://drive.google.com/uc?export=download&id=1ECRYEhTrKoRw45JRQd4cXM_5xMu2wdS8"},
    {title: "Track 7", subtitle: "Gifts of the Magi", url: "https://drive.google.com/uc?export=download&id=1FFotRHCxhCSg5MIH7F8d-xvARG7tKC0m"},
    {title: "Track 8", subtitle: "The Rest of the Story", url: "https://drive.google.com/uc?export=download&id=1BCTJYPUWObICCoqt0eRRbCtYNTp9N5P-"},
]

let widget = (widget) => {
    let widgetWrapper = document.createElement("div");
    widgetWrapper.className="sc-widget-wrapper";
    let widgetWrapperHTML = `<div><div class="widget-header"><p>${widget["title"]}</p><h1 class="widget-title">${widget["subtitle"]}</h1></div><audio controls><source src="${widget["url"]}"></source></audio></div>`
    // let widgetWrapperHTML = `<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;&show_artwork=false&show_playcount=false&show_user=false&buying=false&sharing=false&download=false&color=008000"></iframe>`;
    widgetWrapper.innerHTML = widgetWrapperHTML
    return widgetWrapper;
}

for (let i = 0; i < data.length; i++) {
    contentWrapper.appendChild(widget(data[i]));
}