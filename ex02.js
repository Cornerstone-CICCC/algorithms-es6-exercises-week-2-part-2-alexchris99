// Find Exercise
// Instructions: Create an array of at least five numbers. 
//Write code to find the first element that is greater than 10.

const numArr = [3, 7, 34, 90, 1]

const found = numArr.find((element) =>{
    return element > 10
})

console.log(found)