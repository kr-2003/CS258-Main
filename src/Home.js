import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeContext } from './App'
const background = {
  Dark: "bg-gray-900 text-white",
  Light: "bg-white text-gray-900"
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
    <>
      <div className={`sm:px-16 px-6 ${background[paths["mode"]]}`}>
        <Navbar />
      </div>
      <section class={`text-white bg-gray-900 body-font ${background[paths["mode"]]}`}>
        <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <img src="/cover-2.png" alt="cover" className="w-full object-cover sm:h-[450px] h-[320px] rounded-tl-[140px] z-[10] mb-10 relative"></img>
          {/* <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        /> */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class={`title-font sm:text-5xl text-4xl mb-4 font-medium ${background[paths["mode"]]}`}>
              Pairwise Image Visualizer
            </h1>
            <p class={`mb-8 leading-relaxed text-gray-300 ${background[paths["mode"]]}`}>
              Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
              tousled. Chambray dreamcatcher trust fund, kitsch vice godard
              disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
              Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
              photo booth af fingerstache pitchfork.
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
    </>
    // <div className="h-[100vh]">
    //   <h1 onClick={folderInput} className="text-2xl underline">
    //     Hello world!
    //   </h1>

    // </div>
  )
}

export default Home
