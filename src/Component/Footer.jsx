import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
        <footer>
            <div className='one'>
                <h1>Shortly</h1>
            </div>
            <div className='two'>
                <span>Features</span>
                <div className="link">
                    <a href={"/"}>Shortening</a>
                    <a href={"/"}>Branded Links</a>
                    <a href={"/"}>Analytics</a>
                </div>
            </div>
            <div className='two'>
                <span>Resources</span>
                    <div className="link">
                        <a href={"/"}>Blog</a>
                        <a href={"/"}>Developers</a>
                        <a href={"/"}>Support</a>
                    </div>
                </div>
            <div className='two'>
                <span>Company</span>
                    <div className="link">
                        <a href={"/"}>About</a>
                        <a href={"/"}>Our Team</a>
                        <a href={"/"}>Careers</a>
                        <a href={"/"}>Contact</a>
                    </div>
                </div>
            <div className='one'>
                {/* <a></a>
                <a></a>
                <a></a>
                <a></a> */}
            </div>
        </footer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    footer{
        min-height: 50vh;
        width: 100%;
        background-color: rgb(35,32,39);
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
        grid-gap: 30px;
        padding: 60px 50px;
        color: white;
        transition: all 1s ease;
    }
    a{
        color: rgb(196,194,199);
        text-decoration: none;
        transition: all 1s ease;
    }
    a:hover{
        color: rgb(79,173,174);
    }
    h1{
        color: white;
    }
    .one{
        width: 100%;
    }
    .two{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .link{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    @media screen and (max-width: 950px) {
        footer{
            grid-template-columns: 1fr;
        }
        .one, .two{
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`
export default Footer;