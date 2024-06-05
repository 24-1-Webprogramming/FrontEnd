import { createGlobalStyle } from 'styled-components';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard', sans-serif;
    letter-spacing: -0.75px;
    line-height: 140%;
  }
`;

export default GlobalStyle;
