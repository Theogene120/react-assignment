let company = {
    name: 'University of Rwanda',
    employees: [
        {id: 1, name: 'Peter', role: 'Developer'},
        {id: 2, name: 'Emmanuel', role: 'Designer'},
        {id: 1, name: 'Celestin', role: 'Manager'}
    ]
}

let secEmp = company.employees[1]
console.log(secEmp)
for(let obj of company.employees){
    if(obj.id === 2){
        console.log(obj)
    }
}

let fourthEmp = {id: 4, name: 'john', role: 'Tester'}
company.employees.push(fourthEmp)

for(let obj of company.employees){
    if(obj.name === 'Emmanuel'){
        console.log(obj)
    }
}

// ************ Quetion 4 **********************************

let fruits = ['apple', 'banana', 'mango']
let vegetable = ['carrot', 'onions', 'tomatoes']
let combined_Sorted_Arr = [...fruits, ...vegetable].sort()
console.log(combined_Sorted_Arr)