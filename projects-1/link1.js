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
    msgContainer.innerHTML = `<br><div style="font-family:arial,sans-serif;">Quote: Practise is the key to success</div>`;
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
        question:"1) Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
        answers:{
            a:"39, 30",
            b:"41, 32",
            c:"42, 33",
            d:"43, 34"
        },
        correctAnswer:"c"
    },
    
    {
        question:"2) A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
        answers:{
            a:"12 days",
            b:"15 days",
            c:"16 days",
            d:"18 days"
        },
        correctAnswer:"b"
    },
    {
        question:"3) The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        answers:{
            a:"15",
            b:"16",
            c:"18",
            d:"25"
        },
        correctAnswer:"b"
    },
    {
        question:"4) A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
        answers:{
            a:"Rs. 8400",
            b:"Rs. 11,900",
            c:"Rs. 13,600",
            d:"Rs. 14,700"
        },
        correctAnswer:"d"
    },
    {
        question:"5) A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        answers:{
            a:"120 metres",
            b:"180 metres",
            c:"324 metres",
            d:"150 metres"
        },
        correctAnswer:"d"
    },
    
    {
        question:"6) A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:",
        answers:{
            a:"14 years",
            b:"19 years",
            c:"33 years",
            d:"38 years"
        },
        correctAnswer:"a"
    },
    {
        question:"7) A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
        answers:{
            a:"Rs. 500",
            b:"Rs. 1500",
            c:"Rs. 2000",
            d:"None of these"
        },
        correctAnswer:"c"
    },
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