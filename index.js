let contentWrapper = document.getElementsByClassName("content-wrapper")[0];


let widget = () => {
    let widgetWrapper = document.createElement("div");
    widgetWrapper.className="sc-widget-wrapper";
    let widgetWrapperHTML = `<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;&show_artwork=false&show_playcount=false&show_user=false&buying=false&sharing=false&download=false&color=008000"></iframe>`;
    widgetWrapper.innerHTML = widgetWrapperHTML
    return widgetWrapper;
}

for (let i = 0; i < 10; i++) {
    contentWrapper.appendChild(widget());
    i++;
}