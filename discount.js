// const totalAmount = 4000;

// if (totalAmount > 5000) {
//     const discount = 30;
//     const discountAmount = totalAmount / 100 * discount;
//     const payment = totalAmount - discountAmount;
//     console.log(payment);
// }
// else if (totalAmount > 1000) {
//     const discount = 10;
//     const discountAmount = totalAmount / 100 * discount;
//     const payment = totalAmount - discountAmount;
//     console.log('Please pay:', payment)
// }


// let age = 15;

// if (age > 18) {
//     console.log("Adult");
// }else {
//     console.log("Minor");
// }

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);



// let age = 22;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("Entry Allowed");
//     }
// }



let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;

            case 3:
                console.log("Wednesday");
                break;
                default:
                    console.log("Invalid day");
}


let username = "John";
let password = "12345";

if (username === "John" && password === "12345") {
    console.log("Login successful");
}else {
    console.log("Invalid username or password");
}