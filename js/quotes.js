const quotes = [
  {
    quote:
      "There are many in the world dying for a piece of bread. but there are many more dying for a little love.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Those who create are rare; those who cannot are numerous. Therefore, tha latter are stronger.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote: "Dig where the gold is unless you just need some exercise.",
    author: "John M. Capozzi",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
