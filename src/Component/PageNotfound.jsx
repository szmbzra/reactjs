import React from 'react'
import { Link } from 'react-router-dom'

function PageNotfound() {
  return (
    <div>
      <h1>404page not found sorry</h1>
     <Link to="/">Return Home</Link>
    </div>
  )
}

export default PageNotfound
