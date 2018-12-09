/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- You can change predefined score of 100 in the input
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's next player's turn
-
*/

var  scores, roundScore, activePlayer, gamePlaying, countSix;

countSix = 0;
init();

//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector('#current-'+ activePlayer).textContent=  dice ;
//document.querySelector('#current-'+ activePlayer).innerHTML= '<em>'+ dice + '</em>';

//var x = document.querySelector('#score-0').textContent;

//console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function () {

    if(gamePlaying){

        var dice1 =Math.floor(Math.random()*6)+1;
        var dice2 =Math.floor(Math.random()*6)+1;

      //  var diceDOM = document.querySelector('.dice');
        document.getElementById('dice-1').style.display ='block';
        document.getElementById('dice-2').style.display ='block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        if(dice1 !== 1 &&dice2!==1){
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;



        }else{
            nextPlayer();

        }

  /*  if(dice ===6){
        countSix= countSix+1;
        if(countSix === 2) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            countSix = 0;
            nextPlayer()
        }else {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            countSix=1;

        }
    }else if(dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;



    }else{
            nextPlayer();

        }*/
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {






 if(gamePlaying){   //add current score ro global score
     scores[activePlayer]+=roundScore;
     //update th ui
     document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];


     var x = 0;
     x =     document.querySelector('.final-score').value;
     console.log(x);
     if(    x == 0){
         x=20;
     }else{
         x=x;
     }



     if(scores[activePlayer]>=x ){
         document.querySelector('#name-' + activePlayer).textContent= 'Winner!';
         //hide dice
        // document.querySelector('.dice').style.display = 'none';
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display= 'none';

         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;

     }else{
         nextPlayer();
     }

     console.log('hej');}


});

function nextPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer = 0;
    roundScore=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   // document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display= 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores =[0,0];
    roundScore=0;
    activePlayer= 0;
    gamePlaying = true;
   // document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display= 'none';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent= 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}


