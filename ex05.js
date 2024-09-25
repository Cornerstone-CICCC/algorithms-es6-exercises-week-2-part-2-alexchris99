// Some Exercise
// Instructions: Create an array of at least five numbers. 
//Write code to check if some of the numbers are even.

const numArr = [23, 40, 80, 25, 60, 2]

const even = (element) =>{
    return element % 2 === 0;
}

console.log(numArr.some(even))