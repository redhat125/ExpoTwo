import { TEST_DATA_CONST } from '../../AppContants/constants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case TEST_DATA_CONST.FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case TEST_DATA_CONST.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case TEST_DATA_CONST.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}