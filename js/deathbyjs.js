//STEP 1
// let word = prompt('Enter a word')

// function sortWord () {
//     word = word.split('').sort().join('')
//     console.log(word)
// }
// sortWord()

//STEP 2
// function upperLetter(string) {
//     let text = 'the quick brown fox'
//     let arrText = text.split(" ")
//     for (let i = 0; i < arrText.length; i++) {
//         arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1)
//     }
//     let text2 = arrText.join(" ")
//     console.log(text2)
// }
// upperLetter()

//STEP 3
// function vowel() {
//     const text = 'the quick brown fox'
//     let vowelText = text.match(/[a,e,i,o,u]/g)
//     console.log(vowelText.length) 
// }
// vowel()

//STEP 4
// function randomString () {
//     let str = (Math.random()).toString(36).substring(2)
//     console.log(str)
// }
// randomString()

//STEP 5
function country () {
    let country = ["Australia", "Germany", "United States of America"]
    for (let i = 0; i < country.length; i++) {
        country[i] = country[i].length
    }
    console.log(country)
}
country()
