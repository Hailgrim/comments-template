import React from "react";
import styled from "styled-components";

import LoadMore from "./LoadMore";
import Header from "./Header";
import Comment from "./Comment";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { countCommentsAndLikes, loadAuthors, loadComments, setAppInitStatus } from "src/store/slices/appSlice";

const CommentsRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 32px 24px;
  max-width: 610px;
`;

const Comments: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalComments = useAppSelector(state => state.app.totalComments);
  const totalLikes = useAppSelector(state => state.app.totalLikes);
  const comments = useAppSelector(state => state.app.comments);
  const appInitialized = useAppSelector(state => state.app.appInitialized);

  React.useEffect(() => {
    if (appInitialized === false) {
      dispatch(setAppInitStatus(true));
      dispatch(countCommentsAndLikes());
      dispatch(loadAuthors());
      dispatch(loadComments(1));
    }
  }, [appInitialized, dispatch]);

  return (
    <CommentsRoot>
      <Header comments={totalComments} likes={totalLikes} />
      {comments.map(comment => (
        <Comment
          key={`comment.${comment.id}`}
          data={comment}
        />
      ))}
      <LoadMore />
    </CommentsRoot>
  );
};

export default Comments;
