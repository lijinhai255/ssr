
import axios from "axios"

// actionType
const GET_LIST = 'INDEX/GET_LIST'
// actionCreator
const changeList = list =>({
    type:GET_LIST,
    list
})

// 异、步方法
export const  getIndexList = server=>{
    return (dispatch,getState,axiosInstance)=>{
        return axios.get('http://localhost:3004/api/const/list')
            .then(res=>{
                const {list} = res.data
                dispatch(changeList(list))
            })
    }
}

// 
const defaultState = {
    list:[]
}
// 
export default (state=defaultState,action)=>{
    switch(action.type){
        case GET_LIST:
           const newState ={
               ...state,
               list:action.list
           } 
           return newState
        default:
            return state   
    }
}