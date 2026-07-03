


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