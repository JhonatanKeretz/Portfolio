import React from 'react'
import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import Avatar from '../img/jhona.jpg'


import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Jhonatan Keretz" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar