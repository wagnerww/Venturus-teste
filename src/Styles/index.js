import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    outline:none;
  }

  html{
    font-size:16px;

    @media only screen and (min-width: 280px) and (max-width: 700px) {
      font-size:14px;
    }
  }

  body{
    text-rendering:optimizeLegibility !important;
    --webkit-font-smoothing:antialised !important;
    font-family: 'Roboto', sans-serif;
    font-size:1em;
    background:${Colors.Background.Fundo};
    color:${Colors.Font.Label};

    & * a{
      text-decoration:none;
      color:${Colors.Font.LabelTitle};
      cursor:pointer;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`;

export default GlobalStyle;
