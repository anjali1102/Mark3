var chalk= require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

console.log(chalk.red.bold.bgRedBright("      🧙‍♂️       HOW MUCH YOU KNOW ANJALI QUIZ !!     🧙‍♂️           \n\n"))
console.log(chalk.red.bold.bgBlackBright("    RULES OF QUIZ : \n"));


console.log(chalk.red.bold.bgGreenBright("    CORRECT ANSWER :  10 point Gain 🔼 "))
console.log(chalk.red.bold.bgGreenBright("    WRONG ANSWER :  0 point Loss 🔻 \n"))

//data of high score
var highScore=[
  {
    name: "Anju",
    score: '110'

  },{
    name: "Sweety",
    score: '100'
  },
]


var userName = readlineSync.question(chalk.blue.bold("What's your name ? "));

console.log(chalk.magenta.bold.bgGreenBright('Welcome ' + userName + ' to the game 😀 !!\n'));

//play function

function play(question, answer) {
	var userAnswer = readlineSync.question(chalk.red.bold.bgGreenBright(question));

	if (userAnswer.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.green.bold.bgBlackBright('right !'));
		score = score + 1;
	} else {
		console.log(chalk.red.bold.bgRedBright('wrong !'));
	}
	console.log(chalk.green.bold.bgBlackBright('current score : ', score));
	console.log('\n\n');
}

//arrays of object
var questions = [
	{
		question: 'Where do I live ? \n',
		answer: 'Uttar Pradesh'
	},
	{
		question: 'My Favourite colour is ? \n',
		answer: 'Black'
	},
	{
		question: 'My College is IIT ? \n',
		answer: 'No'
	},
	{
		question: 'Am I a topper ? \n',
		answer: 'No'
	},
	{
		question: 'Am I punctual in college classes ? \n',
		answer: 'No'
	},
	{
		question: 'Am I beautiful ? \n',
		answer: 'Yes'
	},
	{
		question: 'Where Do I work ? \n',
		answer: 'Umemployed'
	},
	{
		question: 'In which month did I born ? \n',
		answer: 'February'
	},
	{
		question: 'Do I love Dogs ? \n',
		answer: 'No'
	},
	{
		question: 'Do I love sweets ? \n',
		answer: 'Yes'
	},
	{
		question: 'Do I play games ? \n',
		answer: 'No'
	}
];


for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	play(currentQuestion.question, currentQuestion.answer);
}

function showScore(){
  console.log(chalk.yellow.bold(' 🤯 ' + userName + ' Your Score is ' + score + ' !!!!\n'));
  highScore.map(score=> console.log(chalk.black.bold.bgRedBright("High scorers are  :  "+score.name, " : ", score.score)));
  console.log(chalk.red.bold.bgRedBright("\nSend me the snapshot if you beat the high scorers, I will update !\n"));

  

}
 showScore();

