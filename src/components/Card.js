/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '93%',
  backgroundColor: 'transparent',
  border: '1px',
  borderRadius: '25px',
  boxShadow: 24,
  overflowY: 'scroll',
  outline: 'none'
}

function Card(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <a
      href="#"
      class="block m-4 no-underline rounded-lg group relative border-4"
    >
      <img
        alt="Art"
        src={props.image}
        class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
        onClick={handleOpen}
      />
      <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-700 opacity-0 duration-500">
        <Modal
          style={{ outline: 'none' }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="focus:outline-none"
        >
          <Box sx={style}>
            <div
              style={{ outline: 'none' }}
              className="w-[100%] container bg-gray-200 border-[16px] rounded-[25px] border-gray-600 py-5 px-5 overflow-y-scroll h-[100%] text-black"
            >
              <h1 class="text-2xl text-center font-bold text-black sm:text-3xl">
                Image Path
              </h1>
              <h1 className="text-center">{props.image.slice(8)}</h1>
              <div className="flex justify-center items-center w-100 h-100">
                <img alt="Art" src={props.image} className="object-contain" />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </a>
  )
}

export default Card
