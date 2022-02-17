import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Body } from './Body/Body'
import { Footer } from './Body/Footer'
import { Header } from './Body/Header'
import { Navbar } from './Navbar/Navbar'

export const Home = () => {
  return (
    <>
        <Scrollbars 
        style={{height: "100vh"}}
        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        renderView={props => <div {...props} className="view"/>}
        >
          <Navbar />
          <Header />
          <Body />
          <Footer />
        </Scrollbars>
    </>
  )
}
