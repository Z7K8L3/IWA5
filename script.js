// constants for messages
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// item costs
const shoes = 300 * 1;
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const location = 'RSA'; //User location (RSA, NAM, NK)
const currency = 'R'; //User currency (R, $)
const customers = 1; //Number of customers

let shipping = 0;
let totalCost = 0;

totalCost = shoes + toys + shirts + batteries + pens;

// shipping cost based on location
if (location === 'RSA') { 
    shipping = 400 && currency === 'R';
} else if (location === 'NAM') {
    shipping = 600;
} else {
    shipping = 800;
}

if (location === 'NK') {
    console.log(BANNED_WARNING);
}

if (totalCost >= 1000 && (location === 'RSA' || location === 'NAM') && customers < 2) {
		    shipping;
}

if (shipping = 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

console.log('price:', currency, totalCost + shipping);