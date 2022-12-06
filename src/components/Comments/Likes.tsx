import React from "react";
import styled, { css } from "styled-components";

import LikesLogo, { SVG } from "../Icons/LikesLogo";
import { ILike } from "src/lib/types";
import { useAppDispatch } from "src/store/hooks";
import { setTotalLikes } from "src/store/slices/appSlice";

const LikesBlock = styled.div<{ active?: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;

  ${props => props.active && css`
    cursor: pointer;
  `}

  & ${SVG} {
    width: 22px;
    height: 22px;
  }

  @media screen and (max-width: 320px) {
    & ${SVG} {
      width: 20px;
      height: 20px;
    }
  }
`;

const LikesText = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
  color: #FFFFFF;

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  ${SVG} + & {
    margin-left: 10px;
  }
`;

const Likes: React.FC<{
  likes?: number;
} & ILike> = ({ likes = 0, active, liked }) => {
  const dispatch = useAppDispatch();
  const [likeStatus, setLikeStatus] = React.useState(!!liked);
  const [likesCounter, setLikesCounter] = React.useState(0);
  React.useEffect(() => setLikesCounter(likes), [likes]);

  const setButtonState = React.useCallback(() => {
    if (active) {
      if (likeStatus) {
        setLikesCounter(likesCounter - 1);
        dispatch(setTotalLikes(-1));
      } else {
        setLikesCounter(likesCounter + 1);
        dispatch(setTotalLikes(1));
      }
      setLikeStatus(!likeStatus);
    }
  }, [active, dispatch, likeStatus, likesCounter]);

  return (
    <LikesBlock
      active={active}
      onClick={() => setButtonState()}
    >
      <LikesLogo active={active} liked={likeStatus} />
      <LikesText>{likesCounter}</LikesText>
    </LikesBlock>
  );
};

export default Likes;
