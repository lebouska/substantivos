const substantivePlace = document.querySelector('#substantive');
const buttons = document.querySelectorAll('input');
const form = document.querySelector('form');

const MakeQuestionBank = (function () {
    let questionBank = [];

    class Question{
        constructor (word, answer){
            this.word = word;
            this.answer = answer;
        }
    }

    const addQuestion = (word, answer) => {
        const question = new Question (word, answer);
        questionBank.push(question);
    }

    const getBank = () => {
        return questionBank;
    }

    addQuestion("casa",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("escolas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("cachorro-quente",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("Canadá",["Próprio","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("jogos",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("Menininhos",["Comum","Simples","Concreto","Masculino","Biforme","Plural","Diminutivo"]);
    addQuestion("Brasil",["Próprio","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("São Paulo",["Próprio","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("panelonas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Aumentativo"]);
    addQuestion("meninões",["Comum","Simples","Concreto","Masculino","Biforme","Plural","Aumentativo"]);
    addQuestion("Sandra",["Próprio","Simples","Concreto","Feminino","Biforme","Singular","Normal"]);
    addQuestion("pipoquinhas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("cadeirona",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Aumentativo"]);
    addQuestion("cidadezinha",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Diminutivo"]);
    addQuestion("leões",["Comum","Simples","Concreto","Masculino","Biforme","Plural","Normal"]);
    addQuestion("girafona",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Aumentativo"]);
    addQuestion("Coleguinhas",["Comum","Simples","Concreto","Masculino","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("ator",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("porquinho",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Diminutivo"]);
    

    return {getBank}
})();

const gameController = (function () {

    buttons.forEach((button) => {
        if (button.id !== "start") {
            button.addEventListener('click', () => {
                changeColor(button);
            })
        } else {
            button.addEventListener('click', () => {
                testAnswer();
            })
        }
    })

    const changeColor = (button) => {
        if (button.value !== "Masculino" && button.value !== "Feminino"){
            if (button.className == "selected") {
                button.classList.remove("selected")
            } else {
                removeOtherColor(button);
                button.className = "selected";
            }
        } else {
            if (button.className == "selected") {
                button.classList.remove("selected")
            } else {
                button.className = "selected";
            }
        }
    }

    const removeOtherColor = (button) => {
        for (const child of button.parentNode.children) {
            child.classList.remove("selected")
        }
    }

    const unselectAll = () => {
        for (const button of buttons) {
            button.classList.remove("selected");
        }
    }
    
    const getAnswer = () => {
        const answer = [];

        form.childNodes.forEach((element) => {
            if (element.id !== "start") {
                element.childNodes.forEach((elementChild) => {
                    if (elementChild.className == "selected") {
                        answer.push(elementChild.value);
                    }
                })
            }
        })

        return answer;
    }

    let usableQuestions = MakeQuestionBank.getBank();

    const removeQuestion = (question) => {
        usableQuestions = usableQuestions.filter(value => value != question);
    }

    const selectQuestion = () => {
        return Math.floor(Math.random() * usableQuestions.length);
    }

    const endGame = () => {
        main.textContent = ""
        const endText = document.createElement('div');
        endText.textContent = "Fim do jogo";
        endText.id = "endGame";
        main.appendChild(endText);
    }

    let correctTotal = 0;
    let wrongTotal = 0;

    const updateScore = () => {
        correct.textContent = correctTotal + " Corretos";
        wrong.textContent = wrongTotal + " Errados";
    }

    const updateTotal = (value) => {
        if (value == "correct") {
            correctTotal += 1;
        } else {
            wrongTotal += 1;
        }
        updateScore();
    }

    let firstTest = true;
    
    let wordSelected = "";

    const playRound = () => {
        firstTest = true;
        unselectAll();

        if (usableQuestions.length > 0) {
            wordSelected = usableQuestions[selectQuestion()];
            substantivePlace.textContent = wordSelected.word;
        } else {
            endGame();
        }
    }

    const skip = () => {
        removeQuestion(wordSelected);
        playRound();
    }

    const testAnswer = () => {
        const answerGiven = getAnswer();
        let answer = "correct";
        
        if (answerGiven.length >= 7) {
            for (let i = 0; i < 7; i++) {
                if (answerGiven[i] !== wordSelected.answer[i]) {
                    answer = "wrong";
                }
            }
  
            if (answer == "correct") {
                if (firstTest == true) {
                    updateTotal("correct");
                }

                removeQuestion(wordSelected);
                playRound();
                
            } else {
                if (firstTest == true) {
                    updateTotal("wrong");
                    firstTest = false;
                }
            }
        } 
    }

    playRound();

    return {skip};
})();