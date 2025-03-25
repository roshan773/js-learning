let n = parseInt(prompt("Enter a term: "))

let a = 0, b = 1, nextnum;

console.log("GEBONACCI SERIES: ")
console.log(a)

if(n > 1){
    console.log(b)
}

for(i=3; i<=n; i++){
    nextnum = a + b;

    a = b;
    b = nextnum;

    console.log(nextnum)
}