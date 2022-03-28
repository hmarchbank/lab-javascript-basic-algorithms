// Iteration 1: Names and Input

let hacker1 = "Harry"
console.log(`The navigators name is ${hacker1}`)
let hacker2 = "Louise"
console.log(`The drivers name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker2.length > hacker1.length){
    console.log(`The driver has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  };

// Iteration 3: Loops

//3.1

let spacedHacker = ""
let backwardsHacker = ""
for (let i = 0; i < hacker1.length; i++){
    spacedHacker += hacker1[i] + " "
}
console.log(spacedHacker.toUpperCase())

//3.2

for (let i = hacker2.length - 1; i >= 0; i--){
    backwardsHacker += hacker2[i]
}
console.log(backwardsHacker)

//3.3
    if(hacker1.localeCompare(hacker2) === -1){
        console.log("The driver's name goes first")
    } else if (hacker2.localeCompare(hacker1) === -1){
        console.log("Yo, the navigator goes first definitely")
    } else {
        console.log("What?! You both have the same name?")
    }

//Bonus

// Bonus 1

const paragraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim in sapien viverra volutpat sit amet vel mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta semper porttitor. Ut sagittis ligula sed sodales pellentesque. Suspendisse at risus eget velit suscipit bibendum id a sem. Aliquam ultricies metus quis tortor rhoncus consequat. Fusce feugiat nulla erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam id massa non nibh elementum placerat eu vel erat. Praesent convallis malesuada nunc ac hendrerit.

Vivamus vitae tristique dui. Morbi quam felis, elementum et tortor non, rutrum sodales dolor. Pellentesque a egestas lacus. Cras laoreet neque vel rhoncus sodales. Sed vel velit enim. Aenean in eros id odio mollis blandit ut ac est. Etiam maximus lectus eu ullamcorper pharetra.

Curabitur quis dui quis tortor mollis dictum in sed turpis. Duis id velit at sem egestas vehicula sed ac justo. Aenean egestas sodales nunc ac interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec congue eget lectus eu dignissim. Curabitur ac metus at odio ultrices facilisis sit amet ut tellus. Quisque eu nunc hendrerit, vestibulum lacus non, lobortis ipsum.`
let wordCount = 0
for (let i = 0; i < paragraphs.length; i++){
  let nextLetter = i + 1
    if(paragraphs[i] === ' '){
      wordCount++
    }
}
console.log(wordCount)
let count = 0
for (let i = 0; i < paragraphs.length; i++){
  if (paragraphs[i] === ' '){
    if (paragraphs[i + 1] === 'e'){
      if (paragraphs[i + 2] === 't'){
        count++
      }
    }
  }
}
console.log(count)

// Bonus 2

let phraseToCheck = `No 'x' in Nixon`
let backwardsWord = ''
let spacelessWord = ''
let isPalindrome;

for (let i = phraseToCheck.length - 1; i >= 0; i--){
  if (phraseToCheck[i] === ' ' || phraseToCheck[i] === ',' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === "'"){
    continue
  } else {
    backwardsWord += phraseToCheck[i].toLowerCase()
  }
}
for (let i = 0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] === ' ' || phraseToCheck[i] === ',' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === "'"){
    continue
  } else {
    spacelessWord += phraseToCheck[i].toLowerCase()
  }
}
if (spacelessWord === backwardsWord){
  isPalindrome = true
} else {
  isPalindrome = false
}
console.log(isPalindrome)



