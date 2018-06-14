import React from "react"
import Link from 'gatsby-link'

export default () => <div>
  <h1 style={{color: `red`}}>Hello gatsby</h1>
  <p>What a great static site generator</p>
  <img src='https://source.unsplash.com/random/400x200' alt='some random image from unsplash'/>
  <Link to="/page-2">Visit page 2</Link>
  <Link to="/counter">Counter</Link>
</div>
