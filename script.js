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

//Task 4: Status printing

var company = {
    name: "Google", 
    age: 19, 
    ceo: {
    first_name: "Sundar", 
    last_name: "Pichai"
    }
    };
    console.log(company);
company.updateAge = function(newAge)
{this.age= newAge; }
company.updateAge(23)

console.log(company);

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


function getProp(index,prop){
    return library[index][prop]

}
console.log(getProp(1,'author'))

