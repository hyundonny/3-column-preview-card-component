import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --orange: hsl(31, 77%, 52%);
    --dark-cyan: hsl(184, 100%, 22%);
    --darker-cyan: hsl(179, 100%, 13%);
    --transparent-white: hsla(0, 0%, 100%, 0.75);
    --light-gray: hsl(0, 0%, 95%);

    font-size: 15px;
  }

  *,
  *::before,
  *::after {
	  box-sizing: inherit;
	  margin: 0;
	  padding: 0;
  }

  html {
    height: 100%;
	  box-sizing: border-box;
  }

  body {
    padding: 4rem 0;
  }
`;

export default GlobalStyle;
