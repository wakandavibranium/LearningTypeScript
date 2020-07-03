function add(n1: number, n2: number, showResult: boolean, displayText: string) {

    const result = n1 + n2;

    if(showResult){
        console.log(displayText + result);
    }else{
        return result;
    }
}

let number1 = 105; //`let` is a signal that the variable may be reassigned
const number2 = 0.50; //`const` is a signal that the identifier won’t be reassigned.
const printResult = true;
const myDescription = "The result is: ";

add(number1, number2, printResult, myDescription);