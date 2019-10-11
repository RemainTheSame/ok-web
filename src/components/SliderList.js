
import React from "react"

class SliderList extends React.Component{

    test=()=>{
        
    }


    render(){
        return(
            <div className={"image-list"}>
                <img src={this.props.image} />
            </div>
        )
    }

}

export default SliderList