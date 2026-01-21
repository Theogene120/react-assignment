// let student = {
//     name: 'MUKAMANA Jeanne',
//     age: 35,
//     subject: ['Math', 'English', 'Science']
// }
// let sname = student.name
// console.log('name is: ' + sname)
// let arr = ['Math', 'English', 'Science']
// arr.shift()
// console.log(arr)
// student.grade = 'A'
// console.log()
// console.log(student.subject.join(','))

//++++++++++++++++++++++++++++++++++++++++++++++

// let fruits = ["Apple", "Banana", "Mango", "Orange"]
// let list = () => fruits.forEach(v => console.log(v))
// list()
// let fruitsUpper =  fruits.map(v => v.toUpperCase())
// console.log(fruitsUpper)
// let isMangoExist = fruits.includes('Mango')
// console.log(isMangoExist)
// console.log(fruits.join(','))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// let ages = [12, 18, 25, 30, 15, 40];
// let over18 = ages.filter(v => v > 18)
// console.log(over18)
// let countOver20 = ages.filter(v => v > 20).length
// console.log(countOver20)
// let firstGreater20 = ages.filter(v => v > 25).sort((a,b) => a-b)[0]
// console.log(firstGreater20)
// let everyGreater10 = ages.every(v => v > 10)
// console.log(everyGreater10)
// let everyLess15 = ages.every(v => v < 15)
// console.log(everyLess15)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let prices = [100, 200, 300]

// let price10percent = prices.map(v => Math.floor(v * 1.1))
// console.log(price10percent)
// let string = prices.map(v => `${v}`)
// console.log(string)
// let sum = prices.reduce((v, sum) => sum + v, 0)
// console.log(sum)

//+++++++++++++++++++++++++++++++++++++++++++

// let scores = [45, 90, 60, 30, 80];

// console.log(scores.sort((a,b) => a-b))
// console.log(scores.sort((a,b) => b-a))
// console.log(Math.max(...scores))
// console.log(Math.min(...scores))
// scores.pop()
// console.log(scores)

//+++++++++++++++++++++++++++++++++++++++++++

// let student = { 
//     name: "John", 
//     age: 20, 
//     grade: "A" 
// }; 

// student.age = 21
// console.log(student)

// delete student.grade
// console.log(student)
// let keys = Object.keys(student)
// console.log(keys)
// for(let key in student){
//     console.log(`${key} : ${student[key]}`)
// }
// console.log('model' in student)

//+++++++++++++++++++++++++++++++++++++++++++

// let users = [ 
// { name: "Alice", age: 25 }, 
// { name: "Bob", age: 30 }, 
// { name: "Charlie", age: 20 } 
// ];

// users.map(obj => console.log(obj.name))
// let over25 = users.filter(obj => obj.name === 'Bob')
// console.log(over25)
// let ages = users.map(obj => obj.age)
// console.log(ages)
// console.log(users.sort((a,b) => a.age - b.age))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let calculator = { 
//     add: function(a, b) { return a + b; }, 
//     subtract: function(a, b) { return a - b; } 
// };

// console.log(calculator.add(3,4))
// console.log(calculator.subtract(3,4))

// let mutliply = (a,b) => a * b 
// calculator.mutliply = mutliply
// let div = (a,b) => a / b 
// calculator.division = div
// console.log(calculator.mutliply(3,4))

// for(let key in calculator){
//     console.log(key)
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let employee = { 
//     name: "Emma", 
//     address: { 
//     city: "Kigali", 
//     country: "Rwanda" 
//     } 
// }; 

// console.log(employee.address.city)
// employee.address.country = 'Canada'
// console.log(employee)
// employee.address.postalCode = 1011
// console.log(employee)
// for(let key in employee.address){
//     console.log(key)
// }

// delete employee.address.city
// console.log(employee)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let person = { 
// firstName: "Paul", 
// lastName: "Smith", 
// age: 28 
// }; 

// let {firstName, lastName, ...rest} = person
// console.log(rest)
// let {age: personAge} = person             // rename
// let {gender = "Gender not fund"} = person // default value

// let info = ({firstName, lastName, age: personAge, gender = "Gender not fund"}) => 
//     `Fist name: ${firstName} \nLast name: ${lastName} \nAge: ${personAge} \nGender: ${gender}`

// console.log(info(person)) // display everything

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let colors = ["Red", "Green", "Blue"]; 

// let [firstColor, secondColor, ...rest] = colors
// console.log(firstColor)
// console.log(secondColor)
// console.log(rest)
// let [_ , color2, color3, color4 = 'Skyblue'] = colors
// console.log(`${color2}, ${color3}, ${color4}`)

// // Swapping

// let a = 'red';
// let b = 'blue';

// [a, b] = [b, a]

// console.log(a, b)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let data = { 
//     id: 1, 
//     title: "JavaScript" 
// };

// let jsonObj = JSON.stringify(data)
// console.log(jsonObj)
// let parsedObj = JSON.parse(jsonObj)
// console.log(parsedObj)
// console.log(parsedObj.title)
// parsedObj.author = "Theos"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let months = ["Jan", "Feb", "Mar", "Apr", "May"]; 

// months.splice(2, 1)
// console.log(months)         // [ 'Jan', 'Feb', 'Apr', 'May' ]

// months.splice(2, 0, 'Jun')
// console.log(months)        // [ 'Jan', 'Feb', 'Jun', 'Apr', 'May' ]

// let first3 = months.slice(0,3)
// console.log(first3)           // [ 'Jan', 'Feb', 'Jun' ]

// months.splice(3, 1, 'July')  // [ 'Jan', 'Feb', 'Jun', 'July', 'May' ]
// console.log(months)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let values = [10, "20", 30, "40"]; 

// let num = values.every(v => typeof v === 'number')
// console.log(num)
// console.log(values)
// let numValues = values.map(v => Number(v))
// console.log(numValues)
// let onlyNum = values.filter(v => typeof v === 'number')
// console.log(onlyNum)

// let sum = numValues.reduce((v, sum) => sum + v,0)
// console.log(sum)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

let products = [ 
{ name: "Phone", price: 500 }, 
{ name: "Laptop", price: 1000 }, 
{ name: "Tablet", price: 300 } 
]; 

let price = products.map(obj => obj.price)
console.log(price)
let exp = products.filter(obj => obj.price === Math.max(...price))
console.log(exp)