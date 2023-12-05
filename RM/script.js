

//------------------ Asking Name Of User ---------------------

var askName = prompt("Hi insert you name please : ");


// ----------------- Setting it Up in Sol Page -------------------

var userName = document.getElementById('userName');

userName.innerHTML = `${askName}`;


//verifying if the user typed his name If not the default value will be " User ".

if(askName.length === 0){ 
    askName = "User"
}
// -------------- OPEN AND CLOSE MENU 4 SMALL SCREENS -----------------

var navLinks = document.getElementById('navLinks');

// SHOW MENU FOR SMALL SCREENS

function showMenu(){
    navLinks.style.right = "0";

}
// HIDE MENU FOR SMALL SCREENS

function hideMenu(){
    navLinks.style.right = "-200px";
    
}

var score = 0;
var quizSubmitted = false;

function checkAnswers(correctAnswers, questionName, questionNumber) {
        // Get all selected checkboxes
        var selectedChoices = document.querySelectorAll(`input[name="${questionName}"]:checked`);

        // Check if the correct answer is among the selected choices
        var isCorrect = Array.from(selectedChoices).every(choice => correctAnswers.includes(choice.value));
        if(selectedChoices.length < 1 ){
            if(questionName === 'q5'){
                score += 2;
            }else{
                score += 1;
            }
        }
        else if (isCorrect) {
            score += 2; // +2 points for correct answer
        } else {
            score -= 1; // -1 point for incorrect answer
        }
    }

function checkAllAnswers() {
        // Reset score before checking all answers
        score = 0;

        // Call checkAnswers for each question
        checkAnswers(['cristiano'], 'q1', 1);
        checkAnswers(['1902'], 'q2', 2);
        checkAnswers(['bernabeu'], 'q3', 3);
        checkAnswers(['14',], 'q4', 4);
        checkAnswers([], 'q5', 5);
        checkAnswers(['nacho'], 'q6', 6);
        checkAnswers(['zizou'], 'q7', 7);
        checkAnswers(['kroos', 'vini'], 'q8', 8);
        checkAnswers(['madrid'], 'q9', 9);
        checkAnswers(['losBlancos'], 'q10', 10);

        // Prompt for the trcky question (Question 5)
        if (!document.querySelector('input[name="q5"]:checked')) {
            var trickyAnswer = prompt("There is a Tricky Question is These Quiz that has no correct answer type its number :(e.g., 3):");
            if (trickyAnswer === '5') {
                console.log('GG');
            } else {
                score -= 1; // -1 point for choosing wrong questions's number
            }
        }

        if (score < 8) {
            alert(`Hi ${askName} \n Your score is : ${score} Bad knowledge of Real Madrid you should watch for more! \n Thanks For passing the quiz see you next time bye !`);
        } else if(score >= 8 && score < 12){
            alert(`Hi ${askName} \n Your score is : ${score} Prety good knowledge of Real Madrid :| \n Thanks For passing the quiz see you next time bye !`);
        }else if(score >= 12 && score < 16){
            alert(`Hi ${askName} \n Your score is : ${score} Good knowledge of Real Madrid :) \n Thanks For passing the quiz see you next time bye !`);
        }else if(score > 16){
            alert(`Hi ${askName} \n Your score is : ${score} Exelent knowledge of Real Madrid :D \n Thanks For passing the quiz see you next time bye !`);
        }
        // Enable the Solutions button after quiz submitted
        document.getElementById('solutionsBtn').disabled = false;

        quizSubmitted = true;
    }

function resetQuiz() {

        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);

        score = 0;

        // Disable the Solutions button again after resetting the quiz
        document.getElementById('solutionsBtn').disabled = true;

        quizSubmitted = false;

        alert("Quiz reset. Start again!");
    }




/*
function showSolutions() {
        // Show the solutions page only if the quiz has been submitted
        if (quizSubmitted) {
            var solutionsPage = document.getElementById('solutionsPage');
            solutionsPage.style.display = 'block';
        }
    }

*/

