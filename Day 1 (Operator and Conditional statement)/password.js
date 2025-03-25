let pass = document.querySelector("#text")
let button = document.querySelector("button")
let h1 = document.querySelector("h1")

button.addEventListener("click", () => {
    if (pass.value.length <= 6) {
        h1.textContent = "week password"
    }
    else if (pass.value.length <= 9) {
        h1.textContent = "Moderate password"
    }
    else {
        h1.textContent = "Strong passowrd"
    }
})