import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


p,
a,
li,
pre,
span,
strong,
button,
::placeholder,
h1,
h2,
h3,
h4,
h5,
h6 {
  transform: skew(-0.1deg);
}

.make-container {
  border-bottom: 1px solid #e9e9e9;
  padding: 2.5rem 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  font-family: "NanumSquare";
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

select,
option {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.border-bottom {
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
}

.container {
  margin: 0 auto;
  width: 73%;
  background-color: #f3f3f38f;
}

`;

export default GlobalStyle;
