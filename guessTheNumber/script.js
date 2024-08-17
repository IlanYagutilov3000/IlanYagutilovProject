let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0
let btn = document.querySelector(".btn");
let num2 = document.querySelector("#guess")

function checkNum() {
    let num = document.querySelector("#guess").value;
    num = Number(num);

    if (num < 1 || num > 10) {
        document.getElementById("results").innerHTML += `<p>Please enter a number between 1 and 10</p>`
        return;
    }
    if (attempts < 5) {
        if (num == randomNum) {
            document.getElementById("results").innerHTML += `<p>Exacly! you won the game, the number is ${randomNum} </p> <button onclick="restartGame()" class="btn btn-primary">Start again</button>`;
            btn.disabled = true
            num2.disabled = true
            return;
            /* attempts++ */
        }

        else if (num > randomNum) {
            document.getElementById("results").innerHTML += `<p> ${num} is too big </p>`
            document.querySelector("#guess").value = "";
            /* attempts++ */
        }

        else if (num < randomNum) {
            document.getElementById("results").innerHTML += `<p> ${num} is too small </p>`
            document.querySelector("#guess").value = "";
            /* attempts++ */
        }

        attempts++
        if (attempts === 5 && num !== randomNum) {
            document.getElementById("results").innerHTML += `<p>Game over! The correct number was ${randomNum}.</p> <button onclick="restartGame()" class="btn btn-primary">Start again</button>`;
            btn.disabled = true
            num2.disabled = true
        }
    }
}

function restartGame() {
    attempts = 0
    document.getElementById("results").innerHTML = "";
    btn.disabled = false
    num2.disabled = false
    num2.value = "";
}