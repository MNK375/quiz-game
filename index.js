const quiz = [
  {
    question: 'What language is spoken in Colombia?',
    answers: [ 'Englsih', 'Chinese', 'Spanish', 'French'],
    correct: 'Spanish'
  }, {
    question: 'How many continents are there on the earth?',
    answers: [ '7', '10', '8', '9'],
    correct: '7'
  }, {
    question: 'Which country is the biggest?',
    answers: ['Turkey', 'German','Russia','Italy' ],
    correct: 'Russia'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('Done');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('Correct!');
    score++;
  } else {
    $window.alert('Wrong!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = 'All quiz finished, your score is' + score + '/' + quizLen + '!';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}