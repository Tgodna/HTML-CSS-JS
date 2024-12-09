// Array of meme image URLs
const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
  ];
  
  // Array of witty captions
  const captionsArray = [
    "I'm not lazy, I'm on energy saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm not a smartass, I'm a skilled trained professional in pointing out the obvious and I speak fluent sarcasm.",
    "I'm not short, I'm fun-sized.",
    "When life gives you lemons, make lemonade... and throw it at people."
  ];
  
  // Select the <img>, <h2>, and <button> elements by their IDs
  const randomMeme = document.getElementById("random-meme");
  const randomCaption = document.getElementById("random-caption");
  const generatorButton = document.getElementById("generator-button");
  
  // Ensure the button exists
  if (!generatorButton) {
    console.error('Button not found!');
  }
  
  // Add a "click" event listener to the button
  generatorButton.addEventListener("click", function() {
    // Generate random indexes for meme and caption arrays
    const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
    const randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);
  
    // Change the image source to a random meme
    randomMeme.src = memeArray[randomMemeIndex];
  
    // Change the text content of the caption to a random caption
    randomCaption.innerText = captionsArray[randomCaptionIndex];
    
    // Log to ensure it's working
    console.log('Meme and caption updated!');
  });
  