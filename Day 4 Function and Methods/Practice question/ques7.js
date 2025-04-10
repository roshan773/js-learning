// from the array created by user use reduce method for calculate product of all the number

let n = prompt("Enter a number: ")

let arr = []

for(let i=1; i<=n; i++){
    arr[i-1] = i
}

let newarr = arr.reduce((prev , curr) => {
    return prev * curr
})

console.log(newarr)