import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'
const background = {
    Dark: "bg-gray-900 text-white",
    Light: "bg-white text-gray-900"
}
const background2 = {
    Light: "bg-gray-900 text-white",
    Dark: "bg-white text-gray-900"
}
function Navbar() {

    const { paths, setPaths } = useContext(ThemeContext)
    const [buttonText, setButtonText] = useState('Light');
    const clickHandler = () => {
        if (paths["mode"]=="Light") {
            setPaths({...paths, ["mode"]: "Dark"})
            setButtonText('Light')
        } else {
            setPaths({...paths, ["mode"]: "Light"})
            setButtonText('Dark')
        }
    }
    return (
        // <div class={`sticky top-0 2xl:max-w-[1280px] pt-5 pb-3 w-full mx-auto flex justify-between gap-8 ${darkToggle ? "dark" : ""}`}>
        <div className={`sticky top-0 2xl:max-w-[1280px] pt-5 pb-3 w-full mx-auto flex justify-between gap-8 ${background[paths["mode"]]}`}>
            <Link to='/'><button class={`border-2 border border-gray-300 focus:outline-none bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${background2[paths["mode"]]}`}>Back</button></Link>
            <h2 className={`font-extrabold text-[24px] leading-[30px] ${background[paths["mode"]]}`}>Visualizer</h2>
            <button
                onClick={clickHandler}
                class={`border-2 border border-gray-300 focus:outline-none ${background2[paths["mode"]]} focus:ring-4 focus:ring-gray-200 font-medium rounded-[100px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
            >
                {buttonText}
            </button>
        </div>
    )
};

export default Navbar;