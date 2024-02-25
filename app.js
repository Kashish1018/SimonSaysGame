let gameSeq=[];
let userSeq=[];

let btns=['yellow','palevioletred','skyblue','lightgreen'];
let started=false;
let level=0;
let highestscore=0;
let h2=document.querySelector('h2');
let hs=document.getElementById('highest-score');

document.addEventListener('keypress',function(){
    if(started == false){
        console.log('game started');
        started= true;
    }
    levelUp();

});
function btnFlash(btn){
 btn.classList.add('Flash');
 setTimeout(function(){
    btn.classList.remove('Flash')
 },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random index 
    let random=Math.floor(Math.random()*3);
    let randomC=btns[random];
    let randombtn=document.querySelector(`.${randomC}`);
    // console.log(randombtn);
    // console.log(random);
    gameSeq.push(randomC);
    console.log(gameSeq);
    btnFlash(randombtn);

}
function check(index){
    //  console.log("curr level ",level);
    if(userSeq[index]==gameSeq[index]){
        // console.log('same value');
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp(),1000);
        }
        
        // console.log(userSeq);
    }
    else{
        if(level>highestscore){
            highestscore=level;
            hs.innerText=`Highest Score: ${highestscore}`;
        }
        h2.innerHTML=`Game over! Your score was <b>${level}</b> Press Any Key to start !`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150)
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    btnFlash(btn);

    userC=btn.getAttribute('id');
    userSeq.push(userC);
    check(userSeq.length-1);

}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}