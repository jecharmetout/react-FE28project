import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call } from "redux-saga/effects";
import { UserActionPayload } from "../../Utils/globalTypes";
import { createNewUser } from "../reducers/authReducer";
import Api from "../api";

function* createNewUserWorker(action: PayloadAction<UserActionPayload>) {
  const { status, problem } = yield call(
    Api.createNewUser,
    action.payload
  );

  if (status === 200) {
    console.log("REGISTERED");
  } else {
    console.log("PROBLEM", problem);
  }

  //   console.log("FROM SAGA", action.payload);
}

export default function* authWatcher() {
  yield all([takeLatest(createNewUser, createNewUserWorker)]);
}
