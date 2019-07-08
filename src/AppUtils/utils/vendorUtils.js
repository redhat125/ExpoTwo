
export function filterVendorOnId(completeVendorList, categoryId){
    //console.log("method completeVendorList:"+ JSON.stringify(completeVendorList)+ " categoryId:"+categoryId);
    if(categoryId != 0){
        var filteredList =  completeVendorList.filter(function(vendor) {
            return vendor.categoryId == categoryId;
        });
        return filteredList;
    }
    return completeVendorList;
}


// { 
//     id: 12345,
//     name: 'Ram',
//     shop_name: 'paper wala',
//     shop_description: 'about vendor buying paper',
//     categoryId: 'paper',
//     mode: 'cycle',
//     location:{
//         latitude: 12.9874491,
//         longitude: 77.6895362
//     },
//     rating: 4.36,
//     contact: 123456777
// }