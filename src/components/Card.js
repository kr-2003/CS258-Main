import React, { useState } from 'react'
import ModalComp from './ModalComp'

function Card(props) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <a
      href="#"
      class="block m-4 no-underline rounded-lg"
      onClick={() => setModalShow(true)}
    >
      <img
        alt="Art"
        src={props.image}
        class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
      />
    </a>
  )
}

export default Card
