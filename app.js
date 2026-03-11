function falsyOrTruthy(value) {
    if (value) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(falsyOrTruthy(false));

function arrayLength(arr) {
    return arr.length;
}

console.log(arrayLength([1, 2, 3, 4, 5]));

function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4, 5]));

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

function arrSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(arrSum([1, 2, 3, 4, 5,6]));

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;  
    }
    return sum;
}

console.log(progressiveSum(3));

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;
   if (timerMinutes.toString().length === 1) {
        timerMinutes = "0" + timerMinutes;
    }

    return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(500));

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-500, -200, -300]));

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; --i) {
        reversedString = str[i] + reversedString;
    }
    return reversed;
}

console.log(reverseString("abc"));

function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1, 2, 3]));

function convertToZeros(arr) {
    return arr.map(elem => {
        return 5;
    });
}

console.log(convertToZeros([1, 2, 3,4,5]));

function removeApple(arr) {
    return arr.filter(elem => {
        return elem !== "apple";
    });
}

console.log(removeApple(["apple", "banana", "apple", "orange"]));

function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true);{
        return elem;
    });
}

console.log(filterOutFalsy(["", "a", 0, null, false, 1, undefined, 2]));

function convertToBoolean(arr) {
    return arr.map(elem => !!elem);
}

console.log(convertToBoolean(['', Null, 500,  null, false, 0]));

function convertToBoolean(arr) {
    return arr.map(elem => {!!elem});

}

console.log(convertToBoolean(['', Null, null, false, 0]));

