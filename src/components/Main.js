import React from "react"
import "../css/header.css"
import "../css/main.css"
import ImageSlider from "./ImageSlider";


class Main extends React.Component{


    render(){
        return(
            <main className={"main"}>
                <ImageSlider/>
            </main>
        )
    }

}

export default Main