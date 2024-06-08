import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './Views');
app.set('view engine', 'ejs');

const questions = [
  { question: "Who was the first Prime Minister of India?", answer: "Jawaharlal Nehru" },
  { question: "Who is known as the 'Father of the Nation' in India?", answer: "Mahatma Gandhi" },
  { question: "What was the ancient name of the city of Varanasi?", answer: "Kashi" },
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "Which is the largest state in India by area?", answer: "Rajasthan" },
  { question: "Which river is considered the holiest in India?", answer: "Ganges" },
  { question: "What is the southernmost point of India?", answer: "Indira Point" },
  { question: "What is the classical dance form of Kerala?", answer: "Kathakali" },
  { question: "Which festival is known as the 'Festival of Lights'?", answer: "Diwali" },
  { question: "Who wrote the Indian national anthem?", answer: "Rabindranath Tagore" },
  { question: "Which Indian state is famous for its tea gardens?", answer: "Assam" },
  { question: "Who is the author of the book 'The God of Small Things'?", answer: "Arundhati Roy" },
  { question: "Which epic is considered one of the longest in the world and includes the Bhagavad Gita?", answer: "Mahabharata" },
  { question: "Which famous Indian author wrote 'Malgudi Days'?", answer: "R.K. Narayan" },
  { question: "Who was the first Indian to win the Nobel Prize in Literature?", answer: "Rabindranath Tagore" },
  { question: "What is the currency of India?", answer: "Indian Rupee" },
  { question: "Which city is known as the financial capital of India?", answer: "Mumbai" },
  { question: "What is the headquarters of the Reserve Bank of India located?", answer: "Mumbai" },
  { question: "Which industry is referred to as the 'Sunrise Industry' in India?", answer: "Information Technology (IT)" },
  { question: "Who is the current President of India (as of 2024)?", answer: "Droupadi Murmu" },
  { question: "Who is known as the 'Master Blaster' in Indian cricket?", answer: "Sachin Tendulkar" },
  { question: "Which Indian sportsperson is known for winning six world boxing championships?", answer: "Mary Kom" },
  { question: "Who was the first Indian to win an individual Olympic gold medal?", answer: "Abhinav Bindra" },
  { question: "Which Indian city is known as the 'Silicon Valley of India'?", answer: "Bengaluru" },
  { question: "Which monument is known as the symbol of love in India?", answer: "Taj Mahal" },
  { question: "What is the traditional dress for men in Punjab?", answer: "Kurta and Pajama" },
  { question: "Which Indian city hosts the Kumbh Mela, one of the largest religious gatherings in the world?", answer: "Prayagraj" },
  { question: "Who composed the Indian national song 'Vande Mataram'?", answer: "Bankim Chandra Chattopadhyay" },
  { question: "Which Indian state is known as the 'Land of Five Rivers'?", answer: "Punjab" },
  { question: "Who was the first woman Prime Minister of India?", answer: "Indira Gandhi" },
  { question: "Which Indian city is famous for its Mysore Palace?", answer: "Mysore" },
  { question: "Who wrote the famous Indian epic 'Ramayana'?", answer: "Valmiki" },
  { question: "What is the national flower of India?", answer: "Lotus" },
  { question: "Which Indian scientist is known as the 'Missile Man of India'?", answer: "APJ Abdul Kalam" },
  { question: "Who is the author of the book 'The White Tiger'?", answer: "Aravind Adiga" },
  { question: "Which Indian state is known for the Sun Temple at Konark?", answer: "Odisha" },
  { question: "Who was the first Indian woman to win an Olympic medal?", answer: "Karnam Malleswari" },
  { question: "What is the currency of Pakistan?", answer: "Pakistani Rupee" },
  { question: "Which Indian city is known for the Victoria Memorial?", answer: "Kolkata" },
  { question: "Who is known as the 'Nightingale of India'?", answer: "Sarojini Naidu" },
  { question: "What is the national animal of India?", answer: "Tiger" },
  { question: "Which Indian state is known as the 'Land of Festivals'?", answer: "Uttar Pradesh" },
  { question: "Who was the first Indian woman to win the Nobel Prize?", answer: "Mother Teresa" },
  { question: "Which Indian language is written in the Devanagari script?", answer: "Hindi" },
  { question: "What is the name of India's highest civilian award?", answer: "Bharat Ratna" },
  { question: "Who founded the Maurya Empire in ancient India?", answer: "Chandragupta Maurya" },
  { question: "Which Indian city is known as the 'Pink City'?", answer: "Jaipur" },
  { question: "Who composed the Indian national anthem 'Jana Gana Mana'?", answer: "Rabindranath Tagore" },
  { question: "What is the national sport of India?", answer: "Field Hockey" },
  { question: "Which Indian state is known as the 'Land of Rising Sun'?", answer: "Arunachal Pradesh" },
  { question: "Who is known as the 'Iron Man of India'?", answer: "Sardar Vallabhbhai Patel" },
  { question: "Which Indian scientist won the Nobel Prize in Physics in 1930?", answer: "C. V. Raman" },
  { question: "Which Indian city is famous for its Charminar monument?", answer: "Hyderabad" },
  { question: "Who was the first Indian to go into space?", answer: "Rakesh Sharma" },
  { question: "Which Indian state is known as the 'Land of the Gods'?", answer: "Uttarakhand" },
  { question: "Who is known as the 'Grand Old Man of India'?", answer: "Dadabhai Naoroji" },
  { question: "What is the national bird of India?", answer: "Indian Peacock" },
  { question: "Who is known as the 'Nightangle of India'?", answer: "Lata Mangeshkar" },
  { question: "Which Indian city is famous for its Hawa Mahal?", answer: "Jaipur" },
  { question: "Who was the first Indian woman to win a Nobel Prize?", answer: "Mother Teresa" },
  { question: "Which Indian state is known as the 'Land of the Gods'?", answer: "Uttarakhand" },
  { question: "Who is known as the 'Missile Man of India'?", answer: "APJ Abdul Kalam" },
  { question: "Which Indian city is known for its Meenakshi Temple?", answer: "Madurai" },
  { question: "Who composed the Indian national song 'Vande Mataram'?", answer: "Bankim Chandra Chattopadhyay" },
  { question: "What is the capital of West Bengal?", answer: "Kolkata" },
  { question: "Who founded the Indian National Congress in 1885?", answer: "Allan Octavian Hume" },
  { question: "Which Indian state is known as the 'Land of White Orchids'?", answer: "Arunachal Pradesh" },
  { question: "Who is known as the 'Father of Indian Cinema'?", answer: "Dadasaheb Phalke" },
  { question: "Which Indian city is known as the 'City of Lakes'?", answer: "Udaipur" },
  { question: "Who wrote the famous Indian epic 'Mahabharata'?", answer: "Vyasa" },
  { question: "Which Indian state is known for the Golden Temple?", answer: "Punjab" },
  { question: "Who was the first Indian woman to climb Mount Everest?", answer: "Bachendri Pal" },
  { question: "What is the name of India's first satellite?", answer: "Aryabhata" },
  { question: "Which Indian city is known for the Red Fort?", answer: "Delhi" },
  { question: "Who was the first Indian to win an individual Olympic gold medal?", answer: "Abhinav Bindra" },
  { question: "Which Indian state is known as the 'Land of Spices'?", answer: "Kerala" },
  { question: "Who is known as the 'Father of Indian Constitution'?", answer: "B.R. Ambedkar" },
  { question: "Which Indian city is known as the 'City of Joy'?", answer: "Kolkata" },
  { question: "Who is the author of the book 'The Guide'?", answer: "R.K. Narayan" },
  { question: "Which Indian state is known as the 'Land of Temples'?", answer: "Tamil Nadu" },
  { question: "Who composed the Indian national anthem 'Jana Gana Mana'?", answer: "Rabindranath Tagore" },
  { question: "What is the national aquatic animal of India?", answer: "Ganges River Dolphin" },
  { question: "Which Indian city is known as the 'City of Dreams'?", answer: "Mumbai" },
  { question: "Who is known as the 'Father of Indian Space Program'?", answer: "Vikram Sarabhai" },
  { question: "Which Indian state is known for the Ajanta and Ellora caves?", answer: "Maharashtra" },
  { question: "Who was the first Indian to win the Booker Prize?", answer: "Arundhati Roy" },
  { question: "Which Indian state is known as the 'Land of High Passes'?", answer: "Jammu and Kashmir" }
];


function getRandomQuestion() {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return randomIndex;
} 

let x;

app.get("/", (req, res) => {
  x = getRandomQuestion();
  res.render("index", { question: questions[x].question});
});

app.use(express.static('public'));

app.post("/submit-question", (req, res) => {
  const question=questions[x];
  const userAnswer = req.body.answer.toLowerCase(); 
  const correctAnswer = question.answer.toLowerCase();
  if(userAnswer!=correctAnswer){
    res.render("wrong", { answer: questions[x].answer });
  }
  else{
    res.render("right");
  }
});


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Port number: ${port} is listening`);
});

app.get("/about", (req, res) => {
    res.render("about");
  });

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/source-code", (req, res) => {
  res.render("source_code");
});


app.post("/submit-contact", (req, res) => {
  const { name, email, comment } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Comment:", comment);
  res.send("Your message has been sent!");
});


