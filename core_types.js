function add(n1, n2, showResult, displayText) {
    var result = n1 + n2;
    if (showResult) {
        console.log(displayText + result);
    }
    else {
        return result;
    }
}
var number1 = 105; //`let` is a signal that the variable may be reassigned
var number2 = 0.50; //`const` is a signal that the identifier won’t be reassigned.
var printResult = true;
var myDescription = "The result is: ";
add(number1, number2, printResult, myDescription);
