function catAndMouse (x, y, z){
    // x = Cat A
    // y = Cat B
    // z = Mouse C
    let catAdistance = Math.abs(z-x);
    let catBdistance = Math.abs(z-y);
    if (catAdistance < catBdistance){
        return "Cat A"
    } else if (catBdistance < catAdistance){
        return "Cat B";
    } else {
        return "Mouse C";
    }
}