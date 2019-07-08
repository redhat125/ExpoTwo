import { TEST_DATA_CONST, LOCATION_CONST, VENDOR_CONST, VENDOR_FILTER_CONST } from '../AppContants/constants.js';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetchData from "./sagaworker/fechData.js";
import fetchCurrentLocation from './sagaworker/locData.js';
import {fetchVendorsList, filterVendorsList} from './sagaworker/vendorData.js';

function* dataSaga () {
  yield takeEvery(TEST_DATA_CONST.FETCHING_DATA, fetchData);
  yield takeLatest(LOCATION_CONST.FETCHING_LOC, fetchCurrentLocation);

  yield takeLatest(VENDOR_CONST.FETCHING_VENDOR_LIST, fetchVendorsList);

  yield takeEvery(VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST, filterVendorsList);
}

export default dataSaga;