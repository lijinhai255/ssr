import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import {Provider} from "react-redux"
import App from '../src/App'
import store from "../src/store/store"

// ReactDom.render()  即做dom初始化 也做事件监听
// 注水  客户端入口 , 只需做事件监听
const Page = (
    <Provider store={store}>
        <BrowserRouter>
            {App}
        </BrowserRouter>
    </Provider>
)
ReactDom.hydrate(Page, document.getElementById('root'));