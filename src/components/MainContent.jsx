import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'
import AboutContainer from './AboutContainer'

import '../styles/components/mainContent.sass'


const MainContent = () => {
  return (
    <main id="main-content">
    <AboutContainer />
    <TecnologiesContainer />
    <ProjectsContainer />
    
    </main>
  )
}

export default MainContent