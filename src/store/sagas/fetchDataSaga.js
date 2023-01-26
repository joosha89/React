import { fetchDataActions } from './fetchDataSlice';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

const fetch = () => {
  return axios.get(
    "http://localhost:8080"
  );
}

function* fetchData() {
  try {
    //const response: AxiosResponse = yield call(fetch);
    const response = yield call(() => fetch("https://~~~"));
    yield put(fetchDataActions.getDataSuccess(response.data.articles));

  } catch (err) {
    console.error(err);
    yield put(fetchDataActions.getDataError(err));
  }
}

function* watchGetData() {
  yield takeLatest(fetchDataActions.getData, fetchData);
}

export default watchGetData;