// print square of the number given in the array using for each loop

// first method
let arr1 = [2,5,4,7,4,9]

arr1.forEach((number) => {
    console.log(number**2)
})

// Second Method
let arr2 = [2,5,4,7,4,9]

arr2.forEach((num) => {
    console.log(num*num)
})

// third method using function
let arr3 = [34,56,76,34]

let calsquare = (num) => {
    console.log(num * num)
}

arr3.forEach(calsquare)