import React, { Component } from 'react'
import { Link } from 'react-router'
import "../less/lists.less"
import  {Format} from "../utils"

export default class Lists extends Component {

    render(){
        let listItems = []
        if("id" in  this.props.topics[0]){
            listItems = this.props.topics.map((topic) =>{
                return(
                    <div className="media topic" key={topic.id}>
                    <a className="media-left" href="#">
                      <img className='img-circle img-width-50' src={topic.member.avatar_normal} role="presentation" />
                    </a>
                    <div className="media-body">
                      <Link to={`/t/${topic.id}`} className='title'>{topic.title}</Link>
                      <div className='infos'>
                        <a className='separator' href={topic.node.url}>{topic.node.title}</a>
                          •
                        <strong><a href="#" className='separator'>{topic.member.username}</a></strong>
                          •
                        <span className='separator'>{Format.Data(topic.created)}</span>
                      </div>
                    </div>
                    <div className='media-right count'>
                      <span className='badge'>{topic.replies}</span>
                    </div>
                  </div>
                )
            })
        }

        return (
            <div className='panel-body'>
              {listItems}
            </div>
          );
    }
}