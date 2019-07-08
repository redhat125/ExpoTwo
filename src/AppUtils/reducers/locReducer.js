import { LOCATION_CONST } from '../../AppContants/constants.js';

const initialState = {
  isLocFetching: true,
  locError: false,
  isLocFetched: false,
  mapRef: undefined,
  userLocation: {latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421}
};

export default function locReducer (state = initialState, action) {
  switch (action.type) {
    case LOCATION_CONST.FETCHING_LOC:
      return {
        ...state,
        isLocFetching: true,
        isLocFetched: false
      }
    case LOCATION_CONST.FETCHING_LOC_SUCCESS:
      return {
        ...state,
        isLocFetching: false,
        isLocFetched: true,
        userLocation: action.location
      }
    case LOCATION_CONST.FETCHING_LOC_FAILURE:
      return {
        ...state,
        isLocFetching: false,
        locError: true
      }
    default:
      return state
  }
}






