/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useMemo, useContext } from 'react'
import useCopy from 'use-copy'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { FilesViewer } from '../FilesViewer'
import { ThemeContext } from '../App'

const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require('@electron/remote')

const formatSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: '60%',
  backgroundColor: 'transparent',
  border: '1px',
  borderRadius: '25px',
  boxShadow: 24,
  overflowY: 'scroll',
  outline: 'none'
}

function FolderName(props) {
  const { paths, setPaths } = useContext(ThemeContext)
  const [path, setPath] = useState('/Users')

  const files = useMemo(
    () =>
      fs
        .readdirSync(path)
        .map(file => {
          const stats = fs.statSync(pathModule.join(path, file))
          return {
            name: file,
            size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
            directory: stats.isDirectory()
          }
        })
        .sort((a, b) => {
          if (a.directory === b.directory) {
            return a.name.localeCompare(b.name)
          }
          return a.directory ? -1 : 1
        }),
    [path]
  )

  const onBack = () => {
    setPath(pathModule.dirname(path))
    setPaths({ ...paths, [props.folder]: pathModule.dirname(path) })
  }
  const onOpen = folder => {
    setPath(pathModule.join(path, folder))
    setPaths({ ...paths, [props.folder]: pathModule.join(path, folder) })
  }

  const [searchString, setSearchString] = useState('')
  const filteredFiles = files.filter(s => s.name.startsWith(searchString))
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [copied, copy, setCopied] = useCopy(path)
  const copyText = () => {
    copy()
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <header
      aria-label="Page Header"
      class="sticky top-0 block bg-gray-700 border-gray-200 border-8 rounded-[25px] z-[999]"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between md:flex md:justify-between md:items-center">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-white sm:text-3xl">
              Folder Path
            </h1>
            <h6 class="mt-1.5 flex text-sm flex-wrap w-10 text-gray-300">
              {paths[props.folder]}
            </h6>
          </div>

          <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              onClick={copyText}
              class="block text-black border-white border-2 rounded-lg bg-gray-200 text-sm px-3.5 py-2.5 font-medium transition hover:bg-emerald-400 hover:border-white focus:outline-none focus:ring"
              type="button"
            >
              <span class="text-sm font-medium"> {copied && `Copied`} </span>
              <span class="text-sm font-medium"> {!copied && `Copy`} </span>
            </button>

            <button
              onClick={handleOpen}
              class="block rounded-lg bg-cyan-600 text-sm border-white border-2 px-3.5 py-2.5 font-medium text-white transition hover:bg-cyan-700 focus:outline-none focus:ring"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
      </div>
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
            className="container bg-gray-200 border-[16px] rounded-[25px] border-gray-600 py-5 px-5 overflow-y-scroll h-[100%] text-black"
          >
            <div className="pb-2 w-full mx-auto flex justify-between gap-8">
              <div
                className="cross-btn h-7 w-7 absolute top-5 right-5 hover:cursor-pointer"
                onClick={handleClose}
              ></div>

              <h2 className="font-semibold text-[18px] leading-[30px] text-gray-900">
                Browse Folders
              </h2>
            </div>
            <h4>{path}</h4>
            <FilesViewer
              files={filteredFiles}
              onBack={onBack}
              onOpen={onOpen}
              onClickFile={()=>{}}
            />
          </div>
        </Box>
      </Modal>
    </header>
  )
}

export default FolderName
