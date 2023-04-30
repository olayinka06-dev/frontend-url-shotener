import React, { useState, useEffect } from "react";
import axios from "axios";

function ShortenUrl() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (originalUrl) {
      axios.get(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
        .then(response => {
          setShortUrls(prevShortUrls => [
            ...prevShortUrls,
            { originalUrl, shortUrl: response.data.result.short_link }
          ]);
          setOriginalUrl("");
          setError(null);
        })
        .catch(error => {
          setError("Unable to shorten URL. Please check the URL and try again.");
          console.error(error);
        });
    }
  }, [originalUrl]);

  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!originalUrl) {
      setError("Please enter a valid URL");
      return;
    }
    // set originalUrl state, useEffect will handle the API call
    setOriginalUrl(originalUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL to shorten:
          <input
            type="text"
            value={originalUrl}
            onChange={(event) => setOriginalUrl(event.target.value)}
          />
        </label>
        <button type="submit">Shorten</button>
      </form>
      {error && <p>{error}</p>}
      {shortUrls.map(({ originalUrl, shortUrl }, index) => (
        <div key={index}>
          <p>{originalUrl}</p>
          <p>{shortUrl}</p>
          <button onClick={() => handleCopy(shortUrl)}>Copy</button>
        </div>
      ))}
    </div>
  );
}

export default ShortenUrl;
