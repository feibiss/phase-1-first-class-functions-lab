const returnFirstTwoDrivers = (driversArray) => driversArray.slice(0, 2);

const returnLastTwoDrivers = (driversArray) => driversArray.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, selectionMethod) => {
 return selectionMethod(driversArray);
};