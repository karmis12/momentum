const quotes=[
    {
        quote:"a",
        author:"abc"
    },
    {
        quote:"b",
        author:"bcd"
    },
    {
        quote:"c",
        author:"cde"
    },
    {
        quote:"d",
        author:"def"
    },
    {
        quote:"e",
        author:"efg"
    },
    {
        quote:"f",
        author:"fgi"
    },
    {
        quote:"g",
        author:"ghi"
    },
    {
        quote:"h",
        author:"hij"
    },
    {
        quote:"i",
        author:"ijk"
    }
]

const quote = document.querySelector(".quotes span:first-child"); 
const author = document.querySelector(".quotes span:last-child");


// Math.random(), Math.ceil(), Math.floor()  , ~~.length
const todaysQuote=quotes[Math.floor((Math.random()*quotes.length))]

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;