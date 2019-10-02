import React from "react"
import axios from "axios"
import "../App.css"
import getPosts from "../tempData"
import BlogPost from "./BlogPost";

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
        let posts = getPosts(this.props.page);
        let a = posts.map((post) =>
            <BlogPost title={post.title} text={post.text} image={post.image}/>
        );
        return(
            <div className={"column-div"}>
                {a}
            </div>
        )
    }
}

export default BlogList