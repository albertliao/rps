function displayChoice() {
	document.getElementById("counter").style.display = "none";
	document.getElementById("choices").style.display = "block";

}
function printCountandWait(num) {
	
	var counter = 0;
	for (i=num;i>=0;i--) {

		//console.log(i);
		(function(i) {
    	window.setTimeout(function(counter)
    		{
    			if (i==0)
    			{
    				displayChoice();
    			}
    			else
    			{
      				console.log(i);
      				document.getElementById("counter_text").innerHTML = i.toString();
      			}
      		}, counter*1000);

    	counter += 1;
    	}(i));
	}
}

function startup() {
	//console.log("start!");
	window.opponent = randomOpponent();
	console.log("Opponent: "+opponent);
	document.getElementById("title").style.display = "none";
	document.getElementById("start_button_div").style.display = "none";
	document.getElementById("counter").style.display = "block";
	
	printCountandWait(3);
}

function outcomeTied()
{
	document.getElementById("outcome").style.display = "block";
	document.getElementById("outcome_text").innerHTML = "Draw!";
	document.getElementById("player_choice").innerHTML = window.player;
	document.getElementById("opponent_choice").innerHTML = window.opponent;
	document.getElementById("playerscore").innerHTML = window.playerScore.toString();
	document.getElementById("opponentscore").innerHTML = window.opponentScore.toString();
}

function outcomeLost()
{
	document.getElementById("outcome").style.display = "block";
	document.getElementById("outcome_text").innerHTML = "Defeat!";
	document.getElementById("player_choice").innerHTML = window.player;
	document.getElementById("opponent_choice").innerHTML = window.opponent;
	window.opponentScore+=1;
	document.getElementById("playerscore").innerHTML = window.playerScore.toString();
	document.getElementById("opponentscore").innerHTML = window.opponentScore.toString();
}

function outcomeWon()
{
	document.getElementById("outcome").style.display = "block";
	document.getElementById("outcome_text").innerHTML = "Victory!";
	document.getElementById("player_choice").innerHTML = window.player;
	document.getElementById("opponent_choice").innerHTML = window.opponent;
	window.playerScore+=1;
	document.getElementById("playerscore").innerHTML = window.playerScore.toString();
	document.getElementById("opponentscore").innerHTML = window.opponentScore.toString();
}

function choseRock()
{
	window.player = "Rock";
	document.getElementById("choices").style.display = "none";
	switch(window.opponent)
	{
		case "Rock":
			outcomeTied();
		break;
		case "Paper":
			outcomeLost();
		break;
		case "Scissors":
			outcomeWon();
		break;
	}
}

function chosePaper()
{
	window.player = "Paper"
	document.getElementById("choices").style.display = "none";
	switch(window.opponent)
	{
		case "Rock":
			outcomeWon();
		break;
		case "Paper":
			outcomeTied();
		break;
		case "Scissors":
			outcomeLost();
		break;
	}
}

function choseScissors()
{
	window.player = "Scissors";
	document.getElementById("choices").style.display = "none";
	switch(window.opponent)
	{
		case "Rock":
			outcomeLost();
		break;
		case "Paper":
			outcomeWon();
		break;
		case "Scissors":
			outcomeTied();
		break;
	}
}
function randomOpponent()
{
	var choices = ["Rock", "Paper", "Scissors"];
	var rand = Math.floor(Math.random()*3);
	return choices[rand];
}

function restart()
{
	document.getElementById("outcome").style.display = "none";
	startup();
}

function main()
{
	document.getElementById("start_button").onclick = startup;
	document.getElementById("rock").onclick = choseRock;
	document.getElementById("paper").onclick = chosePaper;
	document.getElementById("scissors").onclick = choseScissors;
	document.getElementById("restart").onclick = restart;
}

var player = "";
var opponent = "";
var playerScore = 0;
var opponentScore = 0;
window.onload = main;