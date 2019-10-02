import React from "react"

class BlogPost extends React.Component{



    render(){
        return(
            <div>
                <div className={"left-container"}>
                    <h3 className={"post-header"}>{this.props.title}</h3>
                    <p className={"post-paragraph"}>{this.props.text}</p>
                </div>
                <div className={"right-container"}>
                    <img className={"blogpost-image"} src={this.props.image} alt={""}>

                    </img>
                </div>
            </div>
        )
    }
}

export default BlogPost