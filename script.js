/* JavaScript code here */
// Task 2:Array Sum

function sum1(arr) {

    var sum = 0;
    arr.forEach(function (item, index){
        sum = sum + item;

       
    }) 
    return sum;
}
console.log(sum1([1, 1, 1, 1, 1]));

//Task 3: Email validation with regex

function validateEmail(email){
   return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

console.log(validateEmail("hello"))
