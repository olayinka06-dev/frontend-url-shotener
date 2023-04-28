import React, { useState } from "react";
import axios from "axios";

function ShortenUrl() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
      );
      setShortUrl(response.data.result.short_link);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
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
      {shortUrl && (
        <div>
          <p>{originalUrl}</p>
          <p>{shortUrl}</p>
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default ShortenUrl;
