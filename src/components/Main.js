import React from "react"
import "../css/header.css"
import "../css/main.css"
import ImageSlider from "./ImageSlider";
import Test from "./Test";


class Main extends React.Component{


    render(){
        return(
            <main className={"main"}>
                <ImageSlider/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Test/>
            </main>
        )
    }

}

export default Main