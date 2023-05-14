import React from 'react';
import styled from 'styled-components';
import Bgdesktop from './images/illustration-working.svg'



const Hero = () => {
  return (
        <Wrapper>
            <div className="container">
                <div className="first">
                    <h1>More than just Shorter Link</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <div>
                        <button className='getstarted'>Get Started</button>
                    </div>
                </div>
                <div className="second">
                    <img className='image' src={Bgdesktop} alt="" />
                </div>
            </div>
        </Wrapper>
  )
}


const Wrapper = styled.div `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

    .container{
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      padding-bottom: 80px;
      transition: all 1s ease;

    }
    .first{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 100px;
        gap: 30px;
    }
    .first h1{
        font-size: 48px;
        width: 420px;
        font-weight: 700;
        transition: all 1s ease;
    }
    .first p{
        font-size: 18px;
       width: 450px;
        color: rgb(155,154,159);
        line-height: 25px;
        transition: all 1s ease;
    }
    .getstarted{
        color: white;
        background-color: hsl(180, 66%, 49%);
        padding: 18px 45px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        transition: all 1s ease;
    font-family: 'Poppins', sans-serif;
    }
    .getstarted:hover{
        background-color: rgb(155,227,226);
    }
    .second{
        width: 100%;
        overflow: hidden;
    }
    .second img{
        height: 500px;
        max-height: 100%;
        transform: translateX(100px);

    }


  @media screen and (max-width: 950px) {
    .container{
        flex-direction: column-reverse;
        gap: 50px;
        padding-bottom: 50px;
    }
    .first{
        padding: 0px 60px;
        text-align: center;
    }
    .first h1{
        width: 100%;
    }
    .first p{
        padding: 0;
        width: 100%;
    }

  }

`
export default Hero;