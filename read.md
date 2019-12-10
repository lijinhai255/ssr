文件名称 | 作用 | 思路   
------------ | -------------  | -------------
src | react主要的文件 |  分别打包成 client server 进行引入
server | 服务器端执行脚本 | 返回渲染的页面
client | 实现页面交互 | 注水  客户端入口 , 只需做事件监听
bulid | 首屏静态资源 | entry:'./server/index.js',
public | client打包后的静态文件 |  entry:'./client/index.js',

## 执行指令
````markdown
yarn dev:client
yarn dev:start
yarn dev:server
````

[笔记](https://lijinhai255.github.io/myNewBlog/2019/12/02/ssr/)