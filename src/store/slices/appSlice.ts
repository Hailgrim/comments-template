import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

import getCommentsRequest from "src/api/comments/getCommentsRequest";
import { commentsPage1, commentsPage2, commentsPage3 } from "src/data/comments";
import { IAuthor, IComment, ICommentsResponse } from "src/lib/types";

const appSliceName = "app";

export const countCommentsAndLikes = createAsyncThunk<{ comments: number; likes: number; }>(
  `${appSliceName}/countCommentsAndLikes`,
  async () => {
    return {
      comments:
        commentsPage1.data.length +
        commentsPage2.data.length +
        commentsPage3.data.length,
      likes:
        commentsPage1.data.reduce((accumulator, value) => accumulator + value.likes, 0) +
        commentsPage2.data.reduce((accumulator, value) => accumulator + value.likes, 0) +
        commentsPage3.data.reduce((accumulator, value) => accumulator + value.likes, 0)
    };
  }
);

export const loadAuthors = createAsyncThunk<IAuthor[]>(
  `${appSliceName}/loadAuthors`,
  async () => {
    return await getAuthorsRequest();
  }
);

export const loadComments = createAsyncThunk<ICommentsResponse, number>(
  `${appSliceName}/loadComments`,
  async (page) => {
    return await getCommentsRequest(page);
  }
);

const initialState = {
  appInitialized: false,

  totalComments: undefined as number | undefined,
  totalLikes: undefined as number | undefined,
  totalIsLoading: false,

  authors: [] as IAuthor[],
  authorsIsLoading: false,

  comments: [] as IComment[],
  commentsError: undefined as any,
  commentsIsLoading: false,
  commentPages: undefined as number | undefined,
  currentPage: undefined as number | undefined
};

export const appSlice = createSlice({
  name: appSliceName,
  initialState: initialState,
  reducers: {

    setAppInitStatus: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.appInitialized = action.payload;
      }
    },

    setTotalLikes: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        if (state.totalLikes) {
          state.totalLikes = state.totalLikes + action.payload;
        } else {
          state.totalLikes = 0 + action.payload;
        }
      }
    }

  },
  extraReducers: builder => {



    builder.addCase(countCommentsAndLikes.pending, (state) => {
      state.totalIsLoading = true;
    });

    builder.addCase(countCommentsAndLikes.fulfilled, (state, action) => {
      state.totalIsLoading = false;
      state.totalComments = action.payload.comments;
      state.totalLikes = action.payload.likes;
    });

    builder.addCase(countCommentsAndLikes.rejected, (state, action) => {
      state.totalIsLoading = false;
      console.log(action.error);
    });



    builder.addCase(loadAuthors.pending, (state) => {
      state.authorsIsLoading = true;
    });

    builder.addCase(loadAuthors.fulfilled, (state, action) => {
      state.authorsIsLoading = false;
      state.authors = action.payload;
    });

    builder.addCase(loadAuthors.rejected, (state, action) => {
      state.authorsIsLoading = false;
      console.log(action.error);
    });



    builder.addCase(loadComments.pending, (state) => {
      state.commentsIsLoading = true;
      state.commentsError = undefined;
    });

    builder.addCase(loadComments.fulfilled, (state, action) => {
      state.commentsIsLoading = false;
      if (action.payload.data) {

        const tempComments = {} as { [key: number]: any };
        for (let comment of action.payload.data) {
          tempComments[comment.id] = comment;
        }
        for (let comment of Object.values(tempComments)) {
          if (comment.parent) {
            if (tempComments[comment.parent].sub) {
              tempComments[comment.parent].sub.push(comment);
            } else {
              tempComments[comment.parent].sub = [comment];
            }
          }
        }
        const finalComments = Object.values(tempComments).filter(value => !value.parent);

        action.meta.arg === 1
          ? state.comments = finalComments
          : state.comments.push(...finalComments);

      }
      if (action.payload.pagination.total_pages) {
        state.commentPages = action.payload.pagination.total_pages;
      }
      if (action.payload.pagination.page) {
        state.currentPage = action.payload.pagination.page;
      }
    });

    builder.addCase(loadComments.rejected, (state, action) => {
      state.commentsIsLoading = false;
      state.commentsError = action.error;
    });



  }
});

export const {
  setAppInitStatus,
  setTotalLikes
} = appSlice.actions;
export default appSlice.reducer;
