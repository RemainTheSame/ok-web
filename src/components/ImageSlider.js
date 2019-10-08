import React from "react"
import "../css/main.css"
import {getSlides} from "../tempData"
import SliderList from "./SliderList";

class ImageSlider extends React.Component{
    constructor(){
        super()
        this.state={
            "slides":getSlides(),
            "current":0
        }
    }

    next =()=>{
        if(this.state.current !== this.state.slides.length-1){
            let i = this.state.current;
            i++;
            this.setState({
                current: i
            })
        }
        else{
            this.setState({
                current: 0
            })
        }

    }

    previous =()=>{
        if(this.state.current !== 0){
            let i = this.state.current;
            i--;
            this.setState({
                current: i
            })
        }
        else{
            this.setState({
                current: this.state.slides.length-1
            })
        }
    }

    getCurrentImage=()=>{
        return this.state.slides[this.state.current].image
    }

    render(){
        return(
            <div className={"image-slider"}>
                <div className={"slider-wrapper"}>
                    <div onClick={this.previous} id={"left-arrow"}>
                    </div>

                    <SliderList image={this.getCurrentImage()}/>

                    <div onClick={this.next} id={"right-arrow"}>
                    </div>
                </div>
                <div className={"image-text"}>{this.state.slides[this.state.current].caption}</div>
            </div>
        )
    }
}

export default ImageSlider