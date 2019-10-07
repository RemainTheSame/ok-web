import React from "react"
import "../css/bloglist.css"
class BlogPost extends React.Component{



    render(){
        return(
            <div className={"blog-post"}>
                <img className={"blogpost-image"} src={this.props.image} alt={""}>

                </img>
                <div className={"left-container"}>
                    <h3 className={"post-header"}>{this.props.title}</h3>
                    <p className={"post-paragraph"}>{this.props.text}</p>
                </div>



            </div>
        )
    }
}

export default BlogPost