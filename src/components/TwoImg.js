import React from 'react'
import Card from './Card'

function TwoImg(props) {
  return (
    <div className="grid grid-cols-2 w-[100vw]">
      <Card image={`file:///` + props.images[0]}></Card>
      <Card image={`file:///` + props.images[1]}></Card>
    </div>
  )
}

export default TwoImg
