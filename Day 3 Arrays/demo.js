let str = "PAKHRE ROSHAN"

// for(let i=0; i<str.length; i++){
//     if(str[i] === "A" || str[i] === "a" ||str[i] === "E" || str[i] === "e" ||str[i] === "I" || str[i] === "i" ||str[i] === "O" || str[i] === "o" ||str[i] === "U" || str[i] === "u" ){
//         console.log(`${str[i]} = Vowel`)
//     }
//     else if(str[i] === " "){
//         console.log(`Blank Space`)
//     }
//     else{
//         console.log(`${str[i]} = Consonent`)
//     }
// }

// using for of loop
for(let el of str){
    if(el === "A" || el === "a" ||el === "E" || el === "e" ||el === "I" || el === "i" ||el === "O" || el === "o" ||el === "U" || el === "u" ){
        console.log(`${el} = Vowel`)
    }
    else if(el === " "){
        console.log(`Blank Space`)
    }
    else{
        console.log(`${el} = Consonent`)
    }
}