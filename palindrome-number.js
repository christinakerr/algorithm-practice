function isPalindrome(x){
    if (x < 0) {
        return false;
    }
    const reversed = x.toString().split("").reverse().join("");

    if (reversed === x.toString()){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(10));