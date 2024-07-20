const questions=[
    {
        question:"Which is the largest element in the world?",
        answers:[
            {
                text:"Shark", correct: false
            },
            {
                text:"Blue Whale", correct: true
            },
            {
                text:"Elephant", correct: false
            },
            {
                text:"Giraffe", correct: false
            }
        ]
    },
    {
        question:"Which is the smallest element in the world?",
        answers:[
            {
                text:"Pen", correct: false
            },
            {
                text:"Blue Whale", correct: false
            },
            {
                text:"Ball", correct: false
            },
            {
                text:"None of the above", correct: true
            }
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {
                text:"kalahari", correct: false
            },
            {
                text:"Gobi", correct: false
            },
            {
                text:"Sahara", correct: false
            },
            {
                text:"Antartica", correct: true
            }
        ]
    },
    {
        question:"Which is the smaleest continent in the world?",
        answers:[
            {
                text:"Asia", correct: false
            },
            {
                text:"Australia", correct: true
            },
            {
                text:"Arctic", correct: false
            },
            {
                text:"Africa", correct: false
            }
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answers-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn"); //applying the class 'btn' styles to it
        answerButtons.appendChild(button); // we have to display buttons inside answer-buttons class
        if (answer.correct){
            button.dataset.correct=answer.correct; //If the answer is correct, it adds a data-correct attribute to the button with the value true.
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); //The removeChild() method is called on the parent node and requires the element to be removed as an argument. This method removes a child node from the specified parent node and returns the removed node.
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => { //The Array.from() method in JavaScript is used to create a new, shallow-copied Array instance from an array-like or iterable object. In the context of Array.from(answerButtons.children).forEach(), it is being used to convert the HTMLCollection (or NodeList) of answerButtons's children into an array so that array methods like forEach() can be used.
        if(button.dataset.correct === "true"){  // this function will always find correct answer and display it
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();