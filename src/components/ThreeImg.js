import React from 'react'
import Card from './Card'

function ThreeImg(props) {
  return (
    <div className="grid grid-cols-3 w-[100vw]">
      <Card image={`file:///` + props.images[0]}></Card>
      <Card image={`file:///` + props.images[1]}></Card>
      <Card image={`file:///` + props.images[2]}></Card>
    </div>
  )
}

export default ThreeImg
