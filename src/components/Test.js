import React from "react"
import "../css/main.css"

class Test extends React.Component{

    changeStyle(id,newId){
        document.getElementById(id).id = newId
    }

    leftClick=()=>{
        let test = document.getElementById("test")
        let nodes = test.childNodes
        let classNames = [nodes.length]

        for(let i = 0; i<nodes.length; i++){
            classNames[i] = nodes[i].className
        }

        for(let i = 0; i<nodes.length;i++){
            if(i === nodes.length-1){
                nodes[i].className = classNames[0]
            }
            else{
                nodes[i].className = classNames[i+1]
            }

        }
    }
    rightClick=()=>{
        let test = document.getElementById("test")
        let nodes = test.childNodes
        let classNames = [nodes.length]

        for(let i = 0; i<nodes.length; i++){
            classNames[i] = nodes[i].className
        }

        for(let i = nodes.length-1; i>-1;i--){
            if(i === 0){
                nodes[i].className = classNames[nodes.length-1]
            }
            else{
                nodes[i].className = classNames[i-1]
            }

        }
    }


    render(){
        return(
            <div className={"test-wrapper"}>
                <div id={"test"} className={"test"}>
                    <div className={"left-hidden"}>Left-second </div>
                    <div className={"left"}>Left </div>
                    <div className={"middle"}>Middle </div>
                    <div className={"right"}>Right </div>
                    <div className={"right-hidden"}>Right-second </div>
                </div>
                <div>
                    <button onClick={this.leftClick}>
                        Move Left
                    </button>
                    <button onClick={this.rightClick}>
                        Move Right
                    </button>
                </div>
            </div>
        )
    }

}

export default Test