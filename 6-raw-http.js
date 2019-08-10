const https = require('https')

const url = 'https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
        // console.log(data)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()