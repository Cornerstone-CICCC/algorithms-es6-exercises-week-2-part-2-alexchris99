// Every Exercise
// Instructions: Create an array of at least five numbers. 
//Write code to check if every number in the array is positive.

const numArr = [23, 40, 80, 25, 60, 2]

const Positive = numArr.every((item) =>{
    if(item  < 0){
        return false
    }else{
        return true
    }
})

console.log(Positive)