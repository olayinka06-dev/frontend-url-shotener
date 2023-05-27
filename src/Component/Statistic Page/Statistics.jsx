import React from 'react';
import styled from 'styled-components';
import Shorten from '../Url Shortener Page/Shorten';
import recignition from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';

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
            <div className="center">
            <div className="arrange">
                <div className="line"></div>
                <div className="first">
                    <div className="image">
                        <img src={recignition} alt={recignition} />
                    </div>
                    <h1>Brand Recognition</h1>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="first one">
                    <div className="image">
                        <img src={records} alt={records} />
                    </div>
                    <h1>Detailed Records</h1>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className="first two">
                    <div className="image">
                        <img src={custom} alt={custom} />
                    </div>
                        <h1>Fully Customizable</h1>
                        <p>
                            Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                        </p>
                    </div>
            </div>
            </div>
        </section>
    </Wrapper>
  )
}
const Wrapper = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    section{
        width: 100%;
        background-color: RGB(239 241 247);
        padding-bottom: 70px;
    }

    .middle-head{
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 50px;
        padding: 0 10px;
    }
    .middle-head h1{
        font-size: 35px;
        font-weight: 800;
    }
    .middle-head p{
        text-align: center;
        margin-top: 20px;
        line-height:20px;
        color: rgb(161,160,166);
        padding-bottom: 4px;
    }
    .center{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .arrange{
        width: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-gap: 20px;
        margin-top: 50px;
        position: relative;
        z-index: 1;
    }
    .line{
        width: 80%;
        position: absolute;
        top: 40%;
        background-color: rgb(43,209,207);
        height: 7px;
        z-index: -1;
    }
    .first{
        width: 100%;
        background-color: white;
        height: 45vh;
        padding: 0 30px;
        border-radius: 5px;
    }
    .first p{
        margin-top: 20px;
        line-height: 30px;
        color: rgb(161,160,166);
    }
    .one{
        margin-top: 50px;
    }
    .two{
        margin-top: 90px;
    }
    img{
        background-color: rgb(58,48,83);
        height: 80px;
        border-radius: 50%;
        padding: 20px;
        position: relative;
        bottom: 35px;
    }

    @media screen and (max-width: 950px) {
        section{
            margin-top: 20px !important;
            padding-bottom: 20px;
        }
        p{
            font-size: 16px;
        }
        .first{
            min-height: 45vh;
        }
        .two{
            margin-top: 50px;
        }
    }

`

export default Statistics