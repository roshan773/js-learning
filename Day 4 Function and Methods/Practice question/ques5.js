// create a array from the resposnse given by he user

let n = prompt("Enter a number: ")

let arr = []

for(let i=1; i<=n; i++){
    arr[i-1] = i
}

console.log(arr)