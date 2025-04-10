// using filter function filter student marks array who sore 90+

let array = [67, 76, 89, 98, 99, 88, 78, 90]

let newarr = array.filter((val) => {
    return val > 90
})

console.log(newarr)