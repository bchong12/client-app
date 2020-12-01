import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.component.css'

const Header = (props) => {
    return (
        <div className="header">
            <p className="header-title">{props.left}</p>
            <div className="links-header-div">
                <Link style={{ textDecorationLine: 'none', color: "white" }} to={props.linkR}>
                    <p className="links-header">{props.r}</p>
                </Link>
                <Link style={{ textDecorationLine: 'none', color: "white" }} to={props.linkMiddle}>
                    <p className="links-header">{props.middle}</p>
                </Link>
                <Link style={{ textDecorationLine: 'none', color: "white" }} to={props.linkRight}>
                    <p className="links-header">{props.right}</p>
                </Link>
                {props.logout ? <div className="link-logout">
                    <p onClick={() => {
                        props.history.push('/')
                    }} className="links-header">{props.logout}</p>
                </div> : null}
            </div>
        </div>
    )
}

export default withRouter(Header)