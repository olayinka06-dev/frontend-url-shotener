import React, { useState, useEffect } from "react";
import axios from "axios";

function ShortenUrl() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
        );
        setShortUrls((prevShortUrls) => [
          ...prevShortUrls,
          { originalUrl, shortUrl: response.data.result.short_link },
        ]);
      } catch (error) {
        setError(
          "Unable to fetch data. Please check the URL and try again."
        );
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!originalUrl) {
      setError("Please enter a valid URL");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
      );
      setShortUrls((prevShortUrls) => [
        ...prevShortUrls,
        { originalUrl, shortUrl: response.data.result.short_link }
      ]);
      setOriginalUrl("");
      setError(null);
    } catch (error) {
      setError("Unable to shorten URL. Please check the URL and try again.");
      console.error(error);
    }
  };

  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
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
