type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
function getHouse(): House {
    const house: any = {};

    house.street = 'Pushkina';
    house.apartmentCount = 76;

    house.buildInfo = {
        year: 1996,
        material: 'rocks',
        };

        
    if (isHouse(house)) {
        return house;
    }
    throw new Error('Invalid house object');
}

function handleHouse(): void {
    const house: House = getHouse();

    if (isHouse(house)) {
        console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
        console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
    }
}

handleHouse();

function isHouse(house: any): house is House {
    return (
        'street' in house && 
        'apartmentCount' in house &&
        'buildInfo' in house && 
        'year' in house.buildInfo &&
        'material' in house.buildInfo
    )
}
// Добавили предикат isHouse, который проверяряем, что объект полностью соотвествует типу House



