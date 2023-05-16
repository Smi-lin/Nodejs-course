const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');


const logEvents = async (message) => {
    const dateTime = format(new Date(), 'yyyy-MM-dd\t\tHH:mm:ss')
    const logItems = `${dateTime}\t${uuid()}\t ${message} \n`
    console.log(logItems);
    try {
        if(!fs.existsSync(path.join(__dirname, "Logs"))) {
            await fs.mkdir(path.join(__dirname,  'Logs'), (err) => {
               if(err) throw err;
               console.log('Directory successfully created');
            })
        }
        await fsPromises.appendFile(path.join(__dirname,  'Logs', 'eventLog.txt'), logItems)

    } catch (err) {
        console.log(err);
    }
    
}


module.exports = logEvents;