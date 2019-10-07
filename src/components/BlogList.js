import React from "react"
import axios from "axios"
import "../App.css"
import {getPosts} from "../tempData"
import BlogPost from "./BlogPost";
import "../css/bloglist.css"

/*
*  BlogList
*
* Purpose: Container for BlogPosts, makes requests and dynamically creates BlogPosts
*
*
*
* */
class BlogList extends React.Component{

    constructor(){
        super();
        this.state = {
            "image":null,
            "text":null,
        }
    }

    //Generate random dog picture and advice
    componentDidMount() {

    }

    buttonClick=()=>{

    }


    render(){

        let posts = getPosts(this.props.page).map((post) =>
            <BlogPost title={post.title} text={post.text} image={post.image}/>
        );
        return(
            <div className={"blog-list"}>
                {posts}
            </div>
        )
    }
}

export default BlogList