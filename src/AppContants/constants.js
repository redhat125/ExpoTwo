import { Dimensions, Animated } from "react-native";

//----------------------
//demo data related
//----------------------
export const TEST_DATA_CONST = {
    FETCHING_DATA : 'FETCHING_DATA',
    FETCHING_DATA_SUCCESS : 'FETCHING_DATA_SUCCESS',
    FETCHING_DATA_FAILURE : 'FETCHING_DATA_FAILURE'
}

//----------------------
//location related
//----------------------
export const LOCATION_CONST = {
    GEO_DELTA : {
        latitudeDelta: 0.01864195044303443,
        longitudeDelta: 0.010142817690068
    },
    FETCHING_LOC : 'FETCHING_LOC',
    FETCHING_LOC_SUCCESS : 'FETCHING_LOC_SUCCESS',
    FETCHING_LOC_FAILURE : 'FETCHING_LOC_FAILURE',

    LOC_PERMISSION_PENDING : 'LOC_PERMISSION_PENDING',
    LOC_PERMISSION_GRANTED : 'LOC_PERMISSION_GRANTED',
    LOC_PERMISSION_DENIED : 'LOC_PERMISSION_DENIED'
}

//----------------------
//vendor related
//----------------------
export const VENDOR_CONST = {
    FETCHING_VENDOR_LIST : 'FETCHING_VENDOR_LIST',
    FETCHING_VENDOR_LIST_SUCCESS : 'FETCHING_VENDOR_LIST_SUCCESS',
    FETCHING_VENDOR_LIST_FAILURE : 'FETCHING_VENDOR_LIST_FAILURE'
}

//----------------------
//vendor filter related
//----------------------
export const VENDOR_FILTER_CONST = {
    FILTERING_VENDOR_LIST : 'FILTERING_VENDOR_LIST',
    FILTERING_VENDOR_LIST_SUCCESS : 'FILTERING_VENDOR_LIST_SUCCESS',
    FILTERING_VENDOR_LIST_FAILURE : 'FILTERING_VENDOR_LIST_FAILURE'
}



export const SCREEN_INFO = {
    HEIGHT : Dimensions.get("window").height,
    WIDTH :  Dimensions.get("window").width,
    CARD_HEIGHT : (Dimensions.get("window").height / 4),
    CARD_WIDTH : (Dimensions.get("window").width - 30)
}

export class GlobalVars{
    static MapAnimation = new Animated.Value(0);
    static vendorIndex = 0;
    static mapRef;
}

export class GlobalVars1{
    static MapAnimation = new Animated.Value(0);
    static vendorIndex = 0;
    static mapRef;
}