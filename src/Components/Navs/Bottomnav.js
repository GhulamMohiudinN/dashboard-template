import React from 'react'
import home from '../../assets/Images/Bottom-Nav/home.svg'
import network from '../../assets/Images/Bottom-Nav/network.svg'
import create from '../../assets/Images/Bottom-Nav/create.svg'
import search from '../../assets/Images/Bottom-Nav/search.svg'
import menu from '../../assets/Images/Bottom-Nav/menu.svg'

const Bottomnav = () => {
  return (
    <>
        <div className="bottom-nav">
            <div className="element">
              <img src={home} alt="" />
              <a href="#">Home</a>
            </div>
            <div className="element">
              <img src={network} alt="" />
              <a href="#">Network</a>
            </div>
            <div className="element">
              <img src={create} alt="" />
              <a href="#">Create</a>
            </div>
            <div className="element">
              <img src={search} alt="" />
              <a href="#">Search</a>
            </div>
            <div className="element">
              <img src={menu} alt="" />
              <a href="#">Menu</a>
            </div>
        </div>
    </>
  )
}

export default Bottomnav
