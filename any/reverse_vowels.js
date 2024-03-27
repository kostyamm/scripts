const VOWELS = 'aeiouAEIOU';
const isVowel = (l) => VOWELS.includes(l)

const reverseVowels = function(s) {
    let arr = s.split('')

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        while (!isVowel(arr[i]) && i < j) {
            i++
        }

        while (!isVowel(arr[j]) && i < j) {
            j--
        }

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr.join('')
};

console.log(reverseVowels('leetcode')) // leotcede
console.log(reverseVowels('ai')) // ia
console.log(reverseVowels('aA')) // Aa
console.log(reverseVowels('A man, a plan, a canal: Panama')) // a man, a plan, a canal: PanamA
