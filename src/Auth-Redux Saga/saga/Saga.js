import { all } from 'redux-saga/effects';
import userSaga from '../Actions/Saga';
import authSaga from '../LoginAction/LoginSaga';

function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
  ]);
}
export default rootSaga;