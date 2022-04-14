// get the values from the page
// controller function
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Validate input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayTable
        displayTable(numbers);
    } else {
        alert("You must enter integers");
    }
}

// generated numbers from the startvalue to the endvalue
// logic function
function generateNumbers(startValue, endValue){
    let numbers = []

    // get all numbers from start to end

    for (let index = startValue; index <= endValue; index++){
        // this will execute in a loop until index = endvalue
        numbers.push(index);
    }

    return numbers;
}

// Display the numbers and mark multiples of 3 as Fizz, multiples 
// of 5 as Buzz, and multiples of both as FizzBuzz
function displayTable(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++){
        let className = "number";
        let number = '';

        if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
            number = 'FizzBuzz';
            className = 'fizzbuzz';
        }
        else if (numbers[index] % 3 == 0) {
            number = 'Fizz';
            className = 'fizz';
        }
        else if (numbers[index] % 5 == 0) {
            number = 'Buzz';
            className = 'buzz';
        }
        else {
            number = numbers[index];
            className = 'number';
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}