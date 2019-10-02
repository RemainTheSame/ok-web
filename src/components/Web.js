import React from "react"
import BlogList from "./BlogList";

class Web extends React.Component{



    render(){
        return(
            <div>

                <h1>WEB</h1>
                <BlogList page={"web"}/>


            </div>
        )
    }
}

export default Web