import React from "react";
import styled from "styled-components";

import { ILike } from "src/lib/types";

export const SVG = styled.svg`
  width: 20px;
  height: 19px;
  fill: none;
`;

const LikesLogo: React.FC<ILike> = ({ active, liked }) => {
  return (
    <SVG viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
      {liked && <path fillRule="evenodd" clipRule="evenodd" d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z" fill="url(#paint1_linear_204_2)" />}
      <path fillRule="evenodd" clipRule="evenodd" d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z" stroke="#41BB45" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z" stroke="url(#paint0_linear_204_2)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z" stroke="url(#paint1_linear_204_2)" />
      {!active && <path fillRule="evenodd" clipRule="evenodd" d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z" stroke="#8297AB" />}
      <defs>
        <linearGradient id="paint0_linear_204_2" x1="8.28437" y1="-6.85326" x2="23.8758" y2="2.9132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#59D44F" />
          <stop offset="1" stopColor="#36B433" />
        </linearGradient>
        <linearGradient id="paint1_linear_204_2" x1="8.28437" y1="-6.85326" x2="23.8758" y2="2.9132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D44F4F" />
          <stop offset="1" stopColor="#B43333" />
        </linearGradient>
      </defs>
    </SVG>
  );
};

export default LikesLogo;
