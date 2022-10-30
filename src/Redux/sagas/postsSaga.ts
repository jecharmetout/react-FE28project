import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  getPosts,
  getSinglePost,
  searchForPosts,
  setBlogLoading,
  setCardsCount,
  setCardsList,
  setSearchedPosts,
  setSearchPostsLoading,
  setSinglePost,
  setSinglePostLoading
} from "../reducers/postsReducer";
import Api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetPostsPayload } from "../../Utils";


function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  // yield put(setBlogLoading(true));

  const { offset } = action.payload;
  const { data, status, problem } = yield call(Api.getPostsList, offset);
  if (status === 200 && data) {
    yield put(setCardsCount(data.count));
    yield put(setCardsList(data.results));
  } else {
    console.log(problem);
  }
  // yield put(setBlogLoading(false));

}
function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));

  } else {
    console.log(problem);
  }
  yield put(setSinglePostLoading(false));
}


function* getSearchedPostsWorker(action: PayloadAction<string>) {
  yield put(setSearchPostsLoading(true));
  const { data, status, problem } = yield call(
    Api.getSearchedPosts,
    action.payload
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts(data.results));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
  ]);
}
