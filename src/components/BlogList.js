import React from "react"
import axios from "axios"
import "../App.css"

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
        return(
            <div className={"column-div"}>

            </div>
        )
    }
}

export default BlogList