import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShortenUrl = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortLink, setShortLink] = useState([]);
    const [error, setError] = useState();
    useEffect(()=> {
        if(originalUrl){
            const base_url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

            axios.get(base_url)
            .then((response)=> {
                setShortLink(response.data.result.short_link)
            })
            .catch(error => {
                setError("Please check your url and try again")
                console.error(error)
            })
        }
    }, [originalUrl])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!originalUrl) {
            setError("Please type in a link")
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                value={originalUrl}
                onChange={(event)=> setOriginalUrl(event.target.value)}
                
                />
                {error && (
                    <p>{error}</p>
                )}
            </div>
            <button type="submit">submit</button>
        </form>
        {
            shortLink && (
                <div>
                    <p>{originalUrl}</p>
                    <p>{shortLink}</p>
                </div>
            ) 
        } 
    </div>
  )
}

export default ShortenUrl