import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import FolderName from './components/FolderName'
import MetricsName from './components/MetricsName'
import Papa from 'papaparse'
import TwoImg from './components/TwoImg'
import { spawn } from 'child_process'
import { ThemeContext } from './App'
import { motion } from 'framer-motion'
const fs = window.require('fs')
const pathModule = window.require('path')

const background = {
  Dark: 'bg-gray-900 text-white',
  Light: 'bg-white text-gray-900'
}

function TwoImagesPage() {
  const { paths, setPaths } = useContext(ThemeContext)
  const [images, setImages] = useState([])
  const acceptedImageTypes = ['gif', 'jpeg', 'png', 'jpg', 'svg']
  var mp = new Map()
  const clickHandler = () => {
    fs.readdirSync(paths['path21']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path21'], file))
      const arr = file.split('.').pop()
      if (!stats.isDirectory() && acceptedImageTypes.includes(arr)) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    fs.readdirSync(paths['path22']).map(file => {
      const stats = fs.statSync(pathModule.join(paths['path22'], file))
      const file1 = new File(
        [pathModule.join(paths['path22'], file)],
        pathModule.join(paths['path22'], file)
      )
      const reader = new FileReader()
      console.log(file1)
      const arr = file.split('.').pop()
      if (!stats.isDirectory() && acceptedImageTypes.includes(arr)) {
        if (mp.has(file)) mp.set(file, mp.get(file) + 1)
        else mp.set(file, 1)
      }
    })
    let newImages = []
    if (paths['metrics'] != '') {
      fs.readFile(paths['metrics'], 'utf8', function (err, data) {
        if (err) {
          throw err
        }
        Papa.parse(data, {
          step: function (row) {
            if (row.data == '') {
              setImages(newImages)
              return
            }
            newImages.push([
              pathModule.join(paths['path21'], row.data[0]),
              pathModule.join(paths['path22'], row.data[1])
            ])
          }
        })
      })
    } else {
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
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-h-[100%] overflow-hidden"
      >
        <div
          className={`bg-gray-900 inline-block w-full ${
            background[paths['mode']]
          }`}
        >
          <div className="sm:px-16 px-6">
            <Navbar />
          </div>
          <div className={`bg-gray-900 w-full ${background[paths['mode']]}`}>
            <div className={`bg-gray-900 w-full ${background[paths['mode']]}`}>
              <div className="sticky top-0 grid grid-cols-2 gap-2 m-2 w-100 mb-5">
                <FolderName folder="path21"></FolderName>
                <FolderName folder="path22"></FolderName>
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
          </div>
          <div className="scrollable overflow-y-scroll bg-gray-900">
            {images.map(arr => {
              return <TwoImg images={arr}></TwoImg>
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default TwoImagesPage
