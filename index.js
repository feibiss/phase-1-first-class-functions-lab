// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Functions to select first or last two drivers
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// Array containing driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create fare multipliers
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

// Functions to double or triple fares
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Function to select drivers based on selection function
const selectDifferentDrivers = (drivers, selectionFunction) => 
  selectionFunction(drivers);