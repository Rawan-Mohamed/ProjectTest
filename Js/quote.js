// Different Quotes 
var quotes = [
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
    },
    {
        quote: "In three words I can sum up everything I've learned about life it goes on.",
        author: 'Robert Frost'
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: 'Mark Twain'
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: 'Elbert Hubbard'
    },
    {
        quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: 'Lao Tzu'
    },
    {
        quote: "Do one thing every day that scares you.",
        author: 'Eleanor Roosevelt'
    },
    {
        quote: "You never have to change anything you got up in the middle of the night to write.",
        author: 'Saul Bellow'
    },
    {
        quote: "Accept yourself, love yourself, and keep moving forward.If you want to fly, you have to give up what weighs you down.",
        author: 'Roy T.Bennett, The Light in the Heart'
    },
];

//funcation to generate quotes
function generateNewQuote(){
 var randomQuote= Math.floor(Math.random()*quotes.length);
 document.getElementById("quote").innerHTML=`"${quotes[randomQuote].quote}"`;
 document.getElementById("author").innerHTML=`--${quotes[randomQuote].author}`;
}