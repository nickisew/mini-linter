const story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ["really", "very", "basically"];

const unnecessaryWords = ["extremely", "literally", "actually"];

console.log(story.length);

// Step 3
// There is an array of words that are unnecessary.
// Iterate over your array to filter out these words.
// Save the remaining words in an array called betterWords.

const unnecessary = function (filteredArray, unnecessaryWords) {
  return filteredArray.reduce(function (betterWords, word) {
    if (!unnecessaryWords.includes(word)) {
      betterWords.push(word);
      // If the word is NOT in the "unnecessaryWords" list, keep it
    }
    return betterWords; // Return updated array
  }, []); // Start with an empty array
};

// console.log(betterWords); Result will be undefined error b/c
// betterWords is not accessible outside of the unnecessary function

// Call the unnecessary function, using stor.split since reduce is only
// usable on arrays, not strings and store the result in a variable
const filteredStory = unnecessary(story.split(" "), unnecessaryWords);

// Log the result of the unnecessary function (the filtered array)
console.log(filteredStory);

// var allMoreThan75 = shoes.every(function (shoe) {
//   return shoe.price > 75;
// });

// Step 4
// There is an array of words called overusedWords.
// These are words overused in this story.
// You want to let the user of your program know
// how many times they have used these overused words.

const overUsedCount = filteredStory.reduce(function (accumulator, word) {
  // To count the occurrences of overused words in the story,
  // we should use the reduce() method and maintain an object accumulator for counting.
  if (overusedWords.includes(word)) {
    // If the word is in the overusedWords array,
    accumulator[word] = (accumulator[word] || 0) + 1;
    // we increment its count in the accumulator.
    // If it doesn't exist yet in the accumulator, it will start at 0,
    // then get incremented.
  }
  return accumulator; // Return the updated accumulator
}, {}); // Start with an empty object

console.log(overUsedCount);

// Step 5
// Now, count how many sentences are in the paragraph.
const punctuation = [".", "!"]
const punctuationCount = story.reduce(function (accumulator2, character) {
  if (punctuation.includes(character)) {
    accumulator2[character] = (accumulator[character] || 0) +1;
  }
  return accumulator2;
}, {});

console.log(punctuationCount);

// Step 6
// create a function that logs all of them with some formatting.

// Step 7
// Now, log the betterWords array to the console as a single string.

// Extra challenges
// 1. For the overused words, remove it every other time it appears.

// 2. Write a function that finds the word that appears the greatest number of times.

// 3. Replaced overused words with something else.