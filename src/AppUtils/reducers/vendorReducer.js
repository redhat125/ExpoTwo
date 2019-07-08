import { VENDOR_CONST, VENDOR_FILTER_CONST } from '../../AppContants/constants.js';

const initialState = {
  isVendorListFetching: false,
  vendorListError: false,
  isVendorListFetched: false,
  vendorList: [],
  filteredVendorList: [],
  categoryId:0
};

export default function vendorReducer (state = initialState, action) {
  switch (action.type) {
    case VENDOR_CONST.FETCHING_VENDOR_LIST:
      return {
        ...state,
        isVendorListFetching: true,
        isVendorListFetched: false
      }
    case VENDOR_CONST.FETCHING_VENDOR_LIST_SUCCESS:
      return {
        ...state,
        isVendorListFetching: false,
        isVendorListFetched: true,
        vendorList: action.vendorList,
        filteredVendorList: action.vendorList
      }
    case VENDOR_CONST.FETCHING_VENDOR_LIST_FAILURE:
      return {
        ...state,
        isVendorListFetching: false,
        vendorListError: true
      }


      case VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST:
        return {
            ...state,
            categoryId: action.categoryId
        }
      case VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST_SUCCESS:
          console.log("filteredVendorList success in reducer "+JSON.stringify(action.filteredVendorList));
        return {
            ...state,
            filteredVendorList: action.filteredVendorList
        }
      case VENDOR_FILTER_CONST.FILTERING_VENDOR_LIST_FAILURE:
        return state;



    default:
      return state
  }
}