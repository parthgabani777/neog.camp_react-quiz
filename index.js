const ch = require('chalk');
const readline = require('readline-sync');

var score = 0;

let highscore =[
      {
        name:"parth",
        score:5
      },
      {
        name:"gopal",
        score:2
      }
];

var questions = [
    {
        question:"What is ReactJS?",
        ans:"b",
        options:["server side framework","client side library","client side framework","server side library"]
    },
    {
        question:"In React what is used to pass data to a component from outside?",
        ans:"c",
        options:["setState","render with arguments","props","PropTypes"]
    },
    {
        question:"How can you access the state of a component from inside of a member function?",
        ans:"d",
        options:["this.getState()","this.values","this.prototype.stateValue","this.state"]
    },
    {
        question:"ReactJS uses _____ to increase performance",
        ans:"b",
        options:["Original DOM","Virtual DOM","HTML DOM","None of above"]
    },
    {
        question:"Who Develop React.js?",
        ans:"b",
        options:["Apple","Facebook","Twitter","Google"]
    },
    {
        question:"Name the function used to change the state of react component",
        ans:"a",
        options:["this.setState","this.setChangeState","this.State{}","Both A and B"]
    },
    {
        question:"What function allows you to render React content in an HTML page?",
        ans:"c",
        options:["React.mount()","ReactDOM.start()","ReactDOM.render()","React.render()"]
    },
    {
        question:"How many elements does a react component return?",
        ans:"a",
        options:["1","2","3","Multiple"]
    },
    {
        question:"React considers everything as ____",
        ans:"c",
        options:["Objects","Elements","Components","User interface"]
    },
    {
        question:"ES6 stands for ?",
        ans:"a",
        options:["ECMAScript 6","ECMA 6","ECMAJavaScript 6","EJavaScript 6"]
    }
];

console.log(ch.bold.hex("16BAC5")("React Quiz"));
let username = readline.question("Enter name: ");
console.log("Welcome, "+username);
console.log("\n==============================================\n");

questions.forEach(function(value,index){
    console.log(ch.bold.hex("16BAC5")((index+1)+". "+value.question));
    value.options.forEach(function(value,index){
        console.log(String.fromCharCode(97+index)+". "+value);
    });
    
    var ans = readline.question("\nAnswer: ");

    if(ans.toLowerCase() == value.ans){
        score++;
        console.log(ch.greenBright("Right Answer"));
    }
    else{
        console.log(ch.redBright("Wrong Answer"));
        console.log(ch.greenBright("Right Answer is "+value.ans));

    }
    console.log("Current Score: "+ch.greenBright(score));
    console.log("\n==============================================\n");
});

highscore.every((value) => {
    if(score>value.score){
        console.log(ch.greenBright("You have beat High Score."));
        highscore.push({'name':username,'score':score});
        return false;
    }
});

console.log(ch.hex("16BAC5")("Thank you for taking quiz"));