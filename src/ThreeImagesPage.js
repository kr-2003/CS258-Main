import React, { useContext, useState } from 'react'
import FolderName from './components/FolderName'
import ThreeImg from './components/ThreeImg'
import { spawn } from 'child_process'
import { ThemeContext } from './App'
const fs = window.require('fs')
const pathModule = window.require('path')

function ThreeImagesPage() {
  const { paths, setPaths } = useContext(ThemeContext)
  const [images, setImages] = useState([])
  var mp = new Map()
  const clickHandler = () => {
    fs.readdirSync(paths['path31']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path31'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path32']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path32'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path33']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path33'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    let newImages = []
    for (let [key, value] of mp) {
      if (value === 3) {
        newImages.push([
          pathModule.join(paths['path31'], key),
          pathModule.join(paths['path32'], key),
          pathModule.join(paths['path33'], key)
        ])
      }
    }
    setImages(newImages)
  }
  return (
    <div className="h-[100%] text-center">
      <div className="grid grid-cols-3 sticky top-0	w-100 mb-10">
        <FolderName folder="path31"></FolderName>
        <FolderName folder="path32"></FolderName>
        <FolderName folder="path33"></FolderName>
      </div>
      <div className="w-100 flex sticky top-40 items-center justify-center">
        <button
          onClick={clickHandler}
          class="block rounded-lg bg-green-600 text-sm px-2 py-2 font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
          type="button"
        >
          Search for Images!!
        </button>
      </div>
      <div className="overflow-y-scroll">
        {images.map(arr => {
          return <ThreeImg images={arr}></ThreeImg>
        })}
      </div>
    </div>
  )
}

export default ThreeImagesPage
