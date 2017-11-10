import React, { Component } from 'react'
import { Link } from "react-router"
import "../less/content.less"
import  {Format} from "../utils"

export default class Content extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const isEmpty = (this.props.topic.id === -1)
        return(
            <div className="topic">
                {!isEmpty &&
                    <div className="panel panel-default topic-wrap text-left">
                        <div className="panel-heading media">
                            <div className="text-right float-right">
                                <img src={this.props.topic.member.avatar_large} alt="" className="img-circle"/>
                            </div>
                            <div className="text-left media-body">
                                <Link to="/">V2EX</Link>
                                <span className="chevron">&nbsp;&nbsp;›&nbsp;&nbsp;</span>
                                <a href="#">{this.props.topic.node.title}</a>
                                <h1 className="topic-title">{this.props.topic.title}</h1>
                                <div className="small-gray">
                                    <div className='infos'>
                                        <a className='separator' href={this.props.topic.node.url}>{this.props.topic.node.title}</a>
                                        •
                                        <strong><a href="#" className='separator'>{this.props.topic.member.username}</a></strong>
                                        •
                                        <span className='separator'>{Format.Data(this.props.topic.created)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body markdown">
                            <span dangerouslySetInnerHTML={{ __html: this.props.topic.content_rendered}} />
                        </div>
                        <div className="panel-footer">
                            <a href="#" className="pf">加入收藏</a>
                            <a href="#" className="pf">Tweet</a>
                            <a href="#" className="pf">Weibo</a>
                            <a href="#" className="pf">忽略主题</a>
                            <a href="#" className="pf">感谢</a>
                        </div>
                    </div>
                }
                {isEmpty && <h1>Loading....</h1>}
            </div>
        )
    }
} 