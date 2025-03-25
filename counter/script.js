let add = document.querySelector("#addition")
let reset = document.querySelector("#reset")
let sub = document.querySelector("#substraction")
let h1 = document.querySelector("h1")


let count = 0;

add.onclick = () => {
    count += 1;
    h1.textContent = `${count}`
}

reset.onclick = () => {
    count = 0;
    h1.textContent = `${count}`
}


sub.onclick = () => {
    if(count > 0){
        count -= 1;

        h1.textContent = `${count}`
    }
}


let getcounter = () => {
    let count = 0;
    return() => ++count;
}

let counter1 = getcounter();
let counter2 = getcounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());