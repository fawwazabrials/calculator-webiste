/** SELECTORS */
numbers_btn = ["zeroo", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
numbers_btn = numbers_btn.map((i) => document.querySelector(`.${i}`));

const point_btn = document.querySelector(".point");
const equal_btn = document.querySelector(".equal");
const product_btn = document.querySelector(".product");
const divide_btn = document.querySelector(".divide");
const plus_btn = document.querySelector(".plus");
const minus_btn = document.querySelector(".minus");

const display_entry = document.querySelector(".entry");
const display_prev = document.querySelector(".prev-entry");

/** FUNCTIONS */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero!");
    return a / b;
}

function updateDisplay() {
    display_entry.innerHTML = current_entry;
    display_prev.innerHTML = prev_entry;
}

current_entry = "0"
prev_entry = "&nbsp;"
current = 0

updateDisplay()

