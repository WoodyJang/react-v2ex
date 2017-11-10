import React, { Component } from 'react'
import MainBox from "../components/mainbox"
import * as actions from "../reducer/actions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Main extends Component {
    constructor(props){
        super(props)
        let tab  = this.props.tab || 'programmer'
        this.props.actions.fetchTopics({node_name:tab})
    }

    componentWillMount = () => {
        // console.log(this.props.topics);
    }

    render(){
        console.log(this.props.topics);
        return(
            <MainBox topics={this.props.topics} click={this.props.actions.fetchTopics}></MainBox>
        )
    }
}

const mapStateToProps = state => {
    let topics = state.Topics.payload
    if (topics) {
      return {
        topics: topics
      }
    }
    return {topics:[{}]}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
