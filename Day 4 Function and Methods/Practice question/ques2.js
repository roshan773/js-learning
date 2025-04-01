// finding vowel using arrow function

const countvowel = (str) => {
    let count = 0;
    for(const char of str){
        if(char=="a"||char=="A"||char=="e"||char=="E"||char=="i"||char=="I"||char=="o"||char=="O"||char=="u"||char=="U"){
            console.log(`${char} is vowel`)
            console.log(count)
        }
        else if(char===" "){
            console.log("Empty space")
        }
        else{
            console.log(`${char} is consoent`)
        }

        count++;
    }
    console.log(count)
}

countvowel("I LOve Javascript")