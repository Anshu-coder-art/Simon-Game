let body=document.querySelector("body");
let h2=document.querySelector("h2");
let btns=document.querySelectorAll(".btn");

let gameSeq=[];
let userSeq=[];

let level=0;
let gameStarted=false;


document.addEventListener("keypress",()=>{
    if(gameStarted==false){
        level++;
        h2.innerText=`Level : ${level}`;
        gameStarted=true;
        gameStart();
    }
})


function gameStart(){
    
    let random=Math.floor(Math.random()*4);
    // console.log(random);

    let randomBtn=btns[random];
    // console.log(randomBtn); 
    randomBtn.classList.add("white");
    setTimeout(function(){
        randomBtn.classList.remove("white");
    },50);

    gameSeq.push(randomBtn.id);
    // console.log(gameSeq);

}

function clicking(btn){
    btn.classList.add("grey");
    setTimeout(()=>{
        btn.classList.remove("grey");
    },100);
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(gameStarted==false){
            return
        }
        clicking(btn);
        userSeq.push(btn.id);
        for(let i=0;i<userSeq.length;i++){
            if(gameSeq[i]!=userSeq[i]){
                body.classList.add("color");
                setTimeout(function(){
                    body.classList.remove("color");
                },300);

                gameSeq=[];
                userSeq=[];
                gameStarted=false;
                h2.innerHTML=`Game Over! Your score was: ${level}<br> Press any key to start the game`;
                level=0;
                return;
            }
        }
        if(userSeq.length==gameSeq.length){
            level++;
            h2.innerText=`Level : ${level}`;
            userSeq=[];
            setTimeout(()=>{
                gameStart();
            },200);
        }
    })
})
    