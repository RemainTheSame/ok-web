import React from "react"
import "../css/header.css"
import "../css/main.css"
import ImageSlider from "./ImageSlider";


class Main extends React.Component{


    render(){
        return(
            <main className={"main"}>
                This is the main space!
                <ImageSlider/>
            </main>
        )
    }

}

export default Main