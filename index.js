let contentWrapper = document.getElementsByClassName("content-wrapper")[0];

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

const data = [
    {title: "Track 1", subtitle: "It Came to Pass", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321647/Scene_1_zpilra.mp3"},
    {title: "Track 2", subtitle: "A Long Wait", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321644/Scene_2_nsqtta.mp3"},
    {title: "Track 3", subtitle: "The Announcement", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321643/Scene_3_pjfnoa.mp3"},
    {title: "Track 4", subtitle: "Little Town of Bethlehem", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321644/Scene_4_pw7ouu.mp3"},
    {title: "Track 5", subtitle: "Shepherds and Angels", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321644/Scene_5_wbkevv.mp3"},
    {title: "Track 6", subtitle: "Herod's Place", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1608321658/Scene_6_obtu0z.mp3"},
    {title: "Track 7", subtitle: "Gifts of the Magi", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1639863203/Scene_7_g3brh7.mp3"},
    {title: "Track 8", subtitle: "The Rest of the Story", url: "https://res.cloudinary.com/dfymzionj/video/upload/v1639863206/Scene_8_pxoqj4.mp3"},
]

let widget = (widget) => {
    let widgetWrapper = document.createElement("div");
    widgetWrapper.className="sc-widget-wrapper";
    let widgetWrapperHTML = `<div><div class="widget-header"><p>${widget["title"]}</p><h1 class="widget-title">${widget["subtitle"]}</h1></div><audio controls><source src="${widget["url"]}"></source></audio></div>`
    // let widgetWrapperHTML = `<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;&show_artwork=false&show_playcount=false&show_user=false&buying=false&sharing=false&download=false&color=008000"></iframe>`;
    widgetWrapper.innerHTML = widgetWrapperHTML
    return widgetWrapper;
}

let connectLink = () => {
    let section = document.createElement("section");
    section.className="connect-link"

    const p = document.createElement('p')
    p.className = "form-text"
    p.innerText = "Would you like to receive Jesus as your Savior? Let us know by filling out your email below."

    const form = document.createElement('form')

    const input = document.createElement('input')
    input.type = "text"
    input.id = "email-form-input"
    input.name = "email-form-input"
    input.placeholder = "email"
    input.className="input"

    const button = document.createElement('button')
    button.type = "submit"
    button.id = "email-form-submit"
    button.className="button is-fullwidth red-important"
    button.innerText = "Submit"

    form.append(input, button)

    section.append(p, form)

    return section;
}

for (let i = 0; i < data.length; i++) {
    contentWrapper.appendChild(widget(data[i]));
}

contentWrapper.appendChild(connectLink())