import React from 'react'
import FolderName from './components/FolderName'
import ThreeImg from './components/ThreeImg'
import { spawn } from 'child_process'

function ThreeImagesPage() {
  const clickHandler = () => {
    console.log('ehhe')
    const ls = spawn('python3', [
      '/Users/abhinav/Desktop/CS-258-Project/react-electron/src/scripts/addFile.py',
      `${10}`,
      `${20}`
    ])
    ls.stdout.setEncoding('utf-8')
    ls.stdout.on('data', data => {
      console.log(`stdout: ${data}`)
    })
  }
  return (
    <div className="h-[100%] text-center">
      <div className="grid grid-cols-3 sticky top-0	w-100 mb-10">
        <FolderName folder="file:////Users/abhinav/Downloads"></FolderName>
        <FolderName folder="file:////Users/abhinav/Downloads"></FolderName>
        <FolderName folder="file:////Users/abhinav/Downloads"></FolderName>
      </div>
      <div className="w-100 flex items-center justify-center">
        <button
          onClick={clickHandler}
          class="block rounded-lg bg-green-600 text-sm px-2 py-2 font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
          type="button"
        >
          Search for Images!!
        </button>
      </div>

      <div className="overflow-y-scroll">
        <ThreeImg></ThreeImg>
        <ThreeImg></ThreeImg>
        <ThreeImg></ThreeImg>
      </div>
    </div>
  )
}

export default ThreeImagesPage
