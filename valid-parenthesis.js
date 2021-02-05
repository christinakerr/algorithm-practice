function isValid(s){
    let boolean;
    if (!s || s.length < 2){
        boolean = false;
    }
    let map = {
        "{":"}",
        "[":"]",
        "(":")"
    };
    let stack = [];

    // stack thing 
    // if you find the closing bracket, compare the indexes of opening and closing brackets
    // if indexes subtracted are odd, true. If even, false

    return boolean;
}