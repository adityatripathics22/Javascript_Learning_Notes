function discountCalculator(discount){
    return function(price){
        return price - (price * (discount /100));
    }

}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
// console.log(ten(100)); // should return 90
let discounter = discountCalculator(50);

console.log(discounter(100)); // should return 90

console.log(discountCalculator(20)(200)); // should return 160