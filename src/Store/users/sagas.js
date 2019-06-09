import { call, put, all } from "redux-saga/effects";
import api from "../../Services/api";
import UsersActions from "../users/reducer";

export function* requestUsers({ name, id }) {
  try {
    const { data } = yield call(
      api.get,
      `/users${name ? `?name_like=${name}` : ""}${id ? `?id=${id}` : ""}`
    );

    const userDetail = yield all(
      data.map(user => {
        return call(details, user);
      })
    );

    yield put(UsersActions.userRequestSuccess(userDetail));
  } catch (error) {}
}

function* details(user) {
  const { id } = user;
  const post = yield call(requestPosts, id);
  const albums = yield call(requestAlbums, id);
  const photos = yield call(requestPhotos, id);
  user.post = yield post;
  user.albums = yield albums;
  user.photos = yield photos;
  return user;
}

function* requestPosts(id) {
  try {
    const posts = yield call(api.get, `/posts?userId=${id}`);

    return posts.data;
  } catch (error) {}
}

function* requestAlbums(id) {
  try {
    const albums = yield call(api.get, `/albums?userId=${id}`);

    return albums.data;
  } catch (error) {}
}

function* requestPhotos(id) {
  try {
    const photos = yield call(api.get, `/albums?photos=${id}`);

    return photos.data;
  } catch (error) {}
}

export function* insertOrUpdateUser({ user }) {
  try {
    if (user.id === 0) {
      const respInsert = yield call(api.post, `/users`, user);

      yield put(UsersActions.userInsert(respInsert.data));
    } else {
      const respUpdate = yield call(api.put, `/users/${user.id}`, user);

      yield put(UsersActions.requestUsers());
    }
  } catch (error) {}
}
