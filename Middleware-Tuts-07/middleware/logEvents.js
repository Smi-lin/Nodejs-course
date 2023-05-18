// THIRD PARTY MODULES
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');


// CORE MODULES
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');


const logEvents = async (message ,logFileName) => {
    const dateTime = format(new Date(), 'yyyy-MM-dd\t\tHH:mm:ss')
    const logItems = `${dateTime}\t${uuid()}\t ${message} \n`
    console.log(logItems);
    try {
        if(!fs.existsSync(path.join(__dirname, "..", "Logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "..",  'Logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, "..", 'Logs', logFileName), logItems)

    } catch (err) {
        console.log(err);
    }
    
}

const logger = (req, res, next) => {
    console.log(`${req.method}\n${req.path}`);
    logEvents(`${req.method}\t${req.path}\t${req.headers.origin}`, 'reqLog.txt')
    next();
}

module.exports = {logEvents,logger};