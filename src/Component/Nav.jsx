import React from 'react';
import './Hero.jsx';
// import { useState, useEffect } from 'reac

import Logo from "./images/logo.svg";
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
        <ul className='nav-mobile'>
          <div className="group">
            <li className='nav-link'><Link to={"/features"}>Features</Link></li>
            <li className='nav-link'><Link to={"/pricing"}>Pricing</Link></li>
            <li className='nav-link'><Link to={"/resources"}>Resources</Link></li>
          </div>
          <Link to={'/login'}><li className='nav-link login'>Login</li></Link>
          <Link to={'/signup'}><li className='nav-link signup'>Sign Up</li></Link>
        </ul>

        </Wrapper>
    )
}
const Wrapper = styled.section`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap'); */
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
    height: 10vh;
    align-items: center;
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
  }
  .nav-link a{
    text-decoration: none;
    color: hsl(257, 7%, 63%);
  }
  .nav-link a:hover{
    color: hsl(260, 8%, 14%);
  }
  .signup{
    color: white;
    background-color: hsl(180, 66%, 49%);
    padding: 8px 20px;
    border-radius: 20px;
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
    .nav-link a{
      color: white;
    }
    .login{
      color: white;
    }
    .nav-mobile{
      position: fixed;
      top: 15%;
      left: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: hsl(255, 11%, 22%);
      min-width: 80%;
      height: 50vh;
      border-radius: 15px;
      gap: 20px;
      padding: 0 30px;
      transform: translate(-700px);
      overflow: hidden;
      transition: all 1s ease;
      z-index: 1000;
    }
    .mobile-toggler{
      transform: translate(0px);
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