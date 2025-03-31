function Demo(){
    console.log("This is Normal function")
}

Demo();

// function use for claculation of 2 number
function add(x, y){
    console.log(x+y)
}

add(3, 4)

// Arthematic expression using function
function arthematic(a, b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}

arthematic(3, 4)


// sum of 2 number using return in function
function add(x, y){
    sum = x + y
    return sum;
}
let result = add(4, 3)
console.log(result)


// some variable are local varaible which can be executed in there particular block of code
// some varaible are global varaible which can be execited outside of the function also