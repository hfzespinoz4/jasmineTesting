function addition (numOne, numTwo){
 /*This is known as defensive programming*/
 if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
    return numOne + numTwo;
 }  else {
     return "Error!"
 }
}

/*function addition (numOne, numTwo){
    return numOne + numTwo;
}*/