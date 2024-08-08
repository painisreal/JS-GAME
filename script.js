const randnum = Math.random();
// console.log(randnum);
let ComputerMove = '';
let result = '';

function rock(){
    const name = "rock"
if (randnum >= 0 && randnum <0.3) {
    console.log('rock');
    console.log(randnum);
    ComputerMove = "Rock";    
      
}
else if (randnum>=0.3 && randnum<0.6){
    console.log('paper');
    console.log(randnum);
    ComputerMove = "Paper";    
    
}
else if (randnum>=0.6 && randnum<1){
    console.log('sciscor');
    console.log(randnum);
    ComputerMove = "Sciscor";
}
console.log(ComputerMove);
if (ComputerMove === 'Rock'){
    console.log('tie');
    result = "tie";
}
else if (ComputerMove === 'Paper'){
    console.log('You Lose');
    result = "you lose";
}
else if (ComputerMove === 'Sciscor'){
    console.log('You win'); 
    result = "You win";
}
alert(`You pick ${name}. Computer picked ${ComputerMove}. Result ${result}`)
location.reload(true)
}
function paper(){
    const name = "paper"
    if (randnum >= 0 && randnum <0.3) {
        console.log('rock');
        console.log(randnum);
        ComputerMove = "Rock";    
          
    }
    else if (randnum>=0.3 && randnum<0.6){
        console.log('paper');
        console.log(randnum);
        ComputerMove = "Paper";    
        
    }
    else if (randnum>=0.6 && randnum<1){
        console.log('sciscor');
        console.log(randnum);
        ComputerMove = "Sciscor";
    }
    console.log(ComputerMove);
    if (ComputerMove === 'Rock'){
        console.log('You win');
        result = "You win";
    }
    else if (ComputerMove === 'Paper'){
        console.log('Tie');
        result = "Tie";
    }
    else if (ComputerMove === 'Sciscor'){
        console.log('You lose'); 
        result = "You lose";
    }
    alert(`You pick ${name}. Computer picked ${ComputerMove}. Result ${result}`)
    location.reload(true)
    }
    function sciscor(){
        const name = "sciscor"
        if (randnum >= 0 && randnum <0.3) {
            console.log('rock');
            console.log(randnum);
            ComputerMove = "Rock";    
              
        }
        else if (randnum>=0.3 && randnum<0.6){
            console.log('paper');
            console.log(randnum);
            ComputerMove = "Paper";    
            
        }
        else if (randnum>=0.6 && randnum<1){
            console.log('sciscor');
            console.log(randnum);
            ComputerMove = "Sciscor";
        }
        console.log(ComputerMove);
        if (ComputerMove === 'Rock'){
            console.log('You lose');
            result = "You lose";
        }
        else if (ComputerMove === 'Paper'){
            console.log('You win');
            result = "you win";
        }
        else if (ComputerMove === 'Sciscor'){
            console.log('Tie'); 
            result = "Tie";
        }
        alert(`You pick ${name}. Computer picked ${ComputerMove}. Result ${result}`)
        location.reload(true)
        }