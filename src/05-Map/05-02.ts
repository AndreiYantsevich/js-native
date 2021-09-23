import {GovernmentBuildings, HousesType} from '../02-Object/02-02';

export const getStreetTitleOfGovermentsBuildings = (buildings: Array<GovernmentBuildings>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HousesType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}