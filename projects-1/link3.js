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
    msgContainer.innerHTML = `<br><div style="font-family:arial,sans-serif;">Quote: Don't limit yourself.</div>`;
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
        question:"1) Which statement is true about Java?",
        answers:{
            a:"Java is a sequence-dependent programming language",
            b:"Java is a code dependent programming language",
            c:"Java is a platform-dependent programming language",
            d:"Java is a platform-independent programming language"
        },
        correctAnswer:"d"
    },
    {
        question:"2) Which one of the following is not a Java feature?",
        answers:{
            a:"Object-oriented",
            b:"Use of pointers",
            c:"Portable",
            d:"Dynamic and Extensible"
        },
        correctAnswer:"b"
    },
    {
        question:"3) What will be the output of the following Java code? class increment { public static void main(String args[]){ int g = 3;System.out.print(++g * 8);}}",
        answers:{
            a:"32",
            b:"33",
            c:"24",
            d:"25"
        },
        correctAnswer:"a"
    },
    {
        question:"4) Which of the following is not an OOPS concept in Java?",
        answers:{
            a:"Polymorphism",
            b:"Inheritance",
            c:"Compilation",
            d:"Encapsulation"
        },
        correctAnswer:"c"
    },
    {
        question:"5) What is the extension of compiled java classes?",
        answers:{
            a:".txt",
            b:".js",
            c:".class",
            d:".java"
        },
        correctAnswer:"c"
    },
    {
        question:"6) Which of these keywords is used to define interfaces in Java?",
        answers:{
            a:"intf",
            b:"Intf",
            c:"Interface",
            d:"interface"
        },
        correctAnswer:"d"
    },
    {
        question:"7) Which one of the following is not an access modifier?",
        answers:{
            a:"Protected",
            b:"Void",
            c:"Public",
            d:"Private"
        },
        correctAnswer:"b"
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