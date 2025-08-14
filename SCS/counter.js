function counter(){
    let count = 0;
    return function(){
        count++;

        return count;
    }
}
let counter1 = counter();
let counter2 = counter();

console.log(counter1()); // 1
console.log(counter1()); // 2       
console.log(counter2()); // 1
console.log(counter1()); // 3
console.log(counter2()); // 2
console.log(counter1()); // 4

// isme function ki copy ban rahi hai aur aur pura stor eho rha hai variable mei 
// toh jab hum functin ko call kr rhe hai toh wo purani value ko access kr rha hai
// aur isliye count ki value change ho rhi hai

//agar hum direct function call krte toh wo apni counte kki value 0 se start krta pr iss tarah agar hum
///function ko call krte hai aur variable mei store krte hai toh wo value ko yaad rakh pata hai