import React, { useState,useEffect } from 'react'
import {connect} from "react-redux"
import {getIndexList} from "../store/index"
function Index (props) {
  const [count, setCount] = useState(1)
  useEffect(()=>{
    props.getIndexList()
  })
  return <div>
    <h1>hi {props.title} !! {count}</h1>
    <button onClick={() => setCount(count+1)}>+1</button>
    {props.list&&props.list.map((item,index)=>{
    return <li key={index}>{item.name}</li>
    })}
  </div>
}
export default connect(
  state=>({list:state.index.list}),
  {getIndexList}
)(Index)