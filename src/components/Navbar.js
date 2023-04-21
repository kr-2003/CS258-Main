import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="2xl:max-w-[1280px] pt-5 pb-3 w-full mx-auto flex justify-between gap-8" >
            <Link to='/'><button class="border-2 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back</button></Link>
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white">Visualizer</h2>
            <button class="border-2 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-[100px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
        </div>
    )
};

export default Navbar;