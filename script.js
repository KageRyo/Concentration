// 卡片
const cards = document.querySelectorAll('.show');
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
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
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

function difficultyChoose() {
  // 難易度選擇
  if(this.id === 'easy') {
    document.querySelector("#difficulty").classList="memory-game-easy";
    cardNum = 8;
    try{
    for(let i=0;i<40;i++){
      document.querySelector(".show").classList="none";
    }}catch{}finally{
    for(let i=0;i<(cardNum*2);i++){
      document.querySelector(".none").classList="show";
    }
    shuffle();}
  } else if(this.id === 'normal') {
    document.querySelector("#difficulty").classList="memory-game-normal";
    cardNum = 14;
    try{
      for(let i=0;i<40;i++){
        document.querySelector(".show").classList="none";
      }}catch{}finally{
      for(let i=0;i<(cardNum*2);i++){
        document.querySelector(".none").classList="show";
      }
      shuffle();}
  } else if(this.id === 'hard') {
    document.querySelector("#difficulty").classList="memory-game-hard";
    cardNum = 20;
    try{
      for(let i=0;i<=40;i++){
        document.querySelector(".show").classList="none";
      }}catch{}finally{
      for(let i=0;i<(cardNum*2);i++){
        document.querySelector(".none").classList="show";
      }
      shuffle();}
  }
}
function resetBoard() {
  // 重置遊戲變數
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
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