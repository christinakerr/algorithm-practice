function longestPalindrome(s) {
    const arr = s.split("");
    let palindrome = "";
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            let subString = s.split("").slice(i, j-1);
            if (subString === subString.reverse()){
                if (subString.length > palindrome.length){
                    palindrome = subString;
                }
            }
        }
    }
    return palindrome.join("");
}