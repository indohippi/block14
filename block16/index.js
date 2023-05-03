const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/* create a function that gives Timmy => "Your grand total is $65"
1. create a function that takes in an object
2. create a variable that holds the total price
3. add coupon modifier
4. output the total price

create a function that gives Sarah => "Your grand total is $37.5"
1. create a function that takes in an object
2. create a variable that holds the total price
3. output the total price

create a function that gives Rocky => "Your grand total is $102.5"
1. create a function that takes in an object
2. create a variable that holds the total price
3. output the total price
*/

function calculateTotalPrice(patient) {
    let totalPrice = patient.pricePerRefill * patient.refills;
    
    if (patient.subscription) {
        totalPrice *= 0.75;
    }
    
    if (patient.coupon) {
        totalPrice -= 10;
    }

    return `Your grand total is $${totalPrice.toFixed(2)}`;
}

console.log(calculateTotalPrice(timmy)); // This should log the correct grand total for Timmy by adding the coupon with if statement


console.log(calculateTotalPrice(sarah)); // This should log "Your grand total is $37.50 by ignoring coupon"


console.log(calculateTotalPrice(rocky)); // The function will calculate Rocky's grand total by first applying the 25% discount due to his subscription and then applying the $10 discount because he has a coupon. The final amount will be $102.50."
