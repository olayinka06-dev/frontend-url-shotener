import React from 'react';
import styled from 'styled-components';
import Shorten from './Shorten';

const Statistics = () => {
  return (
    <Wrapper>
        <section>
            <div>
            <Shorten/>
            </div>
            <div className="middle-head">
                <h1>Advanced Statistics</h1>
                <p>Track how your link are performing across the web with our advanced statistic dashboard</p>
            </div>
            <div className="arrange">
                <div className="first">
                    <div className="image"></div>
                    <h1>Brand Recognition</h1>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="first">
                    <div className="image"></div>
                    <h1>Detailed Records</h1>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className="first">
                    <div className="image"></div>
                        <h1>Fully Customizable</h1>
                        <p>
                            Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                        </p>
                    </div>
            </div>
        </section>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    section{
        width: 100%;
        /* min-height: 100vh; */
        background-color: RGB(239 241 247);
    }

    .middle-head{
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;
    }
    .arrange{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-gap: 20px;
        
    }
    .first{
        width: 100%;
        background-color: white;
        height: 30vh;
    }

`

export default Statistics