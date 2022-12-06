import React from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { loadComments } from "src/store/slices/appSlice";
import styled from "styled-components";

const LoadMoreButton = styled.button`
  display: block;
  width: 100%;
  max-width: 234px;
  margin: 60px auto 0 auto;
  padding: 8px;
  background: #313439;
  border-radius: 4px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  overflow: hidden;
  cursor: pointer;
  transition: background ease-out 0.2s;

  :hover {
    background: #31343975;
  }

  :disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 320px) {
    margin-top: 40px;
  }
`;

const LoadMore: React.FC = () => {
  const dispatch = useAppDispatch();
  const commentsIsLoading = useAppSelector(state => state.app.commentsIsLoading);
  const commentPages = useAppSelector(state => state.app.commentPages);
  const currentPage = useAppSelector(state => state.app.currentPage);
  const commentsError = useAppSelector(state => state.app.commentsError);

  return (
    <React.Fragment>
      {(commentPages === undefined || commentPages !== currentPage) &&
        <LoadMoreButton
          onClick={() => dispatch(loadComments(currentPage ? (currentPage + 1) : 1))}
          disabled={commentsIsLoading}
        >
          {commentsError
            ? 'Error! Try again?'
            : commentsIsLoading ? 'Loading...' : 'Load more'
          }
        </LoadMoreButton>
      }
    </React.Fragment>
  );
};

export default LoadMore;
