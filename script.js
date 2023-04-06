const sentences = [
  { english: 'She went to school yesterday morning.', sinhala: 'ඇය ඊයෙ උදේ පාසල් ගියා.' },
  { english: 'They go to work everyday.', sinhala: 'ඔවුන් හැමදාම වැඩට යනවා.' },
  { english: 'He usually plays football.', sinhala: 'ඔහු නිතරම පාපංදු ක්‍රිඩා කරනවා.' },
  { english: 'She has never gone to school.', sinhala: 'ඇය කවදාවත් පාසල් ගිහිල්ලා නෑ.' },
  { english: 'I have to face the exam on monday.', sinhala: 'මට සදුදට විභාගයකට මුහුන දෙන්න සිද්ද වෙනවා.' },
  { english: 'We have to wake up early in the morning.', sinhala: 'අපිට උදේ පාංදර අවදි වෙන්න සිද්ද වෙනවා.' },
  { english: 'With whom did she quarrel?', sinhala: 'ඇය කාත් එක්කද රංඩු උනේ.' },
  { english: 'What type of car does he have ?', sinhala: 'කුමන වර්ගයේ මෝටර් රථයක්ද ඔහුට තියෙන්නේ ?' },
  { english: 'My friends invited me for a party.', sinhala: 'මගේ මිතුරන් මට සාදයකට ආරාධනා කළා.' },
  { english: 'Can you understand this lesson?', sinhala: 'ඔබට මෙම පාඩම තේරුම් ගන්න පුලුවන්ද?' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct!';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://learnenglishsinhala.blogspot.com/2023/04/test.html";
});
