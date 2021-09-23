import {StudentType} from '../02-Object/02';
import {CityType, GovernmentBuildings, HousesType} from '../02-Object/02-02';

export const sum = (a:number, b:number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildings, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true
}

export function toFireStaff(building: GovernmentBuildings, staffCountToFire: number) {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildings, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(city: CityType) {
    //return 'Hello ' + city.title + ' and all people in the world'
    return `Hello ${city.title} and all people in the world`
}