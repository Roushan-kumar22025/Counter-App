const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
