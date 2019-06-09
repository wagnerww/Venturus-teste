import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  userRequest: ["name", "id"],
  userRequestSuccess: ["data"],
  userSetUpdate: ["user"],
  userInsertOrUpdate: ["user"],
  userInsert: ["user"]
  // actionType: ['dataPassed'],
});

export const ReducerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  isLoading: false,
  userUpdate: {}
});

/* Reducers */
export const requestUsers = state => state.merge({ isLoading: true });
export const requestSuccess = (state, { data }) =>
  state.merge({ data, isLoading: false });
export const userSetUpdate = (state, { user }) =>
  state.merge({ userUpdate: user });
export const insertUser = (state, { user }) =>
  state.merge({ data: [user, ...state.data] });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: requestUsers,
  [Types.USER_REQUEST_SUCCESS]: requestSuccess,
  [Types.USER_SET_UPDATE]: userSetUpdate,
  [Types.USER_INSERT]: insertUser
});
