export const categories = [
    {
        id: 1,
        name: 'Ipad Phone & Tablets',
    },
    {
        id: 2,
        name: 'Planer & Virtual',
    },
    {
        id: 3,
        name: 'Wireless & Watches',
    },
    {
        id: 4,
        name: 'Computers Monitor & Laptop',
    },
    {
        id: 5,
        name: 'Exercise Bike & Shaver Clean',
    },
    {
        id: 6,
        name: 'Spinning Reel & Kettle',
    },
    {
        id: 7,
        name: 'Camera Bluetooth & Headset',
    },
];

export const subCategories = [
    {
        id: 1,
        catId: 1,
        name: 'Ipad',
        slug: "ipad"
    },
    {
        id: 2,
        catId: 1,
        name: 'Phone',
        slug: "phone"
    },
    {
        id: 3,
        catId: 1,
        name: 'Tablet',
        slug: "tab"
    },
    {
        id: 4,
        catId: 2,
        name: 'Planer',
        slug: "planer"
    },
    {
        id: 5,
        catId: 2,
        name: 'Virtual',
        slug: 'virtual'
    },
    {
        id: 6,
        catId: 3,
        name: 'Wireless',
        slug: 'wireless'
    },
    {
        id: 7,
        catId: 3,
        name: 'Watches',
        slug: 'watch'
    },
    {
        id: 8,
        catId: 4,
        name: 'Computers',
        slug: 'computer'
    },
    {
        id: 9,
        catId: 4,
        name: 'Monitors',
        slug: 'monitor'
    },
    {
        id: 10,
        catId: 4,
        name: 'Laptops',
        slug: 'laptop'
    },
    {
        id: 11,
        catId: 5,
        name: 'Exercise-Bike',
        slug: 'bluefin'
    },
    {
        id: 12,
        catId: 5,
        name: 'Shaver-Clean',
        slug: 'shaver'
    },
    {
        id: 13,
        catId: 6,
        name: 'Spinning-Reel',
        slug: 'spinning'
    },
    {
        id: 14,
        catId: 6,
        name: 'Kettle',
        slug: 'ketle'
    },
    {
        id: 15,
        catId: 7,
        name: 'Camera',
        slug: 'camera'
    },
    {
        id: 16,
        catId: 7,
        name: 'Bluetooth',
        slug: 'bluetooth'
    },
    {
        id: 17,
        catId: 7,
        name: 'Headset',
        slug: 'headset'
    },
];


export const brands = [
    {
        id:1,
        name: 'Guild',
        slug:'guild'
    },
    {
        id:2,
        name: 'Apple',
        slug:'apple'
    },
    {
        id:3,
        name: 'TECLAST',
        slug:'teclast'
    },
    {
        id:4,
        name: 'Bluefin Fitness',
        slug:'bluefin-fitness'
    },
    {
        id:5,
        name: 'US1984',
        slug:'us1984'
    },
    {
        id:6,
        name: 'ViewSonic',
        slug:'viewsonic'
    },
    {
        id:7,
        name: 'Xiaomi',
        slug:'xiaomi'
    },
    {
        id:8,
        name: 'WM-MSMY',
        slug:'wm-msmy'
    },
    {
        id:9,
        name: 'Tempo',
        slug:'tempo'
    },
    {
        id:10,
        name: 'Stariver',
        slug:'stariver'
    },
    {
        id:11,
        name: 'Braun',
        slug:'braun'
    },
    {
        id:12,
        name: 'STANLEY',
        slug:'stanley'
    },
    {
        id:13,
        name: 'Hious',
        slug:'hious'
    },
    {
        id:14,
        name: 'Microsoft',
        slug:'microsoft'
    },
    {
        id:15,
        name: 'Sennheiser Consumer Audio',
        slug:'sennheiser-consumer-audio'
    },
    {
        id:16,
        name: 'Sony',
        slug:'sony'
    },
    {
        id:17,
        name: 'Aisuo',
        slug:'aisuo'
    },
    {
        id:18,
        name: 'USAOSHOP',
        slug:'usaoshop'
    },
    {
        id:19,
        name: 'Cougar gaming',
        slug:'cougar-gaming'
    },
    {
        id:20,
        name: 'Polaroid',
        slug:'polaroid'
    },
    {
        id:21,
        name: 'ZUMIMALL',
        slug:'zumimall'
    },
    {
        id:22,
        name: 'Beats',
        slug:'beats'
    },
    {
        id:23,
        name: 'HP',
        slug:'hp'
    }
];

export const colorFilter = [
    {
        id:1,
        name:'Green',
        slug:'green',
        colorCode:'008000'
    },
    {
        id:3,
        name:'Orange',
        slug:'orange',
        colorCode:'ffa500'
    },
    {
        id:4,
        name:'Black',
        slug:'black',
        colorCode:'000'
    },
    {
        id:2,
        name:'Red',
        slug:'red',
        colorCode:'ff0000'
    },
    {
        id:5,
        name:'Yellow',
        slug:'yellow',
        colorCode:'ffff00'
    },
    {
        id:6,
        name:'White',
        slug:'white',
        colorCode:'fff'
    },
    {
        id:7,
        name:'Pink',
        slug:'pink',
        colorCode:'ffc0cb'
    },
    {
        id:8,
        name:'Gray',
        slug:'gray',
        colorCode:'808080'
    },
    {
        id:9,
        name:'Blue',
        slug:'blue',
        colorCode:'0000ff'
    }
];


export const priceFilter = [
    {
        id:1,
        minPrice: 10.00,
        max: 49.00
    },
    {
        id:2,
        minPrice: 50.00,
        max: 99.00
    },
    {
        id:3,
        minPrice: 100.00,
        max: 199.00
    },
    {
        id:4,
        max: 200.00,
    }
];


export const subCategoriesFutter = [
    {
        id: 2,
        name: 'Phone & Tablets',
        slug: "phone"
    },
    {
        id: 3,
        name: 'Game & Videos',
        slug: "tab"
    },
    {
        id: 6,
        name: 'Wireless',
        slug: 'wireless'
    },
    {
        id: 7,
        name: 'Sports Watches',
        slug: 'watch'
    },
    {
        id: 16,
        name: 'Bluetooth',
        slug: 'bluetooth'
    }
];