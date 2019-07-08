import { VENDOR_CONST, VENDOR_FILTER_CONST } from '../../AppContants/constants.js';
import { put } from 'redux-saga/effects';
import {getVendorsList} from '../apicaller/vendorApis.js';
import {filterVendorOnId} from '../utils/vendorUtils.js'

export function* fetchVendorsList (action) {
  try {
    const vendorList = yield getVendorsList();
    console.log("fetchVendorsList success "+ JSON.stringify(vendorList));
    yield put({ type: VENDOR_CONST.FETCHING_VENDOR_LIST_SUCCESS, vendorList });
  } catch (e) {
    console.log("fetchVendorsList failed"+ e);
    yield put({ type: VENDOR_CONST.FETCHING_VENDOR_LIST_FAILURE });
  }
}

export function* filterVendorsList (action) {
    try {
      console.log("filterVendorsList success "+ JSON.stringify(action));
      const filteredVendorList = filterVendorOnId(action.completeVendorList, action.categoryId);
      const categoryId = action.categoryId;
      //console.log("filterVendorOnId success "+ JSON.stringify(filteredVendorList));
      yield put({ type: VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST_SUCCESS, filteredVendorList, categoryId} );
    } catch (e) {
      console.log("fetchVendorsList failed"+ e);
      yield put({ type: VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST_FAILURE });
    }
  }