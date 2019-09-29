import React from "react"
import axios from "axios"
import "./App.css"

/*
*  BlogList
*
* Purpose: Container for BlogPosts, makes requests and dynamically creates BlogPosts
*
*
*
* */
class BlogList extends React.Component{

    constructor(){
        super();
        this.state = {
            "image":null,
            "text":null,
        }
    }

    //Generate random dog picture and advice
    componentDidMount() {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response =>{
                this.setState({
                    "image":response.data.message
                });
                console.log(response.data)
            })
            .catch(error =>{
                console.log(error);
            })

        axios.get("https://api.adviceslip.com/advice")
            .then(response =>{
                this.setState({
                    "text":response.data.slip.advice
                });
                console.log(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }

    buttonClick=()=>{
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response =>{
                this.setState({
                    "image":response.data.message
                });
                console.log(response.data)
            })
            .catch(error =>{
                console.log(error);
            })

        axios.get("https://api.adviceslip.com/advice")
            .then(response =>{
                this.setState({
                    "text":response.data.slip.advice
                });
                console.log(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }


    render(){
        return(
            <div className={"column-div"}>
                <div className={"fancy-text"}>
                    {this.state.text}
                </div>
                <img width={500} height={400} src={this.state.image} alt={""}/>
                <button onClick={this.buttonClick}>Click for New Advice and Doggo</button>
            </div>
        )
    }
}

export default BlogList