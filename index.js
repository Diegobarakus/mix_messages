let message_one = ["you are having ", "you need ", "you will have tomorrow ", "try to have "]
let message_two = ["a nice day", "a bad day", "a lucky day", "a regular day", "a sad day", "a funny day"]

// generate random numbers

let random_n_one = Math.floor(Math.random()*message_one.length);
let random_n_two = Math.floor(Math.random()*message_two.length);

console.log (message_one[random_n_one] + message_two[random_n_two])

//alles was hier steht funktioniert perfekt 
// Ich hoffe es funktioniert

