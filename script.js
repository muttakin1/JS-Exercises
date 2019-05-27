/* JavaScript code here */
// Task 2:Array Sum

function sum1(arr) {

    var sum = 0;
    arr.forEach(function (item, index){
        sum = sum + item;

       
    })
    return sum;
}
console.log(sum1([1, 2, 3, 4, 5]));