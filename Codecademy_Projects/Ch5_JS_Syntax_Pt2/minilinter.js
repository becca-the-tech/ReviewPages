//original input
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//turns storyWords into an array of words
const storyWords = story.split(' ');
//console.log(storyWords.length);

//returns array excluding all unnecessary words
const betterWords = storyWords.filter(word => {
    return (!(unnecessaryWords.includes(word)));
});

console.log('The number of words (minus unnecessary words): ' + betterWords.length + '\n');

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

//function to increase overused word count
function countWords(word) {
    if (word === overusedWords[0]) {
        reallyCount++;
    } else if (word === overusedWords[1]) {
        veryCount++;
    } else if (word === overusedWords[2]) {
        basicallyCount++;
    }
}

//checks each word for the overusedWords
betterWords.forEach(countWords);

//prints out how many times the overused words were found
console.log(`The word 'really' was used ${reallyCount} times`);
console.log(`The word 'very' was used ${veryCount} times`);
console.log(`The word 'basically' was used ${basicallyCount} time`);

//all sentences end with a period or !
let sentenceCount = 0;
function countSentences(word) {
    if (word.endsWith('.')) {
        sentenceCount++;
    } else if (word.endsWith('!')) {
        sentenceCount++;
    }
}

//checks each word to see if it's a sentence
betterWords.forEach(countSentences);
console.log("\nNumber of sentences found: " + sentenceCount);

//turns the betterWords array back into a long string paragraph
console.log(betterWords.join(' '));
