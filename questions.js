var multChoice = document.getElementById("#answer_1")


var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'parentheses', 'curly brackets', 'square brackets'],
    answer: 'parentheses'
  },
  {
    title: 'Which built-in method calls a function for each element in the array?',
    choices: ['while()', 'loop()', 'forEach()', 'None of the above'],
    answer: 'forEach()'
  },
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    choices: ['<javascript>', '<script>', '<scripting>', '<js>'],
    answer: '<script>'
  },
  {
    title: 'How does a FOR loop start?',
    choices: ['for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)'],
    answer: 'for (i = 0; i <= 5; i++'
  }
];

// function quizQuestion() {

// }
/*When STARTQUIZ has been clicked, a function will present 5 different things: a question and 4 answers. 
when someone clicks on an answer, that string will be compared to the answer.
if the answer is incorrect,  text will show time will be subtracted
if the answer is correct, text will show.
the quiz will proceed to the next question

at the end of the quiz, an input field will allow for someone to record their name
their time remaining will be saved in tandem with this name

when someone clicks on view high scores, a record of names and scores will appear
*/