// 这里的node代码会用babel处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()
// 设置静态资源目录-- public设置成静态资源目录
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(App)
  res.send(`
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>react ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(3003, () => {
  console.log('wacth')
})