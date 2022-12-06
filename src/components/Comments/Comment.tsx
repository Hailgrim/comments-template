import React from "react";
import styled, { css } from "styled-components";

import Likes from "./Likes";
import DateString from "./Date";
import { IComment } from "src/lib/types";
import { useAppSelector } from "src/store/hooks";

const CommentRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;

  @media screen and (max-width: 320px) {
    margin-top: 24px;
  }
`;

const CommentAvatar = styled.div<{ src?: string; }>`
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: gray;
  background-size: cover;
  margin-right: 20px;
  flex-shrink: 0;

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
  }

  ${props => props.src && css`
    background-image: url(${props.src});
  `}
`;

const CommentText = styled.div`
  overflow: hidden;
  flex: 1;
`;

const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12.5px 0;

  @media screen and (max-width: 320px) {
    margin-top: 1.5px;
    margin-bottom: 9.5px;
  }
`;

const CommentMeta = styled.div`
  margin-right: 10px;
  overflow: hidden;
  flex: 1;
`;

const CommentName = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const CommentMessage = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  @media screen and (max-width: 320px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const CommentSub = styled.div<{ deep?: boolean; }>`
  margin-left: 34px;
  ${props => props.deep && css`
    margin-left: unset;
  `}
`;

const Comment: React.FC<{
  data: IComment;
  sub?: boolean;
}> = ({ data, sub }) => {
  const authors = useAppSelector(state => state.app.authors);
  const author = authors.find(author => author.id === data.author);

  return (
    <React.Fragment>
      <CommentRoot>
        <CommentAvatar src={author?.avatar} />
        <CommentText>
          <CommentTitle>
            <CommentMeta>
              <CommentName title={author?.name}>{author ? author.name : '\0'}</CommentName>
              <DateString date={data.created} />
            </CommentMeta>
            <Likes likes={data.likes} active />
          </CommentTitle>
          <CommentMessage>{data.text}</CommentMessage>
        </CommentText>
      </CommentRoot>
      <CommentSub deep={sub}>
        {data.sub?.map(comment => (
          <Comment key={`comment.${comment.id}`} data={comment} sub />
        ))}
      </CommentSub>
    </React.Fragment>
  );
};

export default Comment;
