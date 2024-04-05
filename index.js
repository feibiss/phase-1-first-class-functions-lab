// Code your solution in this file!
const drivers = ['Moi', 'Rumi', 'Konde', 'Sato'];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(a){
 return function ( fare){
    return fare*a
 }
}

function fareDoubler(fare){
return fare*2
}
function fareTripler(fare){
return fare*3
}
function selectDifferentDrivers(drivers,selectingDrivers){
 
return selectingDrivers(drivers)}