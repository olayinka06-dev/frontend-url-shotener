import React from 'react'
import styled from 'styled-components';

const ShortenUrl = (props) => {
  return (
    <Wrapper>
        <div className="container">
            <div className='one'>
                <h3>{props.input}</h3>
            </div>
            <div className='two'>
                <h3>{props.short_link}</h3>
                <button>{props.btn}</button>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    width: 100%;
    height: 10vh;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.one{
    width: 100%;
}
.two{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

`

export default ShortenUrl;