import React from 'react'
import ReactDom from 'react-dom'

import App from '../src/App'

// ReactDom.render()  即做dom初始化 也做事件监听
// 注水  客户端入口 , 只需做事件监听
ReactDom.hydrate(App, document.getElementById('root'));