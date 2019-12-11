// 纯属入口
import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import IndexReducer from "./index"
// 创建reducer
const reducer = combineReducers({
    index:IndexReducer
})

//创建store
const store = createStore(reducer,applyMiddleware(thunk))

// 喜爱哪个区外暴露

export default store