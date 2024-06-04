import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding:0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

}



html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  line-height: 1.5;
  color: #121212;
  background-color: #f7f7f7;
  overflow: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input,
button,
select {
  font-size: 1.4rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background-color: white;
  line-height: 1.5;
  margin: 0;
}

input {
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.1);
}

button {
  color: #3992ff;
  font-weight: 500;
}

button:active {
  transform: translateY(0.5px);
}



#error-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}



`;

export default GlobalStyle;
