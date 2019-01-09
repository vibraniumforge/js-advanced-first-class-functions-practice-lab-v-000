// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log (driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown===hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newDrivers=[...drivers]
  return newDrivers.sort(function(a,b) {
    return a.revenue - b.revenue
  })
  return newDrivers;
}

function driversByName(drivers) {
  let newDrivers=[...drivers]
  return newDrivers.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  const reducer= function (accumulator, currentValue) {
    return accumulator.revenue + currentValue
  }
}

function averageRevenue(drivers) {
  const reducer = function (accumulator, currentValue) {
    return accumulator.revenue +currentValue
  }
  return (reducer/drivers.length);
}
