import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../reducer/actions'
import Content from '../components/content'
import RightSideBar from "./rightsidebar"
import Replies from "../components/replies"

 class Topic extends Component {

    constructor(props) {
        super(props)
        this.props.actions.fetchTopic(this.props.params.id)
    }

    render(){
        const isEmpty = !this.props.topic.hasOwnProperty('member')
        const wrongObj = {id:-1}
        return (
          <div className="container">
            <div className="row margin-xs">
              <div className="col-md-9 no-padding-xs">
                {!isEmpty && <Content topic={this.props.topic}/>}
                {!isEmpty && <Replies replies={this.props.replies} />}
                {isEmpty && <Content topic={wrongObj}/>}
              </div>
              <div className="col-md-3 no-padding-xs">
                <RightSideBar hideHot={true}/>
              </div>
            </div>
          </div>
        );
    }
} 

const mapStateToProps = state => {
    let topic = state.Topic.topic
    let replies = state.Topic.replies
    if (topic && replies) {
      return {
        topic,
        replies
      }
    }
    return {topic:{},replies:[{}]}
  }
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Topic)