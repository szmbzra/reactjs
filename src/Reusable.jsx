import React from 'react'

export default function Reusable({items}) {
  return (
    <ul>
        {items.map((item,index)=>
            <li key={index}>{item}</li>
        )}
    </ul>
  )
}
