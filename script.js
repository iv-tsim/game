"use sctrict";

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
    const number = Math.floor(Math.random() * 100) + 1;
    const iteration = function() {
        console.log(number);
        let guess = +prompt("Угадай число от 1 до 100");
        if (!isNumber(guess)) {
            alert("Введи число!");
            iteration();
        } else if (guess < number) {
            alert("Загаданное число больше");
            iteration();
        } else if (guess > number) {
            alert("Загаданное число меньше");
            iteration();
        } else if (guess === null) {
            return;
        }
    };
    return iteration;
};
const start = game();
start();