let express = require('express');

const app = express()

app.get("/api/const/list",(req,res)=>{
    // 支持跨域
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code:0,
        list:[
            {name:"lijh",id:1},
            {name:"lijh1",id:2},
            {name:"lijh2",id:3},
            {name:"lijh3",id:4},
            {name:"lijh4",id:5},
            {name:"lijh5",id:6},
        ]
    })
})
app.listen(3004,()=>{
    console.log('wanpile')
})