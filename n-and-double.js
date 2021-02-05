function checkIfExist(arr){
    let boolean = false;

    for (num1 of arr){
        for (num2 of arr){
            if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){
                boolean = false;
            // } else if {

            
            // } else if (num1 === 2 * num2 || num2 === num1 * 2){
            //     boolean = true;
            // }
            }
        }
    }

    return boolean;
}