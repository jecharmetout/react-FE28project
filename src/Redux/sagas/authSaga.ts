import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call } from "redux-saga/effects";
import { ActivateUserPayload, RegistrationStatus, UserActionPayload } from "../../Utils/globalTypes";
import { activateUser, createNewUser } from "../reducers/authReducer";
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
function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { params, callback } = action.payload;
  const { status, problem } = yield call(Api.activateNewUser, params);
  if (status === 204) {
    callback(RegistrationStatus.Success);
  } else {
    callback(RegistrationStatus.Failed);
    console.log("Problem activating", problem);
  }
}
export default function* authWatcher() {
  yield all([
    takeLatest(createNewUser, createNewUserWorker),
    takeLatest(activateUser, activateUserWorker),
  ]);
}
