import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import FolderName from './components/FolderName'
import TwoImg from './components/TwoImg'
import { spawn } from 'child_process'
import { ThemeContext } from './App'
const fs = window.require('fs')
const pathModule = window.require('path')


function TwoImagesPage() {
  const { paths, setPaths } = useContext(ThemeContext)
  const [images, setImages] = useState([])
  var mp = new Map()
  const clickHandler = () => {
    fs.readdirSync(paths['path21']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path21'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path22']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path22'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    let newImages = []
    for (let [key, value] of mp) {
      if (value === 2) {
        newImages.push([
          pathModule.join(paths['path21'], key),
          pathModule.join(paths['path22'], key)
        ])
      }
    }
    setImages(newImages)
  }
  return (<>
    <div className='bg-gray-900'>
    <div className='sm:px-16 px-6'>
      <Navbar />
    </div>
    <div className="h-[100%] bg-gray-900">
      <div className='sticky top-0 bg-gray-900'>
      <div className="grid grid-cols-2 gap-2 m-2 w-100 mb-5">
        <FolderName folder="path21"></FolderName>
        <FolderName folder="path22"></FolderName>
      </div>
      <div className="w-100 flex items-center pb-1 justify-center">
        <button
          onClick={clickHandler}
          class="block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-500 dark:text-white dark:border-gray-300 dark:hover:bg-emerald-700 border-2  dark:focus:ring-gray-700"
          type="button"
        >
          Search for Images
        </button>
      </div>
      </div>
      <div className="overflow-y-scroll">
        {images.map(arr => {
          return <TwoImg images={arr}></TwoImg>
        })}
      </div>
    </div>
    </div>
  </>
  )
}

export default TwoImagesPage
