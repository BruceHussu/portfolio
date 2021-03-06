function startup(){
    var output = "";
    var theArray = [5, 10, 5, 3, 1, 3, 6, 2, 3, 4]
    output += "The input array is [" + printArray(theArray) + "]\n";
    output += "The sum of the array is " + sumArray(theArray) + "\n";
    output += "The number of times 3 is in the array is " + numOfTimes(theArray, 3) + "\n";
    output += "The last index of 3 in the array is " + indexOfLast(theArray, 3) + "\n";
    output += "The largest number of the array is " + largestNumber(theArray) + "\n";
    output += "The array with duplicates removed is [" + printArray(removeDuplicates(theArray)) + " ]\n";
    document.getElementById("outputarea").innerText = output;
}

function printArray(theArray){
    let output = "";
    for(let i = 0; i < theArray.length; i++){
        if(i > 0){
            output += ", "
        }
        output += theArray[i];
    }
    return output;
}

function sumArray(theArray){
    let sum = 0;
    // Sum up all the numbers in theArray and return
    return sum;
}

function numOfTimes(theArray, theNumber){
    let numOfTimes = 0;
    // Return the number of times theNumber is in the 
    for(let i = 0; i < theArray.length; i++){
        if(theArray[i] == theNumber){
            numOfTimes++;
        }
    }
    return numOfTimes;
}

function indexOfLast(theArray, theNumber){
    let indexOfLast = -1;
    // Return the index of theArray where theNumber is found the last time
    // return -1 if not found
    return indexOfLast;
}

function largestNumber(theArray){
    let largestNumber;
    // return the largest number of the arrary
    return largestNumber;
}

function removeDuplicates(theArray){
    let newArray = [];
    //Return an array that contains all the number of the first array
    // but remove any duplicates.
    return newArray;
}
