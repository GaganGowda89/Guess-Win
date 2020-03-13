 var bets = [];

 function addBet(bet){
 	bets.push(bet);
 	console.log(" Bet Person " + bet.name);
 	console.log(" Bet value" + bet.value);
 }

 let generateRandom = () => {

 	return Math.floor(Math.random() * 1000 + 1)

 }

 let getWinner = () => {

 	let WinNum = generateRandom();
 	console.log("Random number is :" + WinNum);
 	let closest = 1001;
 	let curWinner = 0; //index into the bets array

    console.log("bets length" + bets.length);
 	for(var i=0; i< bets.length; i++){                   //p1 = 90        p2=78
 		
 		let diff = Math.abs(bets[i].value - WinNum);    //976-90 =886    976-78=898

 		if(diff < closest){
 			closest = diff;                            //closest=886      //
 			curWinner = i;                             //curwinner=1

 		}
 	}
 	return bets[curWinner];
 }


 



