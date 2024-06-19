import { createGlobalStyle } from 'styled-components';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Pretendard', sans-serif;
    letter-spacing: -0.75px;
    line-height: 140%;
    max-width: 520px;
    justify-content: center;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto; // 스크롤은 가능하되 스크롤바는 숨김
    scrollbar-width: none; // Firefox에서 스크롤바 숨김
    -ms-overflow-style: none; // IE와 Edge에서 스크롤바 숨김

    &::-webkit-scrollbar {
      display: none; // WebKit (Chrome, Opera, Safari 등)에서 스크롤바 숨김
    }
  }
`;

export default GlobalStyle;
