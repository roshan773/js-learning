let str = parseInt(prompt("Enter string: "))
let reverse_string = "";

for (let i = str-1; i>=0; i-- ){
    reverse_string += str[i];
    console.log(reverse_string)
}