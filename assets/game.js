

alert(document)

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}




var questions = [ 

	{ 
		Q1: "How many digits are in pie ",
	  	Answer:[ "infinite","99","7","Apple"]  
    },

    {
    	Q2: "How many times' does the Planet Earth fit into the Sun",
    	Answer:["1.3billion","5million","99999","Seven-Thausand-nine-hundred"]
    },	
    
    {  
    	Q3: "Who was responsible for the statement I think therefore I am ",
        Answer:["Descartes","Voltaire","Roosevelt","Obama"]
    },   


    {  Q4: "What the only CS language that can be used in the front-end and back-end of a website",
       Answer:["Javasript","Python","C++","Go"]

    },

] 

function trueFalse (){

	var count = 0


	showQuestion= setInterval(nextQuestion, 30000);

}

function nextQuestion() {

	var Q1= questions[0] ["Q1"]
    
    var Q2= questions[1] ["Q2"]
    
    var Q3= questions[2] ["Q3"]
    
    var Q4= questions[3] ["Q4"]

}

//create click handler for the Start Game button

console.log($(document))


$( document ).ready(function() {
    console.log( "ready!" );


	$("#startgame").on(click, function(){

	
   		alert( "clicked" );

	})




})











	