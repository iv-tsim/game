"use sctrict";

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
    let number = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;
    const iteration = function() {
        console.log(number);
        let guess = prompt("Угадай число от 1 до 100");
        attempts--;
        if (attempts === 0) {
            if (confirm("Попытки закончились, хотите сыграть еще?")) {
                number = Math.floor(Math.random() * 100) + 1;
                attempts = 10;
                iteration();
            } else {
                alert("Жаль, мы могли провести так много времени...");
                return;
            }
        }
        if (guess === null) {
            alert("Жаль, мы могли провести так много времени...");
            return;
        } else if (!isNumber(guess)) {
            alert("Введи число!");
            iteration();
        } else if (guess < number) {
            alert("Загаданное число больше, осталось попыток: " + attempts);
            iteration();
        } else if (guess > number) {
            alert("Загаданное число меньше, осталось попыток: " + attempts);
            iteration();
        } else if (+guess === number) {
            if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                number = Math.floor(Math.random() * 100) + 1;
                attempts = 10;
                iteration();
            } else {
                alert("Жаль, мы могли провести так много времени...");
                return;
            }
        }
    };
    return iteration;
};

const start = game();

console.dir(start);

start();