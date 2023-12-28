setTimeout(() => {
    console.log('Two seconds are up')
}, 2000);

const names = ['Roger', 'Maria', 'Tony', 'Sarah']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000);
}

geocode('Dallas', (x) => {
    console.log(x)
})

// Challenge

const add = (y, x, callback) => {
    setTimeout(() => {
        const data = y + x
        callback(data)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }

    console.log(result)
})