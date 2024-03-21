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
    addQuestion("Belo Horizonte",["Próprio","Composto","Concreto","Feminino","Uniforme","Singular","Normal"]);
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
    addQuestion("água",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("aguiazinhas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("baleiona",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Aumentativo"]);
    addQuestion("tatus",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("pessoas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("indivíduo",["Comum","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("acrobata",["Comum","Simples","Concreto","Masculino","Feminino","Biforme","Singular","Normal"]);
    addQuestion("camaradas",["Comum","Simples","Concreto","Masculino","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("pianistas",["Comum","Simples","Concreto","Masculino","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("patinhos",["Comum","Simples","Concreto","Masculino","Biforme","Plural","Diminutivo"]);
    addQuestion("cliente",["Comum","Simples","Concreto","Masculino","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("imigrantes",["Comum","Simples","Concreto","Masculino","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("anjo",["Comum","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("criancinhas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("formigonas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Aumentativo"]);
    addQuestion("foca",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("cobrinhas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("borboletinha",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Diminutivo"]);
    addQuestion("óculos",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("paraquedas",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Plural","Normal"]);
    addQuestion("fadinhas",["Comum","Simples","Concreto","Feminino","Uniforme","Plural","Diminutivo"]);
    addQuestion("amor",["Comum","Simples","Abstrato","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("Amazonas",["Próprio","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("Estados Unidos",["Próprio","Composto","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("São Paulo (cidade)",["Próprio","Composto","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("São Paulo (estado)",["Próprio","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("fé",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("belezas",["Comum","Simples","Abstrato","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("riqueza",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("frio",["Comum","Simples","Abstrato","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("sustões",["Comum","Simples","Abstrato","Masculino","Uniforme","Plural","Aumentativo"]);
    addQuestion("dor",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("calorzinho",["Comum","Simples","Abstrato","Masculino","Uniforme","Singular","Diminutivo"]);
    addQuestion("pézinhos de moleque",["Comum","Composto","Concreto","Masculino","Uniforme","Plural","Diminutivo"]);
    addQuestion("girassol",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("cavalos-marinhos",["Comum","Composto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("planalto",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("vinagres",["Comum","Composto","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("Maria",["Próprio","Simples","Concreto","Feminino","Biforme","Singular","Normal"]);
    addQuestion("Organização das Nações Unidas",["Próprio","Composto","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("Ministério da Educação",["Próprio","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("Argentina",["Próprio","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("fome",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("vidas",["Comum","Simples","Abstrato","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("feiura",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("derrotas",["Comum","Simples","Abstrato","Feminino","Uniforme","Plural","Normal"]);
    addQuestion("Sol",["Próprio","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("sóis",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("sabedoria",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("cozinha",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("dinossauros",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("professorona",["Comum","Simples","Concreto","Feminino","Biforme","Singular","Aumentativo"]);
    addQuestion("amigo",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("deputado",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("freguês",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("campeãs",["Comum","Simples","Concreto","Masculino","Biforme","Plural","Normal"]);
    addQuestion("vovôzinho",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Diminutivo"]);
    addQuestion("marido",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("tubarão",["Comum","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("madastras",["Comum","Simples","Concreto","Feminino","Biforme","Plural","Normal"]);
    addQuestion("genro",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Normal"]);
    addQuestion("boizão",["Comum","Simples","Concreto","Masculino","Biforme","Singular","Aumentativo"]);
    addQuestion("caminhadinha","Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Diminutivo");
    addQuestion("honestidade",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("cheiros",["Comum","Simples","Abstrato","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("persistência",["Comum","Simples","Abstrato","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("Califórnia",["Próprio","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("quebra-cabeça",["Comum","Composto","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("luto",["Comum","Simples","Abstrato","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("arcos-íris",["Comum","Composto","Concreto","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("pontapés",["Comum","Composto","Abstrato","Masculino","Uniforme","Plural","Normal"]);
    addQuestion("corre-corre",["Comum","Composto","Abstrato","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("guarda-sol",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("meio-dia",["Comum","Composto","Abstrato","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("colinha",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Diminutivo"]);
    addQuestion("Coca-Cola",["Próprio","Composto","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("requeijão",["Comum","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("videogame",["Comum","Composto","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("Portugal",["Próprio","Simples","Concreto","Masculino","Uniforme","Singular","Normal"]);
    addQuestion("camomila",["Comum","Simples","Concreto","Feminino","Uniforme","Singular","Normal"]);
    addQuestion("papelzinhos",["Comum","Simples","Concreto","Masculino","Uniforme","Plural","Diminutivo"]);

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
        if (button.value !== "Masculino" && button.value !== "Feminino" && button.value !== "Singular" && button.value !== "Plural"){
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