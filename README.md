* scope
1. create simple form that inputs a number and returns a string so we can start processing it with our business logic.

** Begin Testing 

2. [complete] Create an array and Convert the string to individual elements of the array.

3. Cycle through each element of the array, and if it has a 1, 2, or 3, do the following:
 If it has a 3, replace it with: "Won't you be my neighbor"
 If it has a 2, replace it with: "Boop"
 If it has a 1, replace it with: "Beep"

4. Now, put all of the pieces of the array back together 

5. Now, append the results to an existing element in the html so it can be displayed to the user.

6. Add logic so that the form resets upon loading

7. Add logic so the results will be removed when the form is submitted again.


* Tests 

Describe: wordReplacer()

Test: "It should create an array and convert the inputted string into elements of the array."
Code: wordReplacer("14");
Expected Output: [1, 4]

Test: "It should cycle through each element of the array and replace any 3's with "Won't you be my neighbor".
Code: wordReplacer("13");
Expected Output: [1, Won't you be my neighbor]

Test: "It should cycle through each element of the array and replace any 2's with "boop".
Code: wordReplacer("13");
Expected Output: [1, Won't you be my neighbor]