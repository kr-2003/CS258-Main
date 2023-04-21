import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeContext } from './App'
import { motion } from 'framer-motion'
import TextSpan from './components/TextSpan'
const background = {
  Dark: 'bg-gray-900 text-white',
  Light: 'bg-white text-gray-900'
}
function Home() {
  const { paths, setPaths } = useContext(ThemeContext)
  const folderInput = e => {
    console.log('Hello')
    console.log(e)
  }
  // useEffect(() => {
  //   console.log(paths["mode"])
  // })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`sm:px-16 px-6 ${background[paths['mode']]}`}>
        <Navbar />
      </div>
      <section
        class={`text-white bg-gray-900 body-font ${background[paths['mode']]}`}
      >
        <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <motion.div
            initial={{ x: -50, scale: 0.75, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'sprin' }}
            className="main-photo w-full object-cover sm:h-[450px] h-[320px] rounded-tl-[140px] z-[10] mb-10 relative"
          ></motion.div>
          <div class="text-center lg:w-2/3 w-full">
            <h1
              class={`title-font sm:text-5xl text-4xl mb-4 font-medium ${
                background[paths['mode']]
              }`}
            >
              <TextSpan>P</TextSpan>
              <TextSpan>a</TextSpan>
              <TextSpan>i</TextSpan>
              <TextSpan>r</TextSpan>
              <TextSpan>w</TextSpan>
              <TextSpan>i</TextSpan>
              <TextSpan>s</TextSpan>
              <TextSpan>e</TextSpan>
              <TextSpan> </TextSpan>
              <TextSpan>I</TextSpan>
              <TextSpan>m</TextSpan>
              <TextSpan>a</TextSpan>
              <TextSpan>g</TextSpan>
              <TextSpan>e</TextSpan>
              <TextSpan> </TextSpan>
              <TextSpan>V</TextSpan>
              <TextSpan>i</TextSpan>
              <TextSpan>s</TextSpan>
              <TextSpan>u</TextSpan>
              <TextSpan>a</TextSpan>
              <TextSpan>l</TextSpan>
              <TextSpan>i</TextSpan>
              <TextSpan>z</TextSpan>
              <TextSpan>e</TextSpan>
              <TextSpan>r</TextSpan>
            </h1>

            <p
              class={`mb-8 leading-relaxed text-gray-300 ${
                background[paths['mode']]
              }`}
            >
              This is a responsive application that visualizes image pairs from
              multiple folders. The image pairs we refer to are two images with
              the same name but in different folders. Thee application allows
              users to select multiple folders, and it displays all the image
              pairs within those folders. To ensure the application's
              versatility, there is the option to add more than two folders.
            </p>
            <div class="flex justify-center gap-5">
              <Link
                to="/twoimages"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:text-white dark:border-gray-300 dark:hover:bg-cyan-800 border-2  dark:focus:ring-gray-700"
              >
                Two Folders
              </Link>

              <Link
                to="/threeimages"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:text-white dark:border-gray-300 dark:hover:bg-cyan-800 border-2 dark:focus:ring-gray-700"
              >
                Three Folders
              </Link>
              <Link
                to="/fourimages"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:text-white dark:border-gray-300 dark:hover:bg-cyan-800 border-2  dark:focus:ring-gray-700"
              >
                Four Folders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
    // <div className="h-[100vh]">
    //   <h1 onClick={folderInput} className="text-2xl underline">
    //     Hello world!
    //   </h1>

    // </div>
  )
}

export default Home
