import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, REGISTER_USER } from './app/constants/constants'
import { put, takeEvery } from 'redux-saga/effects'
import { registerUserFirebase, getPeople } from './app/lib/api'

function* fetchData (action) {
  console.log('fetching data saga is called!');
  try {
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* registerUser(action) {
  console.log('regestering user saga is called!', action);
  try {
    const data = yield registerUserFirebase(action.data)
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData)
  yield takeEvery(REGISTER_USER, registerUser)
}

export default dataSaga
