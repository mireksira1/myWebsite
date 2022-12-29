function showProblems() {
    // Array pro priklady
    var problems = [];

    // Vybrani operaci pro priklady
    var operations = [];
    if (document.getElementById('plus').checked) {
        operations.push('+');
    }
    if (document.getElementById('minus').checked) {
        operations.push('-');
    }
    if (document.getElementById('krat').checked) {
        operations.push('*');
    }

    // Vytvoreni prikladu
    for (var i = 0; i < 10; i++) {
        // Kontrola
        if (operations.length === 0) {
            // Pokud neni zadny operator vybrany
            document.getElementById("chyba1").innerText = "Musíš vybrat alespoň jeden matematický operátor: ' + ', ' - ' nebo ' * '. Uděláš tak kliknutím výše na čtverečky."
            break;
        }
        if (operations.length !== 0) {
            document.getElementById("chyba1").style.display = "none";
        }
        var operation = operations[Math.floor(Math.random() * operations.length)];

        // Generace 2 cisel
        var num1 = Math.floor(Math.random() * 100) + 1;
        var num2 = Math.floor(Math.random() * 100) + 1;



        // CVypocet vysledku
        var answer;
        switch (operation) {
    case '+':
        if (num1 + num2 >= 1 && num1 + num2 <= 100) {
            answer = num1 + num2;
        } else {
            // Generace 2 dalsich cisel pokud x > 100
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            i--;
            continue;
        }
        break;
    case '-':
        if (num1 - num2 >= 1 && num1 - num2 <= 100) {
            answer = num1 - num2;
        } else {
            // Generace 2 dalsich cisel pokud x > 100
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            i--;
            continue;
        }
        break;
    case '*':
        // Generace 2 dalsich cisel pokud x a y = 1
        if (num1 === 1 || num2 === 1) {
            num1 = Math.floor(Math.random() * 100) + 2;
            num2 = Math.floor(Math.random() * 100) + 2;
            i--;
            continue;
        }
        if (num1 * num2 >= 1 && num1 * num2 <= 100) {
            answer = num1 * num2;
        } else {
            // Generace novych cisel
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            i--;
            continue;
        }
        break;

}

        // Vytvoreni problemu
        var problem = {
            problem: num1 + ' ' + operation + ' ' + num2 + ' =',
            answer: answer
        };

        // Vlozeni problemu do arraye
        problems.push(problem);
    }

    // vytvoreni elementu na strance pro matematicke problemy
    var container = document.createElement("div");
    container.className = "problems-container";

    // Vlozeni matematickych problemu do elementu
    for (var i = 0; i < problems.length; i++) {
        var problem = problems[i];

        function checkAnswer(problem, input, button) {
            var userAnswer = parseFloat(input.value);
            if (userAnswer === problem.answer) {
                button.innerHTML = "Správně!";
                button.disabled = true;
            } else {
                button.innerHTML = "Špatně, správná odpověď je " + problem.answer;
                button.disabled = true;
            }
        }
        var container = document.createElement("div");
        container.className = "problems-container";

        for (var i = 0; i < problems.length; i++) {
            var problem = problems[i];

            var problemDiv = document.createElement("div");
            problemDiv.className = "problem";

            var problemP = document.createElement("p");
            problemP.innerHTML = problem.problem;

            var input = document.createElement("input");
            input.type = "number";

            var button = document.createElement("button");
            button.innerHTML = "Kontrola";
            button.onclick = checkAnswer.bind(null, problem, input, button);

            problemDiv.appendChild(problemP);
            problemDiv.appendChild(input);
            problemDiv.appendChild(button);
            container.appendChild(problemDiv);
        }

        document.body.appendChild(container);

        document.getElementById("btn-pripraven").disabled = true;
    }

    function checkAnswer(problem, input, button) {
        var userAnswer = parseFloat(input.value);
        if (userAnswer === problem.answer) {
            button.innerHTML = "Správně!";
            button.disabled = true;
        } else {
            button.innerHTML = "Špatně, správná odpověď je " + problem.answer;
            button.disabled = true;
        }
    }

    button.onclick = checkAnswer.bind(null, problem, input, button);
}

function checkAnswer(problem, input, button) {
    var userAnswer = parseFloat(input.value);
    if (userAnswer === problem.answer) {
        button.innerHTML = "Správně!";
        button.disabled = true;
    } else {
        button.innerHTML = "Špatně, správná odpověď je " + problem.answer;
        button.disabled = true;
    }
}