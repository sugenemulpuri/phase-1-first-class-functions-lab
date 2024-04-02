// Code your solution in this file!


const returnFirstTwoDrivers = (driversArray) => {
    const returnFirstTwoDrivers = [driversArray[0], driversArray[1]]
    return returnFirstTwoDrivers.slice(0,2)
}

const returnLastTwoDrivers = (driversArray) => {
    console.log(driversArray)
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier

    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversFunction) => {
    console.log(driversFunction);
    return driversFunction(drivers);
}