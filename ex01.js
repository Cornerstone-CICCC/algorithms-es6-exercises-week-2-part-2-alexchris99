// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. 
//Write the code to sort this array in ascending order.

const numArr = [3, 7, 34, 90, 1]

function bubbleSort(a,b){
    if(a > b) return 1
    if(a < b) return -1
    return 0;
}

console.log(numArr.sort(bubbleSort))