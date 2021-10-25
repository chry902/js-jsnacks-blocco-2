const bicycles = [
    {

        name: `cannondale`,
        weight: 10
    },
    {

        name: `cannondale1`,
        weight: 12
    },
    {

        name: `cannondale2`,
        weight: 8
    },
    {

        name: `cannondale3`,
        weight: 7
    },


]

let lightestBike = bicycles[0]

for (let i = 0; i < bicycles.length; i++) {
    const element = bicycles[i];

    if (lightestBike.weight < lightestBike.weight) {
        lightestBike = bike
    };

}

document.querySelector(`.risultato`).innerHTML = `la bici piu leggera è : ${lightestBike.name} e pesa : ${lightestBike.weight} kg`