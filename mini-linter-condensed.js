const removeUnnecessaryWords = function (storyWords, unnecessaryWords) {
    let storyWords = story.split('');
    // takes in story array and unnecessary words array
    return storyWords.filter(function (word) {
        if (!unneccessaryWords.includes(word)) {
            return word;
        }
    }).join('');
};

console.log(removeUnnecessaryWords(story, unnecessaryWords));

const getOverUsedWordCountverUsedWordCount = function(story, overUsedWords) {
    let storyWords = story.split('');

    return storyWords.reduce(function (acc, word) {
        if (overUsedWords.includes(word)) {
            acc += 1;
        }
        return acc;
    }, 0);
}

console.log(getOverUsedWordCount(story, overUsedWords));

const getSentenceCount = function (story) {
    let storyWords = story.split('');

    return storyWords.reduce(function (acc, word) {
        if (word[word.length - 1] === '!'|| word[word.length - 1] === '.') {
            acc += 1
        }
        return acc
    }, 0)
}

console.log(getSentenceCount(story));