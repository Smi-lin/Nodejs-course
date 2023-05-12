let avUber = true;
const clientMakeOrder = false;

const uberReadey = () => {
    if(avUber && clientMakeOrder) console.log('Uber is ready to move');
    else console.log('unber is not ready to move');
}

const fuelMinLimit = 50;
const fuelMaxLimit = 250;


const fuelLimit = (maxError, minError) => {
    if(fuelMinLimit <= 50) return maxError;
    else if (fuelMaxLimit > 250) return  minError;
    else console.log("fuel limitation is cool, we can ride on");
}

module.exports = {uberReadey, fuelLimit}