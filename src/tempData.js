const webposts = [
    {
        "title":"Example Test Web Post1",
        "image":"#",
        "text":"This is an example post that is only here to demonstrate functionality"
    },
    {
        "title":"Example Test Web Post2",
        "image":"#",
        "text":"This is also an example post that is only here to demonstrate functionality"
    },{
        "title":"Example Test Web Post3",
        "image":"#",
        "text":"This is, just like the previous ones, an example post that is only here to demonstrate functionality"
    },
]
const gameposts = [
    {
        "title":"Example Test Game Post1",
        "image":"#",
        "text":"This is an example post that is only here to demonstrate functionality"
    },
    {
        "title":"Example Test Game Post2",
        "image":"#",
        "text":"This is also an example post that is only here to demonstrate functionality"
    },{
        "title":"Example Test Game Post3",
        "image":"#",
        "text":"This is, just like the previous ones, an example post that is only here to demonstrate functionality"
    },
]

const failposts = [
    {
        "title":"No posts available yet!",
        "image":"#",
        "text":"But just you wait... they're coming soon."
    }
]



export default function getPosts(page){
    switch (page) {
        default: return failposts;
        case "games":
            return gameposts;

        case "web":
            return webposts;


    }
}