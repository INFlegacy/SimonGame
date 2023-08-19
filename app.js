let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let randClr=["red","purple","yellow","blue"];

let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started==false){
     console.log("game started");
     started=true;
   };
   levelUp();
});

function levelUp(){
  userSeq=[];
  level++
  h2.innerHTML=`level ${level}`;
 
  let randInd=Math.floor(Math.random()*3);
  let randFlash=randClr[randInd];
  let randBtn=document.querySelector(`.${randFlash}`);
  gameSeq.push(randFlash);
  
  gameFlash(randBtn);
};

function gameFlash(btn){
  btn.classList.add("gameFlash");
  setTimeout(function(){
  btn.classList.remove("gameFlash");
  },250);
};
function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function(){
  btn.classList.remove("userFlash");
  },250);
};

function btnPress(){
   let btn=this;
   userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1); 
};

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
  btn.addEventListener("click",btnPress);
};

 
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
      }; 
    }else{
      let body=document.querySelector("body");
      body.classList.add("red");
     setTimeout(function(){
        body.classList.remove("red");
     },150);
     h2.innerHTML=`Game Over Your Score is ${level}`
    };
};
 