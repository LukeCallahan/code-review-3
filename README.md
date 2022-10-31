
# WORD CONVERTER


#### Developed by: Luke Callahan


## Description 
A simple project showcasing javascript looping and basic html input and output.


## Technologies Used
- Html
- Javascript
- Test Driven Development (see below for tests)

## Setup Instructions

1. <pre>git clone https://github.com/LukeCallahan/code-review-3</pre>
2. Open index.html in your browser of choice.

## Known Bugs
- It currently displays a comma before the zero. 

Areas of improvement are as follows:
- Add bootstrap and improve formatting.

### License & Copyright
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Date
Copyright (c) _October 2022_ _Luke Callahan_


 
## TESTS

Describe: wordReplacer()

Test: "It should create an array and convert the inputted string into elements of the array."
Code: wordReplacer("14");
Expected Output: [1, 4]

Test: "It should cycle through each element of the array and replace any 3's with "Won't you be my neighbor".
Code: wordReplacer("13");
Expected Output: [1, Won't you be my neighbor]

Test: "It should cycle through each element of the array and replace any 2's with "boop".
Code: wordReplacer("13");
Expected Output: [2, "boop"]

Test: "It should cycle through each element of the array and replace any 1's with "beep".
Code: wordReplacer("13");
Expected Output: [1, "beep"]

Test: "It should take the number and modify the array so it includes 0 through the input number".
Code: wordReplacer("9");
Expected Output: [0,1,2,3,4,5,6,7,8,9]

Test: "It should display each element of the array to the console.".
Code: wordReplacer(14);
Expected Output: 0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"