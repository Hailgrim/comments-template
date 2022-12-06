import React from "react";
import styled from "styled-components";
import Likes from "./Likes";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 8px;
  border-bottom: 0.2px solid #767676;
`;

const HeaderText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

const Header: React.FC<{
  comments?: number;
  likes?: number;
}> = ({ comments = 0, likes = 0 }) => {
  return (
    <HeaderRow>
      <HeaderText>{`${comments} comments`}</HeaderText>
      <Likes likes={likes} />
    </HeaderRow>
  );
};

export default Header;
