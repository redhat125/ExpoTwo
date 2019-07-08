import { VENDOR_FILTER_CONST } from '../../AppContants/constants.js';

export function getAllVendorList() {
  return {
    type: VENDOR_FILTER_CONST.FILTER_VENDOR_LIST
  }
}
