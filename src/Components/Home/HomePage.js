import React from 'react';
import logo from '../../Assets/Logo/logo.svg';
import marker from '../../Assets/Images/marker.svg';
import MillionStars from '../../Assets/Images/MillionStars.jpg';
import starbucksReward from '../../Assets/Images/starbucksReward.webp';

export default function HomePage(){
    return(
        <div>
<nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <a href="index.html">
                    <img src={logo} alt="Starbucks"/>
                </a>
            </div>


            <ul className="navbar-nav-left">
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Rewards</a>
                </li>
                <li>
                    <a href="#">Gift Cards</a>
                </li>
            </ul>

            <ul className="navbar-nav-right">
                <li>
                    <a href="#">
                        <img src={marker} alt=""/>
                        <span>Find a store</span>
                    </a>
                </li>
                <li><button className="btn btn-dark-outline">Sign in</button></li>
                <li><button className="btn btn-dark">Join Now</button></li>
            </ul>

            {/* Hamburger Menu */}
            <button type="button" className="hamburger" id="menu-btn">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
        </div>
    </nav>
   
    {/*box A*/}
     
    <div className='box'>
    <div className="box-image">
        <img src={MillionStars} alt=""/>
    </div>
    <div className='box-internal'>
    <div className="box-text">
            <h2 className="text-xl">Win a thousand Stars</h2>
            <p className="text-md">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*
            </p>
            <a href="#" className="btn btn-light-outline">Play to win</a>
    </div>
    </div>
    </div>

    {/*box B*/}

    <div className='box'>
    <div className='box-internal'>
    <div className="box-text">
            <h2 className="text-xl"> A new way to earn sips and trips </h2>
            <p className="text-md">
            Now you can link your Starbucks Rewards + Delta SkyMiles account to get:
            </p>
            <ul style={{listStyleType:'circle'}}>
            <li>
                150 Stars+500 miles when you link before 12/31
            </li>
            <li>
                Double Stars on Delta travel days
            </li>
            <li>
            1 mile per $1 spent at Starbucks(excludes tax and gratuities)**
            </li>
            </ul>
          <a href="#" className="btn btn-light-outline">Link Account</a>
    </div>
    </div>
    <div className="box-image">
        <img src={starbucksReward} alt=""/>
    </div>
    </div>
    
    </div>
    )
}
