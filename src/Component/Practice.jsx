// import axios from 'axios';
// import React, { useState, useEffect} from 'react'
// import styled from 'styled-components';
// import bgshorten from './images/bg-shorten-desktop.svg'
// const Shorten = () => {
//     const [originalUrl, setOriginalUrl] = useState("");
//     const [shortUrls, setShortUrls] = useState([]);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const storedUrls = localStorage.getItem("shortUrls");
//       if (storedUrls) {
//         setShortUrls(JSON.parse(storedUrls));
//       }
//     }, []);
  
//     useEffect(() => {
//       localStorage.setItem("shortUrls", JSON.stringify(shortUrls));
//     }, [shortUrls]);
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       if (!originalUrl) {
//         setError("Please enter a valid URL");
//         return;
//       }
//       try {
//         const response = await axios.get(
//           `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
//         );
//         setShortUrls((prevShortUrls) => [
//           ...prevShortUrls,
//           { originalUrl, shortUrl: response.data.result.short_link },
//         ]);
//         setOriginalUrl("");
//         setError(null);
//       } catch (error) {
//         setError("Unable to shorten URL. Please check the URL and try again.");
//         console.error(error);
//       }
//     };
  
//     const handleCopy = (shortUrl) => {
//       navigator.clipboard.writeText(shortUrl);
//     };
//     // const inputRef = useRef()
//     // const [shortlink, setShortlink] = useState({});

//     // useEffect(() => {
//     //     const base_url = "https://api.shrtco.de/v2/";
//     //     axios.get(base_url + "shorten?url=")
//     //     .then((response)=> {
//     //         setShortlink(response.data.result)
//     //     })
//     // }, [shortlink])

//     return (
//         <Wrapper>
//             <section>
//                 <div className="short-middle">
//                     <div className="top-shortener">
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 className="userInput"
//                                 value={originalUrl}
//                                 onChange={(event) => setOriginalUrl(event.target.value)}
//                             />
//                             <div className="btn-group">
//                                 <button>Shorten It</button>
//                             </div>
//                         </form>
//                         {error && <p>{error}</p>}
//                         {shortUrls.map(({ originalUrl, shortUrl }, index) => (
//                             <div key={index}>
//                                 <p>{originalUrl}</p>
//                                 <p>{shortUrl}</p>
//                                 <button onClick={() => handleCopy(shortUrl)}>Copy</button>
//                             </div>
//                          ))}
//                         {/* {shortUrl && (
//                             <div className='pop-out'>
//                                 <p>{originalUrl}</p>
//                                 <p>{shortUrl}</p>
//                                 <button onClick={handleCopy}>Copy</button>
//                             </div>
//                         )} */}
//                     </div>  
//                 </div>
//                 <div className="middle-head">
//                     <h1>Advanced Statistics</h1>
//                     <p>Track how your link are performing across the web with our advanced statistic dashboard</p>
//                 </div>
//                 <div className="arrange">
//                     <div className="first">
//                         <div className="image"></div>
//                         <h1>Brand Recognition</h1>
//                         <p>
//                             Boost your brand recognition with each click. Generic links don’t 
//                             mean a thing. Branded links help instil confidence in your content.
//                         </p>
//                     </div>
//                     <div className="first">
//                         <div className="image"></div>
//                         <h1>Detailed Records</h1>
//                         <p>
//                             Gain insights into who is clicking your links. Knowing when and where 
//                             people engage with your content helps inform better decisions.
//                         </p>
//                     </div>
//                     <div className="first">
//                         <div className="image"></div>
//                             <h1>Fully Customizable</h1>
//                             <p>
//                                 Improve brand awareness and content discoverability through customizable 
//                                 links, supercharging audience engagement.
//                             </p>
//                         </div>
//                 </div>

//                 {/* <p>{shortlink.short_link}</p>
//                 <h4>The original link was: {shortlink.original_link}</h4> */}
//             </section>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.section`
        
//     *{
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//     }
//     section{
//         width: 100%;
//         height: 100vh;
//         background-color: RGB(239 241 247);
//     }
//     .short-middle{
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }
//     .top-shortener{
//         width: 70%;
//         height: 20vh;
//         /* margin-bottom: 60px; */
//         position: relative;
//         top: 175%;
//         /* left: 50%;*/
//         background-color: hsl(255, 11%, 22%);
//         background-image: url(${bgshorten});
//         background-position: center;
//         background-size: cover;
//         border-radius: 10px;
//         padding: 0 100px;
//         gap: 20px;
//     }
//     form{
//         width: 100%;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         justify-content: center;
//         gap: 20px;

//     }
//     .userInput{
//         width: 100%;
//         padding: 13px;
//         border-radius: 10px;
//     }
//     .btn-group{
//         width: 20%;
//     }
//     .btn-group button{
//         padding: 13px 25px;
//         color: white;
//         background-color:  hsl(180, 66%, 49%);
//         border: none;
//         border-radius: 10px;
//         cursor: pointer;
//         width: 100%;
//     }
//     .middle-head{
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         text-align: center;
//         /* padding: 0 280px; */
//     }
//     .arrange{
//         display: grid;
//         grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
//         grid-gap: 20px;
//         padding: 0 200px;
//     }
//     .first{
//         width: 100%;
//         background-color: white;
//         height: 30vh;
//     }




//     @media screen and (max-width: 950px) {
//         .top-shortener{
//             flex-direction: column;
//             padding: 0 20px;
//         }
//         form{
//             flex-direction: column;
//         }
//         .btn-group{
//             width: 100%;
//         }
        
//     }
// `

// export default Shorten;