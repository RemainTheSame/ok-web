import React from "react"
import BlogList from "./BlogList";

class Games extends React.Component{



    render(){
        return(
            <div>

                <h1>GAMES</h1>
                <BlogList page={"games"}/>

            </div>
        )
    }
}

export default Games