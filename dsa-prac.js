// Starting ke beginning se shuruat

// Complexities

// Time Complexity

// Measures how the number of operations grows with input size (n).

// Ask:

// "How many times does my code run?"

// Examples:

// One loop → O(n)
// Nested loops → O(n²)
// Two separate loops → O(n + n) = O(n)
// Space Complexity

// Measures how much extra memory your code uses (ignore the input).

// Ask:

// "Does my extra memory grow when input grows?"

// Examples:

// O(1) → fixed memory:

// let sum = 0;

// Only one value is stored.

// O(n) → memory grows with input:

// let arr = [];
// arr.push(value);

// Stores more values as input grows.

// O(n²) → storing a 2D structure:

// matrix[n][n]
// Quick rule:
// Updating one variable → O(1)
// Creating/storing n values → O(n)
// Creating n × n values → O(n²)

// For space, always ask:

// "Am I replacing data or collecting data?"






// #Striver-A2Z

// class Solution {
//     printNumber(value) {
//         console.log(value)          // i/p & o/p
//     }
// }




// class Solution {
//     studentGrade(marks) {
//         if(marks >= 90){
//             console.log("Grade A")      // if-else
//         } else if(marks >= 70){
//             console.log("Grade B")
//         } else if(marks >= 50){
//             console.log("Grade C")
//         } else if(marks >= 35){
//             console.log("Grade D")
//         } else {
//             console.log("Fail")
//         }
//     }
// }





// class Solution {
//     whichWeekDay(day) {
//         switch(day) {
//             case 1:
//                 console.log("Monday")
//                 break
//             case 2:
//                 console.log("Tuesday")
//                 break
//             case 3:
//                 console.log("Wednesday")            // switch statement evaluates an expression and matches its value against multiple case clauses to execute specific blocks of code
//                 break                               // alternative to if...else if when comparing a single variable against multiple distinct values
//             case 4:
//                 console.log("Thursday")
//                 break
//             case 5:
//                 console.log("Friday")
//                 break
//             case 6:
//                 console.log("Saturday")
//                 break
//             case 7:
//                 console.log("Sunday")
//                 break
//             default:
//                 console.log("Invalid")
//                 break
//         }
//     }
// }




// class Solution {
//     forLoop(low, high) {
//         let sum = 0
//         for(let i=low; i <= high; i++){             // for loop -> initialization|condition|increment
//             sum += i 
//         }
//         return sum
//     }
// }




// class Solution {
//     whileLoop(d) {
//         let count = 0
//         let sum = 0

//         while(count < 50){
//             sum += d
//             d += 10
//             count++
//             }
//             return sum
//         }
        
//     }
    



// class Solution {

//     reverse(arr) {
//         let left = 0
//         let right = arr.length - 1

//         while(left < right){
//             let temp = arr[left]
//             arr[left] = arr[right]      // in-place(pass by reference). Can also use .reverse() built in f(n) but interviews mostly prefer manual(written in code)
//             arr[right] = temp

//             left++
//             right--
//         }
//         return arr
//     }

// }





// class Solution {
//     pattern1(n) {
//         let ans = ""
//         for(let i=0; i < n; i++){
//         let row = ""
//         for(let j=0; j < n; j++){        // character representation n times
//             row += "*"                   // *****
                                            // *****
//         }
//         ans += row + "\n"
//     } 
//     return ans                           // Outer loop manages rows; Inner loop manages columns 
// }

// }

// let n = 5;

// let obj = new Solution();

// let result = obj.pattern1(n);

// console.log(result);





// class Solution {
//     pattern2(n) {
//         for(let i = 0; i < n ; i++){
//             let row = ""
//             for(let j = 1; j <= i+1; j++){           // pattern - matching inner loop execution with no of iterations(i+1)
//                 row += "*"
//             }
//         console.log(row)
//         }
//     }
// }





// class Solution {
//     pattern3(n) {
//         for(let i = 0; i < n; i++){
//             let row = ""
//             for(let j = 1; j <= i+1 ; j++){
//                 row += j
//             }
//         console.log(row)
//         } 
//     }
// }







// class Solution {
//     pattern4(n) {
//         for(let i = 1; i <= n ; i++){
//             let row = ""
//             for(let j = 1 ; j <= i ; j++){
//                 row += i
//             }
//                     console.log(row)

//         }
//     }
// }





// class Solution {
//     pattern5(n) {
//         for(let i = 0; i < n ; i++){
//             let row = ""
//             for(let j = n; j > i; j--){
//                 row += "*"
//             }
//             console.log(row)
//         }
//     }
// }





// class Solution {
//     pattern9(n) {
//         let ans = ""
//        for(let i = 0; i < n+n; i++){
//            let row = ""
//            if(i < n){
//                for(let k = 0; k < n-i-1; k++){               // Normal + Inverted pyramid using single outer loop
//                    row += " "
//                }
//                for(let j = 0; j < i+i+1; j++){
//                    row += "*"
//                }
//            }else {
//                for(let k = 0; k < i-n; k++){
//                    row += " "
//                }
//                for(let j = 0; j < 2*n - 2*(i-n) -1 ; j++){
//                    row += "*"
//                }
//            }
//            ans += row + "\n"
//        }
//        return ans
//     }
// }

// let n = 4;

// let obj = new Solution();

// let result = obj.pattern9(n);

// console.log(result);






// class Solution {
//     pattern12(n) {
//         let ans = ""
//         for(let  i = 0; i < n; i++){
//             let row = ""
//             for (let j = 1; j <= i+1; j++){
//                 row += j
//             }
//             for (let k = 0; k < 2*n -2*i -2; k++){           // Pattern using 3 sub-components
//                 row += " "
//             }
//             for (let l = i+1; l > 0; l--){
//                 row += l
//             }
//             ans += row + "\n"
//         }
//         return ans
//     }
// }
// let n = 5;

// let obj = new Solution();

// let result = obj.pattern12(n);

// console.log(result);






// class Solution {
//     pattern14(n) {
//         let ans = ""
//         for(let i = 0; i < n; i++){
//             let row = ""
//             for(let j = 0; j < i+1; j++){
//                 row += String.fromCharCode(0 + j)
//             }
//             ans += row + "\n"
//         }
//         return ans
//     }
// }

// let n = 5;

// let obj = new Solution();

// let result = obj.pattern14(n);

// console.log(result);






// class Solution {
//     pattern19(n) {
//         for(let i = 0; i < 2*n; i++){
//             let row = ""
//             if(i < n){
//                 for(let j = 0; j < n-i; j++){
//                     row += "*"
//                 }
//                 for(let k = 0; k < 2*i; k++){
//                     row += " "
//                 }
//                 for(let l = 0; l < n-i; l++){
//                     row += "*"
//                 }
//             }else {
//                 for(let j = 0; j < i-n+1; j++){
//                     row += "*"
//                 }
//                 for(let k = 0; k < 2*n-2*(i-n)-2; k++){
//                     row += " "
//                 }
//                 for(let l = 0; l < i-n+1; l++){
//                     row += "*"
//                 }
//             }       
//             console.log(row)
//     }
// }
// }






// class Solution {
//     pattern21(n) {
//         let ans = ""
//         for(let i = 0; i < n; i++){
//             let row = ""
//             if(i <= 0){
//                 for(let j = 0; j < n; j++){
//                 row += "*"
//                 }
//             } else if(i < n-1){
//                 // for(let j = 0; j <= 0; j++){             // as loop runs only once, can replace with just the operation we want.
//                     row += "*"                              // cant be done in i===0 loop since need to print "*" n times
//                 // }
//                 for(let k = 0; k < n-2; k++){
//                     row += " "
//                 }
//                 // for(let l = 0; l <= 0; l++){             
//                     row += "*"
//                 // }
//             } else {
//                 for(let j = 0; j < n; j++){
//                 row += "*"
//                 }
//             }
//             ans += row + "\n"
//         }
//         return ans
//     }
// }

// let n = 4;

// let obj = new Solution();

// let result = obj.pattern21(n);

// console.log(result);






// class Solution {
//     countDigit(n) {
//         if (n === 0) return 1
//         let count = 0
//         let num = n
//         while(num > 0){
//             num = Math.floor(num/10)             
//             count++
//         }
//         return count
//     }
// }

// let n = 47654;

// let obj = new Solution();

// let result = obj.countDigit(n);

// console.log(result);






// class Solution {
//     reverseNumber(n) {
//         if(n === 0) return 0
        
//         let reversedNum = 0
//         let num = n
//         while(num > 0){
//             let rem = num%10
//             reversedNum = reversedNum*10 + rem 
            
//             num = Math.floor(num/10)
            
//         }
//         return reversedNum
//     }
// }
// let n = -5000;

// let obj = new Solution();

// let result = obj.reverseNumber(n);

// console.log(result);






// class Solution {
//     pattern22(n) {
//         for (let i = 0; i < 2*n-1; i++){
//             let row = ""
//             for (let j = 0; j < 2*n -1; j++){
//                 let top = i
//                 let bottom = (2*n - 2) - i
//                 let left = j
//                 let right = (2*n - 2) - j
//                 let min = Math.min(top,bottom,left,right)
//                 let minDist = n - min
//                 row += minDist + " "
//             }
//         console.log(row)
//         }
//     }
// }






// class Solution {
//     isPalindrome(n) {
//         if(n === 0) return false
//         if(n < 0) return false
        
//         let num = n
//         let newNo = 0
        
//         while(num > 0){
//             newNo = newNo * 10
//             newNo = newNo + num%10
//             num = Math.floor(num/10)
//         }
//         if(newNo === n){
//             return true
//         } else return false
//     }
// }






// class Solution {
//     GCD(n1, n2) {
//         let arr1 = []
//         let arr2 = []
//         let x = n1 ** 0.5
//         let y = n2 ** 0.5
//         let gcd = 0
        
//         for(let i=1; i <= x; i++){
//             if(n1 % i === 0){ 
//                 arr1.push(i)
//                 if(n1/i !== i){
//                     arr1.push(n1/i)
//                 }
//             }
//         }
        
        // let originalLength1 = arr1.length
        
        // for(let j=0; j < originalLength1; j++){
        //         arr1.push(n1/arr1[j])
        // }

//         for(let k=1; k <= y; k++){
//             if(n2 % k === 0){
//                 arr2.push(k)
//                 if(n2/k !== k){
//                 arr2.push(n2/k)
//                 }
//         }
//         }
        
//         // let originalLength2 = arr2.length
        
//         // for(let l=0; l < originalLength2 ; l++){
//         //         arr2.push(n2/arr2[l])
//         // }
        
        
//         for(let m = 0; m < arr1.length; m++){
            
//             for(let n = 0; n < arr2.length; n++){
//                 if(arr1[m] === arr2[n]){
//                     if(gcd < arr1[m]){
//                         gcd = arr1[m]
//                     }
//                 }
//             }
//         }
//     return gcd

//     }
// }






// class Solution {
//         isArmstrong(n) {
//             if(n == 0) return true
//             let count = 0;
//             let sum = 0
//             let num = n
//             let unitDigit = 0
//             while(num > 0){
//                 // num = num % 10
//                 num = Math.floor(num/10)
//                 count++
//             }
//             num = n
//             while(num > 0){
//                 unitDigit = num % 10
//                 sum = sum + unitDigit ** count
//                 num = Math.floor(num/10)
//             }
//             if(sum == n){
//                 return true
//             }else return false
//         }
//     }
    
//     let n = 7;
    
//     let obj = new Solution();
    
//     let result = obj.isArmstrong(n);
    
//     console.log(result);







// class Solution {
//         printNumbers(n) {
//             if(n <= 0){
//                 return
//             } 
            
//             //console.log(n)                         // printing before the recursive call executes during the "winding" phase (as functions are added to the stack), while printing after the recursive call executes during the "unwinding" phase (as functions return and are removed from the stack)
//             this.printNumbers(n-1)                   // frame is added to the stack, it instantly prints the "Before" line because it is the first instructions it hits, and then it pauses and waits on the stack while the next recursive calls run
            
//             console.log(n)
//         }
//     }    








// class Solution {
//         NnumbersSum(N) {
//             if(N <= 1){
//                 return 1                                     
//             }
//             return N + this.NnumbersSum(N-1)                 // In recursion, each return ends one function call, and because there are multiple calls on the stack, the returns happen one by one until the original call is completed
//         }
        
//     }







// class Solution {
//         // Function to reverse the array in place
//         // The reversal should be done IN-PLACE.
//         // Do not return anything from this function.        // A helper function is an additional function created inside/alongside the main function to handle a specific part of the logic.
                                                                // In recursion problems, it is often used to store extra variables needed for recursive calls.
//         reverse(arr, n) {                                    // only arr and n but we need left and right for changing values recursively thus use helper.
//             const helper = ((left,right) => {                // Why not define left and right as variables? inside reverse(): left and right are fixed values. After each swap, recursion needs new values (left + 1, right - 1). If you try changing them, you would be modifying the same variables across calls instead of giving each recursive call its own state.
//                 if(left >= right){                           
//                     return
//                 }
//                 let d = arr[left]
//                 arr[left] = arr[right]
//                 arr[right] = d
//                 helper(left+1,right-1)
//             })
//             helper(0, n-1)
//             return arr
//         }
//     }








// class Solution {
//         fib(n) {
//             let prev = 0
//             let curr = 1
//             let fibNo
//             if(n === 0) return prev
//             if(n === 1) return curr
//             for(let i = 2; i <= n; i++){             // fibNo are 0 indexed i.e though 0 is 1st fibNo, it is represented by 0 index
//                 fibNo = prev + curr                  // i = 2 bcoz loop starts from 2nd number as 0 and 1 index values are prev and curr resp.
                
//                 let d = curr
//                 curr = fibNo
//                 prev = d
//             }
//             return curr
//         }
//     }
        // let n = 8;
        
        // let obj = new Solution();
        
        // let result = obj.fib(n);
        
        // console.log(result);





// class Solution {
//     bubbleSort(nums) {
//         for(let i = 0; i < nums.length; i++){
//             let swaps = 0
//             for(let j = 0; j < nums.length - i-1; j++){
//                 if(nums[j] > nums[j+1]){
//                     let d = nums[j]
//                     nums[j] = nums[j+1]
//                     nums[j+1] = d
//                     swaps++
//                 }
//             }
//         if(swaps === 0) break
//         }
//         return nums
//     }
// }






// class Solution {
//         insertionSort(nums) {
//             for(let i = 1; i < nums.length; i++){            // Shift based approach; optimal for best case scenario
//                 let d = nums[i]                              // Swap based approach emphasizes swapping adjacent values within inner loop for each value of j
//                 let j
//                 for(j = i; j >= 1; j--){
//                     if(d < nums[j-1]){
//                         nums[j] = nums[j-1]
//                     } else break
//                     }
//                     nums[j] = d
//                 }
//                 return nums
//             }
//         }








// function fibonacci(){
//     let arr = [0,1]

//     for (let i = 2; i < 19 ; i++){
//         arr.push(arr[i - 2] + arr[i - 1])           // fibonacci nos
//     }
//     console.log(arr)
// }

// fibonacci()









// function minValue(){
//     let arr = [11,5,9,7,3,14]
//     let minVal = arr[0]
//     for( let i = 0 ; i < arr.length ; i++){         // minimum of the array  O(n)
//         if(arr[i] < minVal){
//             minVal = arr[i]
//         }
//     }
//     console.log(minVal)
// }

// minValue()








// function bubbleSort() {
//     let arr = [7,12,9,11,3]
//     for (let i=0 ; i<arr.length - 1 ; i++){
//         for (let i=0 ; i<arr.length - 1 ; i++){         // bubbleSort O(n-n)
//             if(arr[i] > arr[i + 1]){                                         // outer loop → controls passes
                                                                                // inner loop → compares neighbours

//                 let tempVal = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = tempVal
//             }
//         }
//     }
//     console.log(arr)
// }

// bubbleSort()









// function selectionSort() {
//     let num = [7,12,9,11,3]
//     for(let i=0; i < num.length -1; i++){
//         minInd = i
//         for(let j=i+1; j < num.length-1; j++){           // Selection Sort- find lowest value and move it to start of array
//             if(num[minInd] > num[j]){
//                 minInd = j
//             }
//         }
//         let tempVal = num[i]                         // out of for loop so that 
//         num[i] = num[minInd]
//         num[minInd] = tempVal
//     }
//     console.log(num)
// }

// selectionSort()








// function insertionSort(arr) {
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j] > key){                 // Insertion Sort
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
//     let num =[5,2,4,6,1,3]
//     console.log(insertionSort(num))








// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let lhs = []
//     let rhs = []
//     for(let i=0 ; i < arr.length -1; i++){              // quickSort (non optimal code) refer later for optimal code
//         if (pivot > arr[i]){
//             lhs.push(arr[i])
//         } else {
//             rhs.push(arr[i])
//         }
// }
//      return [...quickSort(lhs),
//      pivot,
//      ...quickSort(rhs)]
// }

// let num = [8,3,6,2,5,1,9]
// console.log(quickSort(num))







// function countingSort(arr){
//     if(arr.length < 0){
//         return []
//     }
//     let maxVal = Math.max(...arr)

//     let count = new Array(maxVal+1).fill(0)
    
//     for(let num of arr){
//         count[num] = count[num] + 1
//     }
    
// let sorted = []

//     for(let i=0; i < arr.length; i++){
//         while(count[i] > 0){
//             sorted.push(i)
//             count[i]--
//         }
//     }
//     return sorted
// }

// let num = [2,4,4,5,7,7,2,1]

// console.log(countingSort(num))







// class Solution {
//         mergeSort(nums) {
//             const subArrForm = ((nums) => {
//             if(nums.length <= 1){
//                 return nums
//             }
//             const half = Math.floor(nums.length/2)
            
//             const left = nums.slice(0,half)
//             const right = nums.slice(half)
    
//             return [subArrForm(left),subArrForm(right)]
            
//             })
//             return subArrForm(nums)
//             }
//         }
    
//         let nums = [7, 4, 1, 5, 3];
            
//         let obj = new Solution();
            
//         let result = obj.mergeSort(nums);
            
//         console.log(result);







// class Solution {
//         mergeSort(nums) {
//             const subArrForm = ((nums) => {
//             let merged = []
//             if(nums.length <= 1){
//                 return nums
//             }
//             const half = Math.floor(nums.length/2)                   // Before merging begins, the "entire array" is dismantled and scattered as slices across the active stack frames in memory. The variable leftSorted is only looking at whatever tiny sub-slice was just handed back from the very bottom of its specific branch.
            
//             const left = nums.slice(0,half)
//             const right = nums.slice(half)
            
//             const leftSorted = subArrForm(left)
            
//             const rightSorted = subArrForm(right)
            
//             const merge = ((leftSorted, rightSorted) => {
//                 let i = 0
            
//                 let j = 0
                
//                 while(i < leftSorted.length && j < rightSorted.length){
//                     if(leftSorted[i] < rightSorted[j]){
//                         merged.push(leftSorted[i])
//                         i++
//                     } else {
//                         merged.push(rightSorted[j])
//                         j++ 
//                     }
//                 }
//                 while (i < leftSorted.length){
//                     merged.push(leftSorted[i])
//                     i++
//                 }
                
//                 while (j < rightSorted.length){
//                     merged.push(rightSorted[j])
//                     j++
//                 }
//                 return merged
//             })
//             return merge(leftSorted, rightSorted)
//             })
//             return subArrForm(nums)
//             }
//         }
    
//         let nums = [7, 4, 1, 5, 3];
            
//         let obj = new Solution();
            
//         let result = obj.mergeSort(nums);
            
//         console.log(result);






// class Solution {
//         bubbleSort(nums) {
//             let pass = nums.length -1
//             const outer = ((iteration,pass) => {
//                 if(iteration >= nums.length - 1){
//                     return 
//                 }
//                 const inner = ((index,pass) => {             // outer() → controls passes; inner() → does one pass recursively; currentChanged → whether this comparison caused a swap; restChanged → result returned by the remaining recursive calls.
//                     if(index >= pass){                       
//                         return false                         // Recursive calls pass the swap information back upward through return
//                     }
//                     let currentChanged = false               // Going down (recursive calls)-- inner(0)- currentChanged = true because 7 > 4 swapped. Then it calls: restChanged = inner(1), currentChanged = true because 7 > 1 swapped. Then: restChanged = inner(2), currentChanged = true because 7 > 5 swapped. Then: restChanged = inner(3), currentChanged = true because 7 > 3 swapped. Then: restChanged = inner(4) (base case) No comparison is possible. return false Meaning: "After this point, no swaps happened." 
//                     if(nums[index] > nums[index+1]){
//                         let d = nums[index+1]                // Now the return journey starts. Coming back up Back to inner(3) It receives: restChanged = false But it remembers: currentChanged = true Now: return currentChanged || restChanged becomes: true || false Result: true So inner(3) returns: true Back to inner(2) It receives: restChanged = true Where did this true come from? It came from inner(3). Now: currentChanged = true restChanged = true Return: true || true Result: true inner(2) returns true. Back to inner(1) Receives: restChanged = true Again: currentChanged = true restChanged = true Return: true Back to inner(0) Receives: restChanged = true Now: currentChanged = true restChanged = true Return: true
//                         nums[index+1] = nums[index]
//                         nums[index] = d
//                         currentChanged = true
//                     }
                    
//                     let restChanged = inner(index+1,pass)
                    
//                     return restChanged || currentChanged
//                 })
//                 let hasChanged = inner(0,pass)
//                 if(!hasChanged){
//                     return 
//                 }
//                 outer(iteration+1, pass-1)
//             })
//             outer(0, pass)
//             return nums
//             }
//         }
        
// let nums = [7, 4, 1, 5, 3];
            
// let obj = new Solution();
            
// let result = obj.bubbleSort(nums);
            
// console.log(result);






// class Solution {
//         insertionSort(nums) {
            
//             const outer = ((iteration) => {
//                 if(iteration >= nums.length){
//                     return
//                 }
//                 let key = nums[iteration]           
//                 const inner = ((index) => {
//                     if(index == 0){
//                         nums[index] = key
//                         return
//                     } else if(nums[index-1] <= key){
//                         nums[index] = key
//                         return
//                     }
//                     if(nums[index-1] > key){
//                         nums[index] = nums[index-1]
//                     }
                    
//                     inner(index-1)
//                 })
//                 inner(iteration)
//                 outer(iteration+1)
//             })
//             outer(1)
//             return nums
//         }
//     }







class Solution {
    quickSort(nums) {
        
        const partition = ((startIndex, endIndex) => {
            if(startIndex >= endIndex ){
                return 
            }
            
            let pivotIndex = startIndex
            let leftIndex = startIndex + 1
            let rightIndex = endIndex
            
            while(leftIndex <= rightIndex){
                
                while(leftIndex < endIndex && nums[pivotIndex] >= nums[leftIndex]){
                    leftIndex++
                }
                
                while(rightIndex > startIndex && nums[pivotIndex] < nums[rightIndex]){
                    rightIndex--
                    
                }
                
                if(leftIndex < rightIndex){
                        let d = nums[rightIndex]
                        nums[rightIndex] = nums[leftIndex]
                        nums[leftIndex] = d 
                        
                        leftIndex++
                        rightIndex--
                    }
                    
            }
            
            if(leftIndex >= rightIndex){
                let d = nums[rightIndex]
                nums[rightIndex] = nums[pivotIndex]
                nums[pivotIndex] = d
            }
            console.log(startIndex, rightIndex-1)
            console.log(rightIndex+1, endIndex)
            partition(startIndex, rightIndex - 1)
            partition(rightIndex+1, endIndex)
            
            return rightIndex
            })
            
        partition(0, nums.length - 1)
        return nums
        
        }
    }
        
let nums = [7,4,1,5,3]
            
let obj = new Solution();
            
let result = obj.quickSort(nums);
            
console.log(result);
