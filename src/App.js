import { useState, useMemo, createContext } from 'react'
import { FilesViewer } from './FilesViewer'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import TwoImagesPage from './TwoImagesPage'
import ThreeImagesPage from './ThreeImagesPage'
import FourImagesPage from './FourImagesPage'
import Home from './Home'
export const ThemeContext = createContext()
const { app } = window.require('@electron/remote')

function App() {
  const [paths, setPaths] = useState({
    path21: '/Users',
    path22: '/Users',
    path31: '/Users',
    path32: '/Users',
    path33: '/Users',
    path41: '/Users',
    path42: '/Users',
    path43: '/Users',
    path44: '/Users',
    metrics: '',
    mode: "Dark"
  })
  return (
    <>
      <ThemeContext.Provider
        value={{
          paths,
          setPaths
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/twoimages" element={<TwoImagesPage />} />
            <Route path="/threeimages" element={<ThreeImagesPage />} />
            <Route path="/fourimages" element={<FourImagesPage />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
