const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=22e9a015f0b2ff7074e25f04cfea93d9&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error occurred:', error)
})

request.end()