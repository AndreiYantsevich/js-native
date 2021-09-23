import {CityType, GovernmentBuildings} from '../02-Object/02-02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street )
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildings>, number: number) => {
    return buildings.filter( b => b.staffCount > number )
}