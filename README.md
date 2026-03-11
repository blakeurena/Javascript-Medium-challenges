# JavaScript Array & Logic Practice

This project contains beginner-to-intermediate JavaScript practice challenges focused on working with:

* Truthy and Falsy values
* Arrays
* Loops
* Array methods (`map`, `filter`, `reduce`)
* String manipulation
* Basic algorithms

Each function demonstrates a common JavaScript concept and prints results using `console.log()` for easy testing.

---

# Project Structure

```
javascript-array-practice/
│
├── index.html
├── app.js
└── README.md
```

* **index.html** – Loads the JavaScript file
* **app.js** – Contains all challenge solutions
* **README.md** – Project documentation

---

# How to Run

## Run in Browser

1. Open `index.html`
2. Right click the page
3. Click **Inspect**
4. Open the **Console**

You will see the results printed from the functions.

---

## Run with Node.js

If Node is installed:

```
node app.js
```

---

# Functions Included

## 1. Truthy or Falsy

Determines if a value is truthy or falsy.

```
falsyOrTruthy(value)
```

Example:

```
falsyOrTruthy(false)
```

Output:

```
"Falsy"
```

---

## 2. Array Length

Returns the number of elements in an array.

```
arrayLength(arr)
```

Example:

```
arrayLength([1,2,3,4,5])
```

Output:

```
5
```

---

## 3. Get Last Element

Returns the last element in an array.

```
getLastElement(arr)
```

Example:

```
getLastElement([1,2,3,4,5])
```

Output:

```
5
```

---

## 4. Sum of Array (Loop)

Calculates the total of numbers in an array using a loop.

```
sumOfArray(arr)
```

Example:

```
sumOfArray([1,2,3,4,5])
```

Output:

```
15
```

---

## 5. Sum of Array (Reduce)

Calculates the total using the `reduce()` method.

```
arrSum(arr)
```

Example:

```
arrSum([1,2,3,4,5,6])
```

Output:

```
21
```

---

## 6. Progressive Sum

Returns the sum of numbers from **1 up to a given number**.

```
progressiveSum(num)
```

Example:

```
progressiveSum(3)
```

Output:

```
6
```

---

## 7. Convert Seconds to Time

Converts seconds into a `MM:SS` timer format.

```
calcTime(seconds)
```

Example:

```
calcTime(500)
```

Output:

```
08:20
```

---

## 8. Find Maximum Number

Returns the largest number from an array.

```
getMax(arr)
```

Example:

```
getMax([-500,-200,-300])
```

Output:

```
-200
```

---

## 9. Reverse String

Reverses a string.

```
reverseString(str)
```

Example:

```
reverseString("abc")
```

Output:

```
"cba"
```

---

## 10. Convert Array to Zeros

Creates a new array with the same length but filled with `0`.

```
convertToZeros(arr)
```

Example:

```
convertToZeros([1,2,3])
```

Output:

```
[0,0,0]
```

---

## 11. Replace Values in Array

Uses `map()` to replace each element with a new value.

Example:

```
convertToZeros([1,2,3,4,5])
```

Output:

```
[5,5,5,5,5]
```

---

## 12. Remove "apple" from Array

Filters out `"apple"` values.

```
removeApple(arr)
```

Example:

```
removeApple(["apple","banana","apple","orange"])
```

Output:

```
["banana","orange"]
```

---

## 13. Filter Out Falsy Values

Removes all falsy values from an array.

Falsy values include:

* `false`
* `0`
* `""`
* `null`
* `undefined`
* `NaN`

Example:

```
filterOutFalsy(["", "a", 0, null, false, 1, undefined, 2])
```

Output:

```
["a",1,2]
```

---

## 14. Convert Values to Boolean

Converts each array value into a boolean
