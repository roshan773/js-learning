let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

console.log(company)

// Removing first comapny from array using shift method
company.shift()
console.log(company)

// Remove UBER and Add OLA in the array
company.splice(1, 1, "OLA")
console.log(company)

// Adding Amazon at the end
company.push("Amazon")
console.log(company)