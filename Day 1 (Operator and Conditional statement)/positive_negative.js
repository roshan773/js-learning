let numberInput = document.querySelector("#text")
let result = document.querySelector("#result")

const getResult = () => {

    let number = parseFloat(numberInput.value)

    if(number > 0 && number % 2 == 0){
        result.textContent = `is positive number and even number`
    }
    else if(number > 0 && number % 2 !== 0){
        result.textContent = `is positive number and odd number`
    }
    else if(number == 0){
        result.textContent = `is zero`
    }
    else if(number < 0){
        result.textContent = `is negative number`
    }
    else{
        result.textContent = `is not a valid number enter valid number`
    }

}