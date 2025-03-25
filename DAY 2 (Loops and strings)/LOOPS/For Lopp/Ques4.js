// Calculate sum of number from 1 to n

let n = parseInt(prompt("Enter NUmber: "))
sum = 0

for (i=1; i<=n; i++){
    sum = sum + i;
    console.log(sum)
}

alert(sum)