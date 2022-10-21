import React from 'react';
import logo from '../../Assets/Logo/logo.svg';
import marker from '../../Assets/Images/marker.svg';
import MillionStars from '../../Assets/Images/MillionStars.jpg';
import starbucksReward from '../../Assets/Images/starbucksReward.webp';
import coffee from '../../Assets/Images/coffee.jpg';
import coldcoffee from '../../Assets/Images/coldcoffee.jpg';
import socialfacebook from '../../Assets/Images/socialfacebook.svg';
import socialpinterest from '../../Assets/Images/socialpinterest.svg';
import socialinstagram from '../../Assets/Images/socialinstagram.svg';
import socialspotify from '../../Assets/Images/socialspotify.svg';
import socialtwitter from '../../Assets/Images/socialtwitter.svg';
import socialyoutube from '../../Assets/Images/socialyoutube.svg';


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
            Now you can link your Starbucks Rewards® + Delta SkyMiles account to get:
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
    
    {/*box C*/}
    <div className='box-three'>
    <div className="box-image-three">
        <img src={coffee} alt=""/>
    </div>
    <div className='box-internal-three'>
    <div className="box-text-three">
            <h2 className="text-xl-three">Perfectly pumpkin</h2>
            <p className="text-md-three">
            Savor the season with a Pumpkin Spice Latte spice or Pumpkin Cream Cold Brew
            </p>
            <a href="#" className="btn btn-three">Order now</a>
    </div>
    </div>
    </div>

   {/*box D*/}

  <div className='box-three'>
    <div className='box-internal-three'>
    <div className="box-text-three">
            <h2 className="text-xl-three">Layers of Baked apple yum</h2>
            <p className="text-md-three">
            Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.
            </p>
            <a href="#" className="btn btn-three">Order now</a>
    </div>
    </div>
    <div className="box-image-three">
        <img src={coldcoffee} alt=""/>
    </div>
    </div>

    <div className='bottom-text'>
    <div>
    <p>*NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To enter and for Official Rules, visit </p>
    <p>Entrants can receive a maximum of 2 entries per day.</p>
    </div> 
    <div>
    <p>**Excludes taxes and gratuities. 
    At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit </p>
    <a href="http://deltastarbucks.com/terms">deltastarbucks.com/terms</a>
    </div>
    </div>
    
    {/* footer done */}

    <footer>
        <div className="footer-container">
            <div className="social">
                <a href="https://spotify.com">
                    <img src={socialspotify} alt="" />
                  </a>
                  <a href="https://facebook.com">
                    <img src={socialfacebook} alt="" />
                  </a>
                  <a href="https://pinterest.com">
                    <img src={socialpinterest} alt="" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={socialinstagram} alt="" />
                  </a>
                  <a href="https://youtube.com">
                    <img src={socialyoutube} alt="" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={socialtwitter} alt="" />
                  </a>
            </div>
            <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>

    </div>
    )
}
