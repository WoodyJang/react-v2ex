import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router"
import '../less/navbar.less'

class NavBar extends Component {
    render(){
       return(
            <div className="top-navbar">
                <div className="logo">
                    <Link to='/'>
                        <img src="https://cdn.v2ex.co/site/logo@2x.png" alt="图片" width="94" height="30"/>
                    </Link>
                </div>
                <ul className="top-list">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/">设置</Link></li>
                    <li><Link to="/">登出</Link></li>
                </ul>
            </div>
       )
    }
} 

export default NavBar;