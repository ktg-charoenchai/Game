const quizData = [
  { title: "บุคคลในภาพเเสดงกริยาอันใด", image: "./Picture_1.jpg", choices: ["ตะโกน", "ดีใจ", "คำราม", "ตกใจ"], answers: [2] },
  { title: "บุคคลในภาพคือผู้ใด🤣", image: "./Picture_2.jpg", choices: ["152 cm", "เเพน", "ปลานกเเก้ว", "เตี้ย"], answers: [1] },
  { title: "บุคคลในภาพ เลขที่เท่าไหร (ล่าสุด)🤭", image: "./Picture_3.jpg", choices: ["26", "27", "28", "29"], answers: [2] },
  { title: "พี่ชายทำอาชีพอะไร🗣🔥", image: "./Picture_4.jpg", choices: ["นักเรียน", "นักเเสดง", "นักบิน", "ประธานบริษัท"], answers: [0] },
  { title: "ลูกพี่กูหล่อไหม🥰", image: "./Picture_5.jpg", choices: ["หล่อ🥰", "ไม่😡", "เเม่งเก😔", "อันนี้เอ๋อ✅"], answers: [2,3] },
  { title: "คนนี้หล่อไหม🤭", image: "./Picture_6.jpg", choices: ["หล่อ🤭", "หล่อ🤭", "หล่อ🤭", "หล่อ🤭"], answers: [0, 1, 2,3] },
  { title: "บุคคลในภาพคือผู้ใด🤨", image: "./Picture_7.png", choices: ["วรีวรรณ์", "วีรวรรณ์", "วรรวรีณ์", "ววรรรีณ์"], answers: [0] },
  { title: "ในภาพ มีผู้ชายทั้งหมดกี่คน😲", image: "./Picture_8.jpg", choices: ["6 คน", "7 คน", "8 คน", "ไม่มีสักคน มีเเต่เก🥵"], answers: [3] },
  { title: "เพลงอะไร😌", type:"audio", audio: "./Video_2.mp3", choices: ["เพลงชาติไทย", "ล้มเเชมป์", "มาร์ชบุญวาทย์", "จำเลยรัก"], answers: [1] },
  { title: "นี้ห้องอะไร😮", image: "./Picture_10.png", choices: ["322", "644", "732", "ความทรงจำเเรก😥"], answers: [0,3] },

  { title: "อันนี้วิชาอะไร🤔", image: "./Picture_11.jpg", choices: ["เกษตร", "เเนะเเนว", "งานประดิษฐ์", "ธุรกิจ"], answers: [1] },
  { title: "เพลงอะไรนะลืม😰", type:"audio", audio: "./Video_1.mp3", choices: ["เพลงชาติไทย", "จำเลยรัก", "ล้มเเชมป์", "มาร์ชบุญวาทย์"], answers: [1] },
  { title: "บุคคลในภาพคือผู้ใด😰", image: "./Picture_13.jpg", choices: ["Setter", "เฟียส", "ซอมบี้เด็ก", "งูดี"], answers: [0,1,2,3] },
  { title: "จงบอกสถานที่ในภาพ", image: "./Picture_14.jpg", choices: ["วิบุลพล 1", "ศูนย์กีฬา", "วิบุลพล 2", "ตึก 6"], answers: [0] },
  { title: "บุคคลในภาพคือผู้ใด👀", image: "./Picture_15.jpg", choices: ["ตุลย์", "เเว่นเขียว", "Big Ass", "ชยพล"], answers: [0, 1, 2,3] },
  { title: "ปลูกข้าวพันธุ์ไรกัน🌾", image: "./Picture_16.jpg", choices: ["กข 43", "กข 83", "กข 79", "กข 6"], answers: [1] },
  { title: "สเแตนสีไร (ตาไม่บอดสีเนอะ😔)", image: "./Picture_17.jpg", choices: ["สีฟ้า", "สีบานเย็น", "สีม่วง", "สีเเดง"], answers: [2] },
  { title: "บุคคลในภาพคือผู้ใด😮", image: "./Picture_18.jpg", choices: ["ภควัต ใหม่สืบ", "ภควัต ใหม่สิบ", "ภควัต ใหม้สิบ", "ภควัต ใหญ่สิบ"], answers: [0] },
  { title: "สิ่งมีชีวิตในภาพคืออะไร😌 ( By นันทภัค )", image: "./Picture_19.jpg", choices: ["มะม่วง", "มนุษย์", "ไดโนเสาร์", "มะม้าว"], answers: [1] },
  { title: "พี่ชายกำลังโฆษณาอะไร😰", image: "./Picture_12.jpg", choices: ["ดีมอลต์", "ไมโล", "โอวันติน", "โฟร์โมสต์"], answers: [2] },

  { title: "บุคคลในภาพคือผู้ใด🤨", image: "./Picture_20.jpg", choices: ["โทมัส", "ชิงฉ่าฉี่ชั้ว", "เช่งเช่ง", "ชิ่งช่งชาง"], answers: [2] },
  { title: "Serratus anterior inferior muscle อยู่ตรงไหนในร่างกาย ( By ธันยกร )", image: "./Picture_22.jpg", choices: ["ไม่รู้ เเล้วก็ไม่อยากรู้ด้วย🙄", "อยู่ในใจเทอไง😘", "ถามพ่อมึงดูสิ😔", "อยู่บริเวณด้านข้างลำตัว บริเวณซี่โครงช่วงล่างใต้รักแร้😎"], answers: [1,3] },
  { title: "เลขใดต่อไปนี้เหมาะสมกับภาพมากที่สุด😔(By วรีวรรณ์ )", image: "./Picture_23.jpg", choices: ["14", "59", "67", "69"], answers: [0] },
  { title: "สันจมูกบุคคลในภาพทำมุม กี่องศา กับ ใบหน้า 😭 ( By วรีวรรณ์ )", image: "./Picture_24.jpg", choices: ["30", "35", "40", "45"], answers: [1] },
  { title: "เหตุการณ์ในภาพอยู่ ณ ห้องใด 😰", image: "./Picture_25.jpg", choices: ["321", "322", "314", "315"], answers: [0] },
  { title: "บุคคลในภาพคือผู้ใด😰 ( By นันทภัค )", image: "./Picture_26.jpg", choices: ["กระทะ", "ขนมผิง", "โทมัส", "ตัว Secret"], answers: [1] },
  { title: "รูปนี้เกิดขึ้นในเหตุการใด 😌 ( By วรีวรรณ์ )", image: "./Picture_27.jpg", choices: ["เลี้ยงจบ ม.3", "เลี้ยงจบ ม.2", "เลี้ยงจบ ม.1", "เลี้ยงส่งให้ความปวดร้าวความเศร้าทำเอาเจ็บ"], answers: [0,3] },
  { title: "คนนี้มีฟันกี่ซี่ 😭 ( By วรีวรรณ์ )", image: "./Picture_28.jpg", choices: ["24/7", "32/32", "6/32", "7-11"], answers: [2] },
  { title: "แป้งกำลังทำอะไร 😰 ( By วรีวรรณ์ )", image: "./Picture_29.jpg", choices: ["แลบลิ้นเพื่มดาเมจ", "จีบเฟย์", "ขากเสลด", "กรีดร้อง"], answers: [0,1] },
  { title: "คนนี้ใคร🤔", image: "./Picture_30.jpg", choices: ["คนทำเว็บ😥", "เอ๋ออีกตัว✅", "สุดหล่อ😎", "ใครไม่รู้😥"], answers: [0,1] }
];

let currentQuestion = 0;
let score = 0;

const questionTitle = document.getElementById("questionTitle");
const questionImage = document.getElementById("questionImage");
const questionAudioContainer = document.getElementById("questionAudioContainer");
const questionAudio = document.getElementById("questionAudio");
const choicesDiv = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const questionNum = document.getElementById("questionNum");

const resultDiv = document.getElementById("result");
const finalScoreEl = document.getElementById("finalScore");
const scoreMessage = document.getElementById("scoreMessage");
const nextPageBtn = document.getElementById("nextPageBtn");
const restartBtn = document.getElementById("restartBtn");

const correctMessages = ["โหดๆ🔥", "เก่งว่ะ 👏", "เกจริงๆ😨", "เริ่ดดดเลยล่ะ🤩", "จริงพี่👍", "ของจริงๆ 🔥", "เอาว่ะ🗣🔥"];
const wrongMessages = ["ใช่เอ่อ🤨", "กระจอกจริงๆ😉", "มั่วละมึงอะ😡", "ว้ายยยย😜", "อ่อนจริงๆ😊", "🤡", "ผิดได้ไงน้อง😥", "🤭"];

function getRandomMessage(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function stopAudio() {
  if (questionAudio) {
    questionAudio.pause();
    questionAudio.currentTime = 0;
  }
}

function loadQuestion() {
  stopAudio();

  const q = quizData[currentQuestion];
  
  questionTitle.textContent = `ข้อ ${currentQuestion + 1}: ${q.title}`;
  questionNum.textContent = `${currentQuestion + 1}`;

  questionImage.style.display = "none";
  questionAudioContainer.style.display = "none";
  feedback.textContent = "";
  feedback.className = "";
  nextBtn.disabled = true;
  choicesDiv.innerHTML = "";

  if (q.type === "audio" || q.audio) {
    questionAudioContainer.style.display = "block";
    questionAudio.src = q.audio;
    questionAudio.load();
  } else if (q.image) {
    questionImage.style.display = "block";
    questionImage.src = q.image;
  }

  let shuffled = [...q.choices];
  shuffleArray(shuffled);

  shuffled.forEach((text) => {
    const originalIndex = q.choices.indexOf(text);
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = text;
    btn.dataset.index = originalIndex;

    btn.addEventListener("click", () => selectAnswer(btn, originalIndex, q));
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, selectedIndex, q) {
  const allButtons = choicesDiv.querySelectorAll(".choice-btn");
  allButtons.forEach(btn => btn.disabled = true);

  const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answers];
  const isCorrect = correctAnswers.includes(selectedIndex);

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    feedback.textContent = getRandomMessage(correctMessages);
    feedback.className = "correct";
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    feedback.textContent = `${getRandomMessage(wrongMessages)} คำตอบคือ: `;
    const correctTexts = correctAnswers.map(i => q.choices[i]);
    feedback.textContent += correctTexts.join(" หรือ ");
    feedback.className = "wrong";

    allButtons.forEach(btn => {
      if (correctAnswers.includes(parseInt(btn.dataset.index))) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  stopAudio();
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    stopAudio();
    showResult();       
  }
});

function showResult() {
  document.getElementById("question-area").style.display = "none";
  resultDiv.style.display = "block";     

  finalScoreEl.textContent = `${score} `;

  let msg = "";
  if (score >= 28) msg = "โหดจริง 🔥";
  else if (score >= 24) msg = "ได้อยู่😎";
  else if (score >= 20) msg = "เริ่มเเปลกๆละ 😥";
  else if (score >= 15) msg = "กูว่าไม่ใช่ละ 😔";
  else msg = "มันยากหรอ😔";

  scoreMessage.textContent = msg;
}

nextPageBtn.addEventListener("click", () => {
  stopAudio();
  window.location.href = "https://ktg-charoenchai.github.io/BWS-Sci-tech-gen-1-student-Home/";
});

restartBtn.addEventListener("click", () => {
  stopAudio();
  currentQuestion = 0;
  score = 0;
  resultDiv.style.display = "none";
  document.getElementById("question-area").style.display = "block";
  loadQuestion();
});

loadQuestion();
