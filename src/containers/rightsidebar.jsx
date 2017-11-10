import React, { Component } from 'react'
import UserInfo from "../components/userinfo"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../reducer/actions'
import Hot from "../components/hot"

class RightSideBar extends Component {

    constructor(props) {
        super(props)
        this.props.actions.fetchHot()
    }

    render(){
        return(
            <div>
                <UserInfo></UserInfo>
                <Hot topics={this.props.hotTopics} hideHot={this.props.hideHot}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let hotTopics = state.RightSidebar.hotTopics
    if (hotTopics) {
      return {
        hotTopics
      }
    }
    return {hotTopics:[{}]}
  }
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar)