import React, { useState, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import bgshorten from '../images/bg-shorten-desktop.svg';

const Shorten = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrls, setShortUrls] = useState([]);
    const [error, setError] = useState(null);
    const inputRef = useRef();
    // const [copy, setcopy] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!originalUrl) {
        setError("Please add a Link");
        inputRef.current.style.borderColor = "red";
        return;
      }
      else{
        inputRef.current.style.borderColor = "black";
      }
        try {

            const shorten_Api = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

            const response = await axios.get(shorten_Api);

            setShortUrls((prevShortUrls) => [
              ...prevShortUrls,
              { originalUrl, shortUrl: response.data.result.full_short_link2 }
            ]);
            setOriginalUrl("");
            setError(null);
          } catch (error) {
            if (error.response) {
                setError("Unable to shorten URL. Please check the URL and try again.")
            }
            else if(error.request) {
                setError("Please Check Your Internet Connection")
            }
            else {
                setError("Something Went Wrong Please try again")
            }
            console.error(error);
          }
    };
  
    const handleCopy = (shortUrl) => {
        setCopiedUrl(shortUrl);
      navigator.clipboard.writeText(shortUrl);
    };

    return (
        <Wrapper>
                <Shortener>
                    <div className="top-shortener">
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                placeholder='Shorten a Link here ...'
                                value={originalUrl}
                                ref={inputRef}
                                onChange={(event) => setOriginalUrl(event.target.value)}
                            />
                            <div className="btn-group">
                                <Button type='submit'>Shorten It</Button>
                            </div>
                        </Form>
                        {error && <div className='error'>
                            <Error>{error}</Error>
                        </div>}
                    </div>
                </Shortener>
                <TodoList className='todo-list'>
                    {shortUrls.map(({ originalUrl, shortUrl }, index) => (
                        <div key={index} className='index'>
                            <p className='ori'>{originalUrl}</p>
                            <div className='align'>
                                <a href={shortUrl}>{shortUrl}</a>
                                <div className='copy'>
                                <button onClick={() => handleCopy(shortUrl)} style={{backgroundColor: copiedUrl === shortUrl ? "rgb(58,48,83)" : "rgb(43,209,209)",}}>
                                    {copiedUrl === shortUrl ? "Copied !" : "Copy"}
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </TodoList>
        </Wrapper>

    )
}

const TodoList = styled.div`
    width: 100%;
    min-height: 3vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 50px !important;
    .index{
        width: 80%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        padding: 10px 15px;
    }
    .align a{
        color: rgb(43,209,209);
        text-decoration: none;
    }
    .align{
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
    }
    button{
        padding: 12px 35px;
        /* background-color: rgb(43,209,209); */
        color: white;
        border-radius: 10px;
        border: none;
        transition: all 1s ease;
        cursor: pointer;
    }
    button:hover{
        background-color: rgb(152,227,228);
    }
    @media screen and (max-width: 950px) {
        margin-top: 0px !important;
        .index{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 10px;
        }
        .align{
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
        }
        .copy, button{
            width: 100%;
        }
        p, a{
            padding: 8px 0;
        }
        .ori{
            width: 100%;
            border-bottom: 1px solid lightgray;
        }
    }
`
const Error =styled.div`
    color: red;
`;
const Input = styled.input`
    width: 100%;
    padding: 20px !important;
    border-radius: 10px;
    font-size: 18px;

`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 950px) {
        flex-direction: column;
        /* padding: 0 30px; */
    }

`;
const Button = styled.button`
    padding: 20px 25px !important;
    color: white;
    background-color:  hsl(180, 66%, 49%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
`;
const Wrapper = styled.div`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`
const Shortener = styled.section`
        
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .top-shortener{
        width: 80%;
        min-height: 25vh;
        position: absolute;
        top: 100%;
        background-color: hsl(255, 11%, 22%);
        background-image: url(${bgshorten});
        background-position: center;
        background-size: cover;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 20px !important;
        gap: 20px;
    }

    .error{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .btn-group{
        width: 20%;
    }

    @media screen and (max-width: 950px) {
        .top-shortener{
            position: relative;
            top: 0;
            flex-direction: column;
            padding: 0 30px;
            top: 125%;
        }
        .btn-group{
            width: 100%;
            padding: 0;
        }
        
    }

`

export default Shorten;