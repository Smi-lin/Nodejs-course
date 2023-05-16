const {format} = require('date-fns')
const {v4: uuid} = require('uuid')

const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')



const logEvt = async (message) => {
    const logTime = format(new Date(), 'yyyy-MM-dd\t\tHH:mm:ss')
    const msgDate = `${logTime}\t${uuid()}\t ${message} \n`
    console.log(msgDate);
    try {
        if(!fs.existsSync(path.join(__dirname, "Events"))) {
            await fs.mkdir(path.join(__dirname,  'Events'), (err) => {
               if(err) throw err;
               console.log('Directory successfully created');
            })
        }
        await fsPromises.appendFile(path.join(__dirname,  'Events', 'event.txt'), msgDate)

    } catch (err) {
        console.log(err);
    }
    
}

module.exports = logEvt