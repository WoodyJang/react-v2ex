import * as type from "./types"
import { combineReducers } from 'redux'

//reducer
const RightSidebar = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
      case "HOT":
        return {
          hotTopics: action.payload
        }
      default:
        return state
    }
  }

  const Topic = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
      case "TOPIC":
        return {
          topic: action.payload.topic,
          replies: action.payload.replies
        }
      default:
        return state
    }
  }

  const Topics = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
      case "TOPICS":
        return {
          type: action.type,
          payload: action.payload
        }
      default:
        return state
    }
  }


export default combineReducers({
    Topics,
    Topic,
    RightSidebar
})