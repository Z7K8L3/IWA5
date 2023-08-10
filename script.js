// Constants for messages
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Item costs
const shoes = 300 * 1;
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const userLocation = 'RSA'; //User userLocation (RSA, NAM, NK)
const currency = 'R'; //User currency (R, $)
const customers = 1; //Number of customers

let shipping = 0;
let totalCost = 0;

totalCost = shoes + toys + shirts + batteries + pens;

// Shipping cost based on userLocation
if (userLocation === 'RSA') {
    if (currency === 'R') {
        shipping = 400 ;
    }
} else if (userLocation === 'NAM') {
    shipping = 600;
} else {
    shipping = 800;
}

// If user is from NK and if free shipping applies
if (userLocation === 'NK') {
    console.log(BANNED_WARNING);
} else {
    if (totalCost >= 1000 && (userLocation === 'RSA' || userLocation === 'NAM') && customers === 1) {
        shipping = 0;
}

// When warning message should be displayed
if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

// Display the total price
const totalPrice = totalCost + shipping;
console.log('Price:', currency, totalPrice);
}