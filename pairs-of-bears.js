function bears(x, s){
    let result = [];
    let pairs = "";
    for (let i = 0; i < s.length; i++){
        if (
            s[i] == "B" && s[i+1] == "8" ||
            s[i] == "8" && s[i+1] == "B"
        ) {
            pairs+=s[i] + s[i+1];
            i++;
        }
    }
    result.push(pairs);

    if (pairs.length / 2 >= x){
        result.push(true);
    } else {
        result.push(false);
    }
    return result;
}

console.log(bears(7, "8j8mBliB8gimjB8B8jlB"))