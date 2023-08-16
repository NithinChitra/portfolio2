function buildQuiz(){
    const output = [];

    //for each question
    myQuestions.forEach(
        (currentQuestion,questionNumber)=>{//current value and index number
            //to store answers
            const answers = [];

            //for each ans.
            for(letter in currentQuestion.answers){
                //add html radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}:
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //add question to output

            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class = "answers">${answers.join(" ")} </div>
                </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join(" ");
}


    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');//get all answers containers
        let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion,questionNumber)=>{
        //find selected ans
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'blue';
        }
        // if answer is wrong or blank
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `<div style="font-size:18px;"><b>${numCorrect} out of ${myQuestions.length} are correct.</b></div>`;
    if(`${numCorrect}==${myQuestions.length}`){
    msgContainer.innerHTML = `<br><div style="font-family:arial,sans-serif;">Quote: Don't Wait for Opportunity, Create it.</div>`;
    }
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }


function showNextSlide(){
    showSlide(currentSlide+1);
}
function showPreviousSlide(){
    showSlide(currentSlide-1);
}


//variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const msgContainer = document.getElementById("msg");

let currentSlide = 0;

//questions defining
const myQuestions = [
    {
        question:"1) A _________ set of rules that governs data communication.",
        answers:{
            a:"Protocols",
            b:"Standards",
            c:"RFCs",
            d:"Servers"
        },
        correctAnswer:"a"
    },
    {
        question:"2) Bluetooth is an example of __________",
        answers:{
            a:"personal area network",
            b:"local area network",
            c:"virtual private network",
            d:"wide area network"
        },
        correctAnswer:"a"
    },
    {
        question:"3) Which of these best describes an array?",
        answers:{
            a:"A data structure that shows a hierarchical behavior",
            b:"Container of objects of similar types",
            c:"Arrays are immutable once initialised",
            d:"Array is not a data structure"
        },
        correctAnswer:"b"
    },
    {
        question:"4) In a stack, if a user tries to remove an element from an empty stack it is called _________",
        answers:{
            a:"Underflow",
            b:"Empty collection",
            c:"Overflow",
            d:"Garbage Collection"
        },
        correctAnswer:"a"
    },
    {
        question:"5) How will you implement dynamic arrays in Java?",
        answers:{
            a:"Set",
            b:"Map",
            c:"HashMap",
            d:"List"
        },
        correctAnswer:"d"
    },
    {
        question:"6) What is the traversal strategy used in the binary tree?",
        answers:{
            a:"depth-first traversal",
            b:"breadth-first traversal",
            c:"random traversal",
            d:"Priority traversal"
        },
        correctAnswer:"b"
    },
    {
        question:"7) Which of the following language does the computer understand?",
        answers:{
            a:"Computer understands only C Language",
            b:"Computer understands only Assembly Language",
            c:"Computer understands only Binary Language",
            d:"Computer understands only BASIC"
        },
        correctAnswer:"c"
    }
]

buildQuiz();
//to display ques and answ
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
showSlide(currentSlide);



submitButton.addEventListener('click',showResults);
previousButton.addEventListener('click',showPreviousSlide);
nextButton.addEventListener('click',showNextSlide);