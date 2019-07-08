export function getVendorsList(currLocation){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("dummy vedndor data "+ JSON.stringify(vendorList));
        return resolve(vendorList);
        }, 3000);
    });
}













const vendorList = [
    { 
        id: 12345,
        name: 'Ram',
        shop_name: 'paper wala',
        shop_description: 'about vendor buying paper',
        categoryId: 1,
        mode: 'cycle',
        location:{
            latitude: 12.987537,
            longitude: 77.685677
        },
        rating: 4.36,
        contact: 123456777
    },
    { 
        id: 123456,
        name: 'Hema',
        shop_name: 'vegetable wala',
        shop_description: 'about vendor selling vegetable',
        categoryId: 2,
        mode: 'walking',
        location:{
            latitude: 12.989338,
            longitude: 77.688951
        },
        rating: 3.36,
        contact: 123456888
    },
    { 
        id: 1234567,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 3,
        mode: 'motor',
        location:{
            latitude: 12.985154,
            longitude: 77.691329
        },
        rating: 5.00,
        contact: 123456999
    },
    { 
        id: 12345545,
        name: 'Ram',
        shop_name: 'paper wala',
        shop_description: 'about vendor buying paper',
        categoryId: 4,
        mode: 'cycle',
        location:{
            latitude: 12.989225,
            longitude: 77.687068
        },
        rating: 4.36,
        contact: 123456777
    },
    { 
        id: 123456454,
        name: 'Hema',
        shop_name: 'vegetable wala',
        shop_description: 'about vendor selling vegetable',
        categoryId: 5,
        mode: 'walking',
        location:{
            latitude: 12.985772,
            longitude: 77.687379
        },
        rating: 3.36,
        contact: 123456888
    },
    { 
        id: 12345673232,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 6,
        mode: 'motor',
        location:{
            latitude: 12.988920,
            longitude: 77.692491
        },
        rating: 5.00,
        contact: 123456999
    },
    { 
        id: 1234567124,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 7   ,
        mode: 'motor',
        location:{
            latitude: 12.985206,
            longitude: 77.693501
        },
        rating: 5.00,
        contact: 123456999
    }
  ];

// 12.987537, 77.685677
// 12.989338, 77.688951
// 12.985154, 77.691329
// 12.989225, 77.687068
// 12.985772, 77.687379
// 12.988920, 77.692491
// 12.985206, 77.693501
