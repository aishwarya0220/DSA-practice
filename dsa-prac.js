// Starting ke beginning se shuruat


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
//             if(arr[i] > arr[i + 1]){
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








