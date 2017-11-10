import React, { Component } from 'react'
import { Link } from "react-router"
import Lists from "./lists"
import "../less/mainbox.less"

class MainBox extends Component {

    handleClick(tab){
        this.props.click({node_name:tab})
    }
    render(){
        return(
            <div className="panel panel-default topic-lists">
                <ul className="panel-heading text-left">
                    <li><Link to="/tab/programmer" onClick={() => this.handleClick("programmer")}>程序员</Link> </li>
                    <li><Link to="/tab/python" onClick={()=>this.handleClick('python')}>Python</Link> </li>
                    <li><Link to="/tab/javascript" onClick={()=>this.handleClick('js')}>JavaScript</Link> </li>
                    <li><Link to="/tab/create" onClick={()=>this.handleClick('create')}>分享创造</Link> </li>
                    <li><Link to="/tab/nodejs" onClick={()=>this.handleClick('nodejs')}>Node.js</Link> </li>
                    <li><Link to="/tab/jobs" onClick={()=>this.handleClick('jobs')}>酷工作</Link> </li>
                    <li><Link to="/tab/hot" onClick={()=>this.handleClick('hot')}>最热</Link> </li>
                    <li><Link to="/tab/latest" onClick={()=>this.handleClick('latest')}>最新</Link> </li>
                </ul>
                <Lists topics={this.props.topics}></Lists>
            </div>
        )
    }
}

export default MainBox