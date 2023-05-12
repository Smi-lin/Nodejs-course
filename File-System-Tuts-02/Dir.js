const fs = require('fs')
const path = require('path')

// HOW TO CREATE A FOLDER USING CONDITION STATEMENT
// if(!fs.existsSync(path.join(__dirname, 'Files', 'folder'))) {
//     fs.mkdir(path.join(__dirname, 'Files', 'folder' ), (err) => {
//         if(err) throw err;
//         console.log('Directory successfully created');
//     })
// }else {
//     console.log('Directory file exists');
    
// }

    // SECOND WAYS
// fs.mkdir(path.join(__dirname, 'Files', 'folder' ), (err) => {
//     if(err) throw err;
//     console.log('Directory successfully created');
// })


    // HOW TO DELETE A FOLDER USING CONDITION STATEMENT
if(fs.existsSync(path.join(__dirname, 'Files', 'folder'))) {
    fs.rmdir(path.join(__dirname, 'Files', 'folder' ), (err) => {
        if(err) throw err;
        console.log('Directory successfully Deleted');
    })
}


if(!fs.existsSync(path.join(__dirname, 'Files', 'directory'))) {
    fs.mkdir(path.join(__dirname, 'Files', 'directory' ), (err) => {
        if(err) throw err;
        console.log('Directory successfully created');
    })
}else {
    console.log('Directory file exists');
    
}


 
