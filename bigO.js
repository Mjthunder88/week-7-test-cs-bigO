function sumZero (arr) {
   
    if (arr[0] === null) {
        return false    
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
               return true
            }
        }
    }
    return false
}

// console.log(sumZero([]))
// console.log(sumZero([1]))
// console.log(sumZero([1, 2, 3]))
// console.log(sumZero([1, 2, 3, -2]))

// Time complexity:
// Big O:
// O(n^2)

// space complexity:
// O(1)

// Problem 2

 let hasUniqueChars = (str) => {

   for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            return false
        } 
    }
   }
   return true

 }

//  console.log(hasUniqueChars("Monday"));
// -> True

// console.log(hasUniqueChars("Moonday"));
// -> False

// Time complexity:
// Big O:
// O(n^2)
// space complexity:
// O(1)

// Problem 3

function isPangram (word) {
    let lowerCaseWord = word.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alphabet.length; i++) {
        if (lowerCaseWord.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

// console.log(isPangram("I like cats, but not mice"));
// -> False
// Time complexity:
// Big O:
// O(n)
// space complexity:
// O(n)

// problem 4
// Loop through the array and for each word get the length of that word then compare it to the others.

function findLongestWord (words) {
    let wLengths =[]
    words.forEach(element => {
        wLengths.push(element.length)
    });
    // console.log(...wLengths)
    let answer = Math.max(...wLengths)
    return answer
}

// console.log(findLongestWord(["hi", "hello"]));
// -> 5

// Time complexity:
// Big O:
// O(n)
// space complexity:
// O(n)