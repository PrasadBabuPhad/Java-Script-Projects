const ZodiacSigns = [
    { sign: "Capricorn", from: [12, 22], to: [1, 19] },
    { sign: "Aquarius", from: [1, 20], to: [2, 18] },
    { sign: "Pisces", from: [2, 19], to: [3, 20] },
    { sign: "Aries", from: [3, 21], to: [4, 19] },
    { sign: "Taurus", from: [4, 20], to: [5, 20] },
    { sign: "Gemini", from: [5, 21], to: [6, 20] },
    { sign: "Cancer", from: [6, 21], to: [7, 22] },
    { sign: "Leo", from: [7, 23], to: [8, 22] },
    { sign: "Virgo", from: [8, 23], to: [9, 22] },
    { sign: "Libra", from: [9, 23], to: [10, 22] },
    { sign: "Scorpio", from: [10, 23], to: [11, 21] },
    { sign: "Sagittarius", from: [11, 22], to: [12, 21] }
];

// size 31
const compliments = [
    "You have a great sense of humor.",
    "Your smile is wonderful.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a great listener.",
    "You bring positive energy.",
    "People enjoy your presence.",
    "You think differently.",
    "You are reliable.",
    "You inspire others.",
    "You have leadership qualities.",
    "You are very kind.",
    "You have a sharp mind.",
    "You make people feel valued.",
    "You are hardworking.",
    "You never give up easily.",
    "You spread happiness.",
    "You are courageous.",
    "You handle situations wisely.",
    "You stay calm under pressure.",
    "You are trustworthy.",
    "You are emotionally strong.",
    "You adapt quickly.",
    "You have great patience.",
    "You stand for truth.",
    "You have a creative soul.",
    "You are intelligent.",
    "You think deeply.",
    "You care genuinely.",
    "You have a charming personality.",
    "You are unique."
];

// size 20
const victimCardCompliments = [
    "You're a true friend in need.",
    "People often take you for granted.",
    "You trust people easily.",
    "Be careful whom you trust.",
    "You give more than you receive.",
    "Your kindness is misunderstood.",
    "People don't always value you.",
    "You deserve better treatment.",
    "You are emotionally giving.",
    "Sometimes you get misunderstood.",
    "You sacrifice a lot for others.",
    "You deserve appreciation.",
    "You stay loyal even when hurt.",
    "Your intentions are pure.",
    "People misuse your goodness.",
    "You forgive easily.",
    "You put others before yourself.",
    "You are deeply emotional.",
    "You feel things intensely.",
    "You deserve genuine people."
];

// size 30
const recommendations = [
    "Feed a street dog and spread kindness.",
    "Chant Hanuman Chalisa.",
    "Help someone in need.",
    "Spend time with family.",
    "Practice gratitude daily.",
    "Learn a new skill.",
    "Smile at strangers.",
    "Meditate for peace.",
    "Exercise regularly.",
    "Drink more water.",
    "Help the poor.",
    "Feed a cow.",
    "Wake up early.",
    "Read spiritual books.",
    "Donate food.",
    "Be kind to yourself.",
    "Avoid negativity.",
    "Trust your intuition.",
    "Do charity work.",
    "Respect elders.",
    "Stay disciplined.",
    "Focus on self-growth.",
    "Help animals.",
    "Practice patience.",
    "Be honest.",
    "Avoid overthinking.",
    "Control anger.",
    "Stay positive.",
    "Improve communication.",
    "Believe in yourself."
];

// size 20
const predictions = [
    "You will become a successful businessperson.",
    "You may explore trading opportunities.",
    "Your creativity will help you get a good job.",
    "You will travel the world in the coming years.",
    "Exciting news is on the way.",
    "Your financial condition will improve.",
    "A big opportunity awaits you.",
    "You will achieve your goals.",
    "Success will come through hard work.",
    "You will gain respect in society.",
    "A new beginning is near.",
    "Your confidence will grow.",
    "You will overcome challenges.",
    "Happiness will find you soon.",
    "You will make wise decisions.",
    "Growth is guaranteed.",
    "Your career will stabilize.",
    "You will gain recognition.",
    "Luck will favor you.",
    "Your efforts will pay off."
];

function getZodiac(day, month) {
    for (let z of ZodiacSigns) {
        if (
            (month === z.from[0] && day >= z.from[1]) ||
            (month === z.to[0] && day <= z.to[1])
        ) {
            return z.sign;
        }
    }
    return "Unknown";
}

const form = document.getElementById("astroform");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!name || !surname || day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Please enter valid details.");
        return;
    }

    const zodiac = getZodiac(day, month);

    const resultText = `Hi ${name} ${surname},

Your Zodiac Sign: ${zodiac}

✨ Compliment: ${compliments[(day - 1) % compliments.length]}

💔 Reality Card: ${victimCardCompliments[year % victimCardCompliments.length]}

🧘 Recommendation: ${recommendations[(day * month) % recommendations.length]}

🔮 Prediction: ${predictions[(name.length * surname.length) % predictions.length]}
`;

    // document.getElementById("result").textContent = resultText;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultText;
    resultDiv.style.display = "block"; // 👈 SHOW RESULT

});


// const form=document.getElementById('astroform');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const name=document.getElementById('name').value;
//     const surname=document.getElementById('surname').value;
//     const day=parseInt(document.getElementById('day').value);
//     const month=parseInt(document.getElementById('month').value);
//     const year=parseInt(document.getElementById('year').value);

//     const text=`Hi ${name} ${surname}, Your Zodiac sign is ${ZodiacSigns[month-1]}
//     . ${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recomendations[(day*month)%30]}. ${predictions[(name.length*surname.length)%20]}`;

//     document.getElementById('result').textContent=text;
// })