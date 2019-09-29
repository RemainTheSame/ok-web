import React from "react"
import "../css/header.css"
import { Router, Route, Link} from "react-router-dom"
class Header extends React.Component{


    render(){
        return(
            <div className={"header"}>
                <nav className={"header-buttons"}>
                    <div>About Me</div>
                    <div>Game asdsProjects</div>
                    <div>Web Dev</div>
                </nav>
            </div>
        )
    }

}

export default Header