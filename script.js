// Mixed Messages JavaScript
word1Arr = ['flying', 'coasting', 'losing', 'falling'];
word2Arr = ['fantastic', 'great', 'decent', 'terrible'];
word3Arr = ['worse', 'normal', 'better', 'amazing'];

const random4 = function(){
    Math.floor(Math.random() * 4);
};

word1 = word1Arr[random4];
word2 = word2Arr[random4];
word3 = word3Arr[random4];

sentence1 = "Your team are " + word1 + " at the moment.";
sentence2 = "At least you have your " + word2 + " striker.";
sentence3 = "It could be " + word3 + "!";

console.log(random4);
console.log("Ending now...");



