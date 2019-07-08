import { TEST_DATA_CONST } from '../../AppContants/constants.js';
import { put } from 'redux-saga/effects';
import getPeople from '../apicaller/api.js';

function* fetchData (action) {
  try {
    const data = yield getPeople()
    yield put({ type: TEST_DATA_CONST.FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: TEST_DATA_CONST.FETCHING_DATA_FAILURE })
  }
}

export default fetchData;