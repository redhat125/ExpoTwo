import { LOCATION_CONST } from '../../AppContants/constants.js';

export function getLocPermission() {
  return {
    type: LOCATION_CONST.LOC_PERMISSION_PENDING
  }
}

export function getCurrentLocation() {
  return {
    type: LOCATION_CONST.FETCHING_LOC
  }
}
