import { all, takeLatest } from "redux-saga/effects";

// ---- AUTH
import { ReducerTypes as UsersTypes } from "./users/reducer";
import { requestUsers, insertOrUpdateUser } from "./users/sagas";

export default function* rootSaga() {
  return yield all([
    /* ---- AUTH ---- */
    takeLatest(UsersTypes.USER_REQUEST, requestUsers),
    takeLatest(UsersTypes.USER_INSERT_OR_UPDATE, insertOrUpdateUser)
  ]);
}
