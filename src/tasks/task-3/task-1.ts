type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
function getHouse(): House {
    const house = {} as House;
    house.street = 'Pushkina';
    house.apartmentCount = 76;

    // house.buildInfo = {
    //     year: 1996,
    //     material: 'rocks',
    //     };

    return house;
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();