const score = document.getElementById('score');
const calculateBtn = document.getElementById('calculateGrade');
const resetBtn = document.getElementById('reset');
const result = document.getElementById('result');

// Input validate check
function isValidInput(x) {
    if (x === '') {
        alert("Please enter a score!");
        return false;
    }
    return true;
}

// Calculate Grade Logic
function handleClick() {
    if (!isValidInput(score.value)) {
        score.value = '';
        return;
    }

    const value = parseFloat(score.value);

    if (value >= 0 && value < 33) {
        result.innerText = "F";
    } else if (value >= 33 && value <= 39) {
        result.innerText = "D";
    } else if (value >= 40 && value <= 49) {
        result.innerText = "C";
    } else if (value >= 50 && value <= 59) {
        result.innerText = "B";
    } else if (value >= 60 && value <= 69) {
        result.innerText = "A-";
    } else if (value >= 70 && value <= 79) {
        result.innerText = "A";
    } else if (value >= 80 && value <= 100) {
        result.innerText = "A+";
    } else {
        alert("Invalid score!Please enter a number between 0 and 100.");
        score.value = '';
        result.innerText = '';
    }
}

// Reset everything
function handleReset() {
    score.value = '';
    result.innerText = '';
}

// Event listeners
calculateBtn.addEventListener('click', handleClick);
resetBtn.addEventListener('click', handleReset);
