const fs = require('fs');
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, "new-Files", "lorem.txt"), {encoding: "utf8"})

const ws = fs.createWriteStream(path.join(__dirname, "new-Files", "Stream.txt"))
// rs.on('data', (chunkData) => {
//     ws.write(chunkData)
//     console.log('Chunked Data Streamed Successfully');
// })

rs.pipe(ws)