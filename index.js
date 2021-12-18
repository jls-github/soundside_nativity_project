// stop all audio tracks currently playing when an audio track is played

let contentWrapper = document.getElementsByClassName("content-wrapper")[0];

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

// tracks stored in cloudinary

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

// widget created for each track

let widget = (widget) => {
    let widgetWrapper = document.createElement("div");
    widgetWrapper.className="sc-widget-wrapper";
    let widgetWrapperHTML = `<div><div class="widget-header"><p>${widget["title"]}</p><h1 class="widget-title">${widget["subtitle"]}</h1></div><audio controls><source src="${widget["url"]}"></source></audio></div>`
    widgetWrapper.innerHTML = widgetWrapperHTML
    return widgetWrapper;
}

// connection form at bottom of page

function connectLink() {
    let section = document.createElement("section");
    section.className="connect-link"

    const p = document.createElement('p')
    p.className = "form-text"
    p.innerText = "Would you like to receive Jesus as your Savior? Let us know by filling out your email below."

    const form = document.createElement('form')
    form.addEventListener('submit', onFormSubmit)

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

// connection form event listener

function onFormSubmit(e) {
    e.preventDefault()
    email = document.getElementById('email-form-input').value
    formattedData = {csv_data: `nativity_email, ${email}`, formId: 1}
    json = JSON.stringify(formattedData)
    console.log(json)
}

//append content on app start

contentWrapper.append(...data.map(widget), connectLink())