import React from 'react';
import '../hero page/Hero.jsx';

import Logo from "../images/logo.svg";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Nav = () => {



    const handleChange = () => {
      var mobile = document.querySelector('.nav-mobile');
      mobile.classList.toggle('mobile-toggler');
  
      var first = document.querySelector('.first-line');
      var second = document.querySelector('.second-line');
      var third = document.querySelector('.third-line');
  
      first.classList.toggle('firstr');
      third.classList.toggle('thirdr');
      second.classList.toggle('secondr');
  
    }



    return(
        <Wrapper>
            <nav>
            <img src={Logo} alt="" />
            <ul className='nav-desktop1'>
                <li className='nav-link'><Link to={"/features"}>Features</Link></li>
                <li className='nav-link'><Link to={"/pricing"}>Pricing</Link></li>
                <li className='nav-link'><Link to={"/resources"}>Resources</Link></li>
            </ul>
            <ul className='nav-desktop2'>
                <Link to={'/login'}><li className='nav-link'>Login</li></Link>
                <Link to={'/signup'}><li className='nav-link signup'>Sign Up</li></Link>

            </ul>
            <button className='toggle' onClick={handleChange}>
              <div className="first-line"></div>
              <div className="second-line"></div>
              <div className="third-line"></div>
            </button> 
        </nav> 
        <div className="align">
          <ul className='nav-mobile'>
            <div className="group">
              <li className='nav-link'><Link to={"/features"}>Features</Link></li>
              <li className='nav-link'><Link to={"/pricing"}>Pricing</Link></li>
              <li className='nav-link'><Link to={"/resources"}>Resources</Link></li>
            </div>
            <Link to={'/login'}><li className='nav-link login'>Login</li></Link>
            <Link to={'/signup'}><li className='nav-link signup'>Sign Up</li></Link>
          </ul>
        </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
  nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 15vh;
    align-items: center;
    transition: all 1s ease;
  }
  .nav-desktop1{
    list-style: none;
    margin-right: 20%;
  }
  .nav-desktop2{
    list-style: none;
  }
  .nav-link{
    display: inline-block;
    margin-right: 30px;
    position: relative;

  }
.nav-link::after {
    content: "";
    background-color: hsl(180, 66%, 49%);
    height: 2px;
    left: 0;
    position: absolute;
    top: 110%;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    width: 100%;
}

.nav-link:hover::after {
    background-color: hsl(180, 66%, 49%);
    transform: scaleX(1);
}
.nav-link::before {
    content: "";
    background-color: hsl(180, 66%, 49%);
    height: 2px;
    left: 0;
    position: absolute;
    top: -10%;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    width: 100%;
}

.nav-link:hover::before {
    background-color: hsl(180, 66%, 49%);
    transform: scaleX(1);
}
  .nav-link a{
    text-decoration: none;
    color: hsl(257, 7%, 63%);
  }
  /* .nav-link a:hover{
    color: hsl(260, 8%, 14%);
  } */
  .signup{
    color: white;
    background-color: hsl(180, 66%, 49%);
    padding: 12px 30px;
    border-radius: 20px;
    transition: all 1s ease;
  }
  .signup:hover{
    background-color: rgb(155,227,226);
  }
  .toggle{
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all .2s ease-in-out;
  }
  .toggle div{
      background-color: black;
      height: 2px;
      width: 25px;
      transition: all .4s ease;
  }
  .firstr{
      transform: rotate(-45deg) translate(1px, 11px);
      width: 23px;
      transition: all .2s ease-in-out;

  }
  .thirdr{
      transform: rotate(45deg) translate(1px, -11px);
      width: 23px;
      transition: all .2s ease-in-out;

  }
  .secondr{
      opacity: 0;
  }
  .nav-mobile{
    display: none;
  }


  @media screen and (max-width: 950px) {
    nav{
      justify-content: space-between;
      padding: 0 20px;
    }
    .toggle{
      display: flex;
    }
    [class*="desktop"]{
      display: none;
    }
    .nav-link{
      margin: 0;
    }
    .nav-link a{
      color: white;
    }
    .login{
      color: white;
    }
    .align{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nav-mobile{
      position: absolute;
      top: 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: hsl(255, 11%, 22%);
      width: 80%;
      height: 0vh;
      border-radius: 15px;
      gap: 20px;
      padding: 0 30px;
      overflow: hidden;
      transition: all 1s ease;
      z-index: 1000;
    }
    .mobile-toggler{
      height: 50vh;
    }
    .group{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      border-bottom: 1px solid rgba(236, 233, 233, 0.1);
      padding-bottom: 10px;
    }
  }

`
export default Nav;