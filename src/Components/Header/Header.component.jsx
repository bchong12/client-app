import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { getUser } from '../../Redux/reducers/authReducer'
import { connect } from 'react-redux'
import './Header.component.css'

const Header = (props) => {
    const [name, setName] = useState('')
    useEffect(() => {
        axios.get('/auth/me').then((res) => {
            if (res.data === "") {
                props.history.push('/')
            } else if (res.data.email === "admin@admin.com") {
                props.history.push('/register')
            } else {
                setName(res.data.name.toUpperCase())
                props.getUser(res.data)
            }
        })
    }, [])
    return (
        <div className="header">
            <p className="header-title">{name}</p>
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
                <Link style={{ textDecorationLine: 'none', color: "white" }} to={props.linkRightRight}>
                    <p className="links-header">{props.RightRight}</p>
                </Link>
                {props.logout ? <div className="link-logout">
                    <p onClick={() => {
                        axios.post('/auth/logout').then(() => {
                            props.history.push('/')
                        })
                    }} className="links-header">{props.logout}</p>
                </div> : null}
            </div>
        </div>
    )
}

export default connect(null, { getUser })(withRouter(Header))