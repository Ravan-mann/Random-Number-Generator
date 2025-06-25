document.addEventListener('DOMContentLoaded', function() {
    const randButton = document.getElementById('randomButton');
    const mylabel = document.getElementById('mylabel');
    const min = 1;
    const max = 10;
    let randomNumber = 0;
    
    randButton.onclick = function() {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        mylabel.textContent = randomNumber;
    };
});