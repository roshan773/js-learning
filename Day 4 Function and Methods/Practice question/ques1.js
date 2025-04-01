// // Finding the vowels from the string using the function

// function vowels(str){
//     for(let i=0; i<=str.length; i++){
//         if(str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U"){
//             console.log(`${str[i]} is vowel`)
//         }
//     }
// }

// vowels("Javascript")


function vowel(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U"){
            console.log(`${str[i]} is vowel`)
            console.log(count)
        }
        else if(str[i]===" "){
            console.log("Empty space")
        }
        else{
            console.log(`${str[i]} is consoent`)
        }

        count++;

        
    }
    console.log(count)
}

vowel("Love")