import { LOCATION_CONST } from '../../AppContants/constants.js';
import { put } from 'redux-saga/effects';
import {getCurrentLocation} from '../apicaller/locApis.js';

function* fetchCurrentLocation (action) {
  try {
    const location = yield getCurrentLocation();
    console.log("fetchCurrentLocation success"+ JSON.stringify(location));
    yield put({ type: LOCATION_CONST.FETCHING_LOC_SUCCESS, location });
  } catch (e) {
    console.log("fetchCurrentLocation failed"+ e);
    yield put({ type: LOCATION_CONST.FETCHING_LOC_FAILURE });
  }
}

export default fetchCurrentLocation;