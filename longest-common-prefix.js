function longestCommonPrefix(strs){
    let result = "";
    if (strs === null || strs.length === 0 || !strs[0]){
        return result;
    }
    for (let letter = 0; letter<strs[0].length; letter++){
        const char = strs[0][letter];
        for (let word = 1; word<strs.length; word++){
            if(char !== strs[word][letter]){
                return strs[0].slice(0, letter);
            }
        }
    }
    return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));