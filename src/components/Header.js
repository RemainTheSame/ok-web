import React from "react"
import "../css/header.css"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class Header extends React.Component{


    render(){
        return(
            <div className={"header"}>
                <nav className={"header-buttons"}>
                    <Link to={"/about"}>
                        About Me
                    </Link>
                    <Link to={"/games"}>
                        Game Projects
                    </Link>
                    <Link to={"/web"}>
                        Web Development
                    </Link>

                </nav>


            </div>
        )
    }

}

export default Header