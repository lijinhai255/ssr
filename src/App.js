import React, { useState } from 'react'
import {Route} from "react-router-dom"
import Index from "./router/index"
import About from "./router/about"

export default(
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
  </div>
)
