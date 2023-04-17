const readLine=require('readline-sync');


readLine.question('Ask the magic 8 ball a question: ');

let answerList = ['yes','It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Signs point to yes','Reply hazy,try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate abd ask again','Dont count on it','My reply is no','my sources say no','Outlook not so good','very doubtful'];
let randomNum = Math.floor(Math.random()*answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);