const quotes = [
    {
        quote: "사는 게 힘들다고 말하면, 모두가 그렇다고 대답했다. 그러니까, 우리 모두 잘 살아낸 것이다.",
        author: "『모순』 – 양귀자",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius (공자)",
    },
    {
        quote: "Enthusiasm is common. Endurance is rare.",
        author: "『Grit (그릿)』 – Angela Duckworth",
    },
    {
        quote: "Success is not a random act. It arises out of a predictable and powerful set of circumstances and opportunities.",
        author: "『Outliers (아웃라이어)』 – Malcolm Gladwell",
    },
    {
        quote: "You don't have to be a genius. You just have to be yourself.",
        author: "『Show Your Work』 – Austin Kleon",
    },
    {
        quote: "Set your mind on a definite goal and observe how quickly the world stands aside to let you pass.",
        author: "『Think and Grow Rich』 – Napoleon Hill",
    },
    {
        quote: "있는 그대로의 나를 사랑하는 것이 가장 어려운 일임을, 이제야 안다.",
        author: "『너는 너로 살아도 괜찮아』 – 김수현",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote + "\n -";
author.innerText = todaysQuote.author;