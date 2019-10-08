const webposts = [
    {
        "title":"Example Test Web Post1",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
        "text":"This is an example post that is only here to demonstrate functionality"
    },
    {
        "title":"Example Test Web Post2",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
        "text":"This is also an example post that is only here to demonstrate functionality"
    },{
        "title":"Example Test Web Post3",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
        "text":"This is, just like the previous ones, an example post that is only here to demonstrate functionality"
    },
]
const gameposts = [
    {
        "title":"Example Test Game Post1",
        "image":"https://svgsilh.com/svg/1784571.svg",
        "text":"This is an example post that is only here to demonstrate functionality"
    },
    {
        "title":"Example Test Game Post2",
        "image":"https://svgsilh.com/svg/1784571.svg",
        "text":"This is also an example post that is only here to demonstrate functionality"
    },{
        "title":"Example Test Game Post3",
        "image":"https://svgsilh.com/svg/1784571.svg",
        "text":"This is, just like the previous ones, an example post that is only here to demonstrate functionality"+""
    },
]

const failposts = [
    {
        "title":"No posts available yet!",
        "image":"#",
        "text":"But just you wait... they're coming soon."
    }
]

const sliderimages = [
    {
        "caption":"First Picture",
        "image":"https://live.staticflickr.com/1799/43177168225_1f78e5f054_b.jpg"
    },
    {
        "caption":"Second Picture",
        "image":"https://www.publicdomainpictures.net/pictures/170000/velka/landscape-1461832466Sxi.jpg"
    },
    {
        "caption":"...and the third (3)!",
        "image":"https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
    },
]


export function getPosts(page){
    switch (page) {
        default: return failposts;
        case "games":
            return gameposts;

        case "web":
            return webposts;

    }
}
export function getSlides() {
    return sliderimages;
}



