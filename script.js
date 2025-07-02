const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const noSound = document.getElementById('no-sound');
const loveGif = document.getElementById('love-gif');
const trollText = document.getElementById('troll-text');

const trollTexts = [
  "Em chắc chắn không à? 🥺",
  "Đừng từ chối nữa mà 😢",
  "Suy nghĩ lại đi màaaa 😳",
  "Thôi đừng bấm không nữa 😭",
  "Em phải là của anh",
  "Không thoát được đâu baby",
  "Anh biết em sẽ ấn CÓ mà",
  "Thiệt luôn đó hả ?",
  "Đừng mà",
  "Thử nghĩ lại nhaaa",
  "Cho anh cơ hội đi",
  "Nhấn CÓ đi màaaa 😍"
];

const trollGifs = [
  "cute1.gif",
  "cute2.gif",
  "cute3.gif",
  "cute4.gif",
  "cute5.gif",
  "cute6.gif",
  "cute7.gif",
  "cute8.gif",
  "cute9.gif",
  "cute10.gif",
  "cute11.gif",
  "cute12.gif"
];

// Chỉ 1 âm thanh KHÔNG
const noSoundFile = "no3.mp3";

let clickCount = 0;

yesBtn.addEventListener('click', () => {
  window.location.href = 'yes.html';
});

noBtn.addEventListener('click', () => {
  noSound.src = noSoundFile;
  noSound.play();

  clickCount++;
  const idx = clickCount % trollTexts.length;
  const gifIdx = clickCount % trollGifs.length;
  loveGif.src = trollGifs[gifIdx];
  trollText.textContent = trollTexts[idx];
  trollText.classList.remove('hidden');
});
