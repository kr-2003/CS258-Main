import React from 'react'
import FolderName from './components/FolderName'
import TwoImg from './components/TwoImg'
import { spawn } from "child_process";

function TwoImagesPage() {
  return (
    <div className="h-[100%]">
      <div className="grid grid-cols-2 sticky top-0	w-100 mb-10">
        <FolderName folder="file:////Users/abhinav/Downloads"></FolderName>
        <FolderName folder="file:////Users/abhinav/Downloads"></FolderName>
      </div>
      <div className="overflow-y-scroll">
        <TwoImg></TwoImg>
        <TwoImg></TwoImg>
        <TwoImg></TwoImg>
      </div>
    </div>
  )
}

export default TwoImagesPage
