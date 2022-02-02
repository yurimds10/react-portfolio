import { createGlobalStyle } from "styled-components";
import {
  header_height,
  body_font,
  normal_font_size,
  body_color,
  text_color,
  title_color,
  font_semi_bold,

  first_color,
  first_color_alt,
} from "./Variables";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 ${header_height} 0;
    font-family: ${body_font}, sans-serif;
    font-size: ${normal_font_size};
    background-color: ${body_color};
    color: ${text_color};
  }

  h1, h2, h3, h4 {
    color: ${title_color};
    font-weight: ${font_semi_bold};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: .60rem;
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${first_color};
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${first_color_alt};
  }
`;