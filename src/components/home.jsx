import React, { Component } from 'react'
import Main from "../containers/main"
import RightSideBar from "../containers/rightsidebar"

export default class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="row margin-xs">
                    <div className="col-md-9 no-padding-xs">
                        <Main></Main>
                    </div>
                    <div className="col-md-3 no-padding-xs">
                        <RightSideBar hideHot={false}></RightSideBar>
                    </div>
                </div>
            </div>
        )
    }
}