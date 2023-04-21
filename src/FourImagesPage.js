import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import FolderName from './components/FolderName'
import FourImg from './components/FourImg'
import MetricsName from './components/MetricsName'
import Papa from "papaparse";
import { spawn } from 'child_process'
import { ThemeContext } from './App'
const fs = window.require('fs')
const pathModule = window.require('path')

function ThreeImagesPage() {
  const { paths, setPaths } = useContext(ThemeContext)
  const [images, setImages] = useState([])
  var mp = new Map()
  const clickHandler = () => {
    fs.readdirSync(paths['path41']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path41'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path42']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path42'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path43']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path43'], file))
      if (!stats.isDirectory()) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path44']).map(file => {
        const stats = fs.statSync(pathModule.join(paths['path44'], file))
        if (!stats.isDirectory()) {
          if (mp.has(file)) mp.set(file, mp.get(file) + 1)
          else mp.set(file, 1)
        }
      })
    let newImages = []
    if(paths["metrics"]!=''){
      fs.readFile(paths["metrics"], 'utf8', function (err, data) {
          if (err) {
              throw err;
          }
          Papa.parse(data, {
          step: function (row) {
            if(row.data==""){
              setImages(newImages)
              return
            }
            newImages.push([
              pathModule.join(paths['path41'], row.data[0]),
              pathModule.join(paths['path42'], row.data[1]),
              pathModule.join(paths['path43'], row.data[2]),
              pathModule.join(paths['path44'], row.data[3])
            ])
          }
        });
      });
    }else{
      for (let [key, value] of mp) {
        if (value === 4) {
          newImages.push([
            pathModule.join(paths['path41'], key),
            pathModule.join(paths['path42'], key),
            pathModule.join(paths['path43'], key),
            pathModule.join(paths['path44'], key)
          ])
        }
      }
      setImages(newImages)
    }
  }
  return ( 
      <div className='bg-gray-900'>
    <div className='sm:px-16 px-6 bg-gray-900'>
        <Navbar />
      </div>
    <div className="h-[100%] text-center">
      <div className='sticky top-0 bg-gray-900'>
      <div className="grid grid-cols-2 gap-2 m-2 w-100 mb-5">
        <FolderName folder="path41"></FolderName>
        <FolderName folder="path42"></FolderName>
        <FolderName folder="path43"></FolderName>
        <FolderName folder="path44"></FolderName>
      </div>
      <div className="grid grid-cols-2 gap-2 m-2 w-100 mb-5">
          <div className="w-100 flex items-center pb-1 justify-center">
            <button
              onClick={clickHandler}
              class="block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-500 dark:text-white dark:border-gray-300 dark:hover:bg-emerald-700 border-2  dark:focus:ring-gray-700"
              type="button"
            >
              Search for Images
            </button>
          </div>
          <div className="w-100 flex items-center pb-1 justify-center">
            <MetricsName folder="metrics"></MetricsName>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll">
        {images.map(arr => {
          return <FourImg images={arr}></FourImg>
        })}
      </div>
    </div>
    </div>
  )
}

export default ThreeImagesPage
