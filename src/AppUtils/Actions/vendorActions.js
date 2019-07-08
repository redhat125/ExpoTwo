import { VENDOR_CONST, VENDOR_FILTER_CONST } from '../../AppContants/constants.js';

export function getAllVendorList() {
  return {
    type: VENDOR_CONST.FETCHING_VENDOR_LIST
  }
}

export function getFilteredVendorList(completeVendorList, categoryId) {
    return {
      type: VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST,
      categoryId,
      completeVendorList
    }
  }