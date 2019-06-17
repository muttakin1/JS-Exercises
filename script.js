/* JavaScript code here */
// Task 2:Array Sum

function sum1(arr) {

    var sum = 0;
    arr.forEach(function (item, index) {
        sum = sum + item;


    })
    return sum;
}
console.log(sum1([1, 1, 1, 1, 1]));

//Task 3: Email validation with regex

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
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
company.updateAge = function (newAge) { this.age = newAge; }
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
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


function getProp(index, prop) {
    return library[index][prop]

}
console.log(getProp(1, 'author'))

// Task 5
var cart = [
    {
        name: 'Shoes',
        price: 560,
        quantity: 4
    },
    {
        name: 'Regular Tees',
        price: 455.50,
        quantity: 6
    },
    {
        name: 'Socks',
        price: 65.99,
        quantity: 2
    }];
//Task 5a= add a new item
function addItem(newItem) {
    cart.push(newItem)
}

addItem( {name: 'hello',
price: 100,
quantity: 2})


//Task 5 b-SOrt by a given property
function sortCart(prop) {
    cart.sort(function(a,b){
       if( a[prop]<b[prop]){
        return-1;}
        if ( a[prop]>b[prop]){
            return 1;}
        return 0;
    });

    
}
sortCart('price');

console.log(cart);
// Task 5c - find item by name 
function findByName(name) {
    var newArr=cart.filter(function(item){
        return item.name==name
    })
     console.log(newArr) }
//search can pass rejects

findByName("Shoes")

//task 5d- get total cost


var Totalcost=null;

function getTotalcost() {
    //map,reduce
    cart.forEach(function(value){
        Totalcost += value.price;
       
    })
   
    console.log("total cost = "+Totalcost)

}
getTotalcost()