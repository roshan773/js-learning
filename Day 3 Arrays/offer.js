let price = [250, 645, 300, 900, 50]
let new_price = []

for(let i=0; i<price.length; i++){
    let discount = price[i]/10;

    let discounted_price = price[i]-discount

    console.log(discounted_price)
}


// with for of loop

let i = 0;

for(let val of price){
    console.log(`Value before discount = ${val}`);

    let offer = val / 10
    console.log(`Discount value = ${offer}`)

    final_price = val-offer;
    console.log(`Value after discount = ${final_price}`)
}
console.log(price)