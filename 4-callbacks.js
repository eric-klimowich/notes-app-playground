const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error.', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000);
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})





















// setTimeout(() => {
//     console.log('2 seconds are up!')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']

// const shortNames = names.filter((name) => name.length <= 4 )
// console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const location = {
//             longitude: 0,
//             latitude: 0
//         }
//         callback(location)
//     }, 2000);
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

// const data = geocode('Philadelphia')
// console.log(data)


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })