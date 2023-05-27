import React from 'react'
import styled from 'styled-components';
import boost from '../images/bg-boost-desktop.svg'

const Boost = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Boost Your Links Today</h1>
        <button>Get Started</button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  background-image: url(${boost});
  background-size: cover;
  background-repeat: no-repeat;
  height: 45vh;
  width: 100%;
  background-color: rgb(58,48,83);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container{
    text-align: center;
  }
  h1{
    color: white;
    font-size: 49px;
  }
  button{
    color: white;
    background-color: hsl(180, 66%, 49%);
    padding: 18px 50px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    transition: all 1s ease;
    margin-top: 30px;

  }
  button:hover{
    background-color: rgb(155,227,226);
  }

  @media screen and (max-width: 950px) {
    h1{
      font-size: 28px;
    }
  }

`
export default Boost;