import React from 'react'
import Card from './Card'

function FourImg(props) {
  return (
    <div className="grid grid-cols-4 w-[100vw]">
      <Card image={`file:///` + props.images[0]}></Card>
      <Card image={`file:///` + props.images[1]}></Card>
      <Card image={`file:///` + props.images[2]}></Card>
      <Card image={`file:///` + props.images[3]}></Card>
    </div>
  )
}

export default FourImg;
