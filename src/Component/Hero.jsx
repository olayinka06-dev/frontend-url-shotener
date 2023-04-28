import React from 'react';
import styled from 'styled-components';
import Bgdesktop from './images/illustration-working.svg'



const Hero = () => {
  return (
        <Wrapper>
            <div className="container">
                <div className="first">
                    <h1>More than just <br />Shorter Link</h1>
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
    }
    .first{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 100px;
        gap: 30px;
    }
    .first h1{
        font-size: 30px;
    }
    .first p{
        font-size: 18px;
        padding-right: 25%;
    }
    .getstarted{
        color: white;
        background-color: hsl(180, 66%, 49%);
        padding: 8px 20px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
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

  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');  */

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
    .first p{
        padding: 0;
    }

  }

`
export default Hero;