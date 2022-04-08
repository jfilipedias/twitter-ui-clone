import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    color: var(--white);
  }

  html {
    background: var(--primary);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }
  
  *, button, input {
    border: 0;
    background: none;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  :root {
    --primary: #000;
    --primary-blur: rgba(0, 0, 0, 0.65);
    --secondary: #15181C;
    --search: #202327;
    --white: #eff3f4;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --outline-button: #536471;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #1c9cf3;
    --twitter-hover: #1c8dd0;
    --tweet-hover: #080808;
    --twitter-outline: #8ecdf8;
    --dark-hover: #181919;
    --light-hover: #d7dbdc;
  }
`;
