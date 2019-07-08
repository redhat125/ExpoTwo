/*
This file is related to all location based api calls
*/

import { Location, Permissions } from 'expo';
import {LOCATION_CONST } from '../../AppContants/constants.js';

export async function getCurrentLocation(){
    let locationData = await Location.getCurrentPositionAsync({});
    let location= {latitude: locationData.coords.latitude,
                    longitude: locationData.coords.longitude,
                    latitudeDelta: LOCATION_CONST.GEO_DELTA.latitudeDelta,
                    longitudeDelta: LOCATION_CONST.GEO_DELTA.longitudeDelta};
    console.log("location from phone: "+ JSON.stringify(location));
    return location;
};

export async function getLocationPermission(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log("location permission " + status);
    if (status !== 'granted') {
        console.log("permission is not granted by the user");
        return false;
    }
    else{
        return true;
    }
}