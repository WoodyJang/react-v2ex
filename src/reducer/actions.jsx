import * as types from "./types"
import fetch from 'isomorphic-fetch'

const BASE_URL = '/api'

//action creators
const received = (type, json) => {
    switch (type){
      case "TOPICS":
        return {
          type: type,
          payload: json
        }
      case "HOT":
        return {
          type: type,
          payload: json
        }
      case "TOPIC":
        return {
          type: type,
          payload: {
            topic: json.topic,
            replies: json.replies
          }
        }
      default:
        return {}
    }
  }

//actions
export const fetchTopics = (options) => (dispatch) => {
    let type = types.TOPICS;
    let url = ''
    if(options){
        if(options.node_name){
            if(options.node_name === 'hot'){
                url = `/api/topics/hot.json`
            }else if(options.node_name === 'latest'){
                url =`/api/topics/latest.json`
            }else{
                url = `/api/topics/show.json?node_name=${options.node_name}`
            }
        }
    }else{
        url = `/api/topics/hot.json`
    }
    console.log('fetch url: ', url)

    return fetch(url)
        .then(response => response.json())
        .then(json => {
            dispatch(received(type,json))
            console.log(json)
    })
}

export const fetchHot = () => dispatch => {
    const type = types.HOT
    let url = `/api/topics/hot.json`
    return fetch(url)
      .then(response => response.json())
      .then(json => {
          dispatch(received(type, json))
          console.log(json)
      })
}

export const fetchTopic = (id) => (dispatch) => {
    dispatch(cleanCacheData())
    const type = types.TOPIC
    const results = {'topic': {}, 'replies': []}
    let url =`/api/topics/show.json?id=${id}`
    let repliesUrl = `/api/replies/show.json?topic_id=${id}`
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            results.topic = json[0]
            fetch(repliesUrl)
            .then((response) => response.json())
            .then((json) => {
                results.replies = json
                dispatch(received(type,results))
            })
        })
}

const cleanCacheData = () => {
    return {
      type: types.TOPIC,
      payload: {
        topic: {},
        replies: []
      }
    }
  }
  