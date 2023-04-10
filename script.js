// 翻牌
const flip = document.querySelectorAll('.memory-card');
// 難易度
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');

// 初始設定
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cardNum = 14;

alert("歡迎遊玩，預設為普通模式。")

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if(!hasFlippedCard) {
    // 第一次點擊
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  // 第二次點擊
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const firstCardAlt = firstCard.querySelector('.front-face').alt;
  const secondCardAlt = secondCard.querySelector('.front-face').alt;
  // 檢查是否匹配
  let isMatch = firstCardAlt === secondCardAlt;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  // 匹配成功，移除點擊事件
  firstCard.closest('.show').classList="hide";
  secondCard.closest('.show').classList="hide";
  resetBoard();
}

function unflipCards() {
  // 鎖定遊戲版面
  lockBoard = true;
  // 非匹配卡片翻回去
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 500);
}

function resetCard(){
  try{
    for(let i=0;i<40;i++){
      document.querySelector(".hide").classList="none";
    }}catch{}finally{
      try{for(let i=0;i<40;i++){
        document.querySelector(".show").classList="none";
      }}catch{}finally{
        try{for(let i=0;i<40;i++){
          document.querySelector(".memory-card.flip").classList="memory-card";
        }}catch{}finally{
            for(let i=0;i<cardNum;i++){
            document.querySelector(".none").classList="show";}
          }
        }
      }
}

function difficultyChoose() {
  // 難易度選擇
  if(this.id === 'easy') {
    alert("切換為簡單模式。");
    document.querySelector("#difficulty").classList="memory-game-easy";
    cardNum = 16;
    resetCard();
    shuffle();
  } else if(this.id === 'normal') {
    alert("切換為普通模式。");
    document.querySelector("#difficulty").classList="memory-game-normal";
    cardNum = 28;
    resetCard();
    shuffle();
  } else if(this.id === 'hard') {
    alert("切換為困難模式。");
    document.querySelector("#difficulty").classList="memory-game-hard";
    cardNum = 40;
    resetCard();
    shuffle();
  }
}

function resetBoard() {
  // 重置遊戲變數
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  // 卡片
  const cards = document.querySelectorAll('.show');
  // 洗牌
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cardNum);
    card.style.order = randomPos;
  });
}

// 為每張卡片添加點擊事件
flip.forEach(card => card.addEventListener('click', flipCard));
// 難易度的點擊事件
easy.addEventListener('click', difficultyChoose);
normal.addEventListener('click', difficultyChoose);
hard.addEventListener('click', difficultyChoose);

shuffle();