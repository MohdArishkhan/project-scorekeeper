const p1but = document.querySelector('#p1but');
const p2but = document.querySelector('#p2but'); 
const resetbut = document.querySelector('#resetbut');
const p1displayscore = document.querySelector('#p1displayscore');
const p2displayscore = document.querySelector('#p2displayscore');
const winningscorechange = document.querySelector('#selectbut');

let p1score = 0;
let p2score = 0;
let winningscore = 3; 
let isgameover = false;

p1but.addEventListener('click', function () {
    if (!isgameover) {
        p1score += 1;
        if (p1score === winningscore) {
            isgameover = true;
            p1displayscore.classList.add('winner');
            p2displayscore.classList.add('loser');
            p1but.disable=true;
            p2but.disable=true;
        } 
        p1displayscore.textContent = p1score;        
    }
});

p2but.addEventListener('click', function () {
    if (!isgameover) {
        p2score += 1;
        if (p2score === winningscore) {
            isgameover = true;
            p2displayscore.classList.add('winner');
            p1displayscore.classList.add('loser');
            p1but.disable=true;
            p2but.disable=true;
        } 
        p2displayscore.textContent = p2score;
        
    }
    
});

resetbut.addEventListener('click', reset);

winningscorechange.addEventListener('change', function() {
    // Parse and set new winning score from dropdown
    winningscore = parseInt(this.value); 
    reset(); // Reset the game when the winning score is changed
});

function reset() {
    isgameover = false; // Ensure game state is reset
    p1score = 0;
    p2score = 0;
    p1displayscore.textContent = 0;
    p2displayscore.textContent = 0;
    p1displayscore.classList.remove('winner','loser');
    p2displayscore.classList.remove('winner','loser');
    p1but.disable=false;
    p2but.disable=false;
}
