const {format} = require('date-fns');
const uuid = require('uuid');


const dateTime = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')
console.log(dateTime);

console.log(uuid.v4())