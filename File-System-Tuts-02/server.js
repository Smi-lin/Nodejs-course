const fs = require('fs')
const path = require('path')

// fs.readFile('./Files/Starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data.toString());
//     console.log(data);
// })

fs.readFile(path.join(__dirname, 'Files', 'Starter.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


//  Writing File
fs.writeFile(path.join(__dirname, 'files', 'new.txt'), "Hello, I am writing You", (err) => {
    if (err) throw err;
    console.log('Write file completed');

    fs.appendFile(path.join(__dirname, 'files', 'new.txt'),'\n\n I have been updated',
     (err) => {
        if (err) throw err 
        console.log("File update completed");

        // How to rename file
        
        fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, "files", "final.txt"), (err) => {
            if (err) throw err;
            console.log('Rename Completed');
        })
     }
    )
})

// How to create new final : NEW WAY

fs.appendFile(path.join(__dirname, "files", "index.js"), 'console.log("Hello")', (err) => {
    if (err) throw err;
    console.log("Updating 2 completed");
})


fs.rename(path.join(__dirname , "files", "index.js"), path.join(__dirname, "files", "main.js"), (err)  => {
   if (err) throw err;
   console.log("Renaming completed now");

   fs.unlink(path.join(__dirname, "files", "index.js"), (err) => {
        if (err) throw err;
        console.log("Delete completed now");
   })

   fs.unlink(path.join(__dirname, 'files', 'main.js'), (err) => {
        if (err) throw err;
        console.log("Delete completed ");
   })
})


// How to process an error

process.on("uncaughtException" , (err) => {
    console.log(`"There was an error processing the data: " ${err}`);
    process.exit(1)
})