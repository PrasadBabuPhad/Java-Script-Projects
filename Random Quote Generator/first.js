const quotes=[
  "Dream big. Start small. Act now.",
  "Progress is progress, no matter how small.",
  "Your only limit is you.",
  "Do it with passion or not at all.",
  "Small steps every day.",
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish.",
  "Success is built on consistency.",
  "Focus on the goal, not the obstacles.",
  "Great things take time.",
  "Be stronger than your excuses.",
  "You are what you do daily.",
  "Work in silence, let success speak.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline creates freedom.",
  "Think less, do more.",
  "You become what you believe.",
  "Turn pain into power.",
  "Better days are coming.",
  "Every day is a second chance."
];

const button =document.querySelector('button');
const quote =document.querySelector('h1');
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);

    quote.textContent=quotes[index];
})