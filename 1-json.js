const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

const myName = function(name) {
    return data.name = name
}

const myAge = function(age) {
    return data.age = age
}

myName('roger')
myAge('34')

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)

console.log(data)