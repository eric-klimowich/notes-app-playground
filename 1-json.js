const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())

data.name = 'Eric'
data.age = 43

const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// const book = {
//     title: 'Infinity Gauntlet',
//     author: 'Jim Starlin'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)