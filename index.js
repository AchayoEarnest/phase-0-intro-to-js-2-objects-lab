// Write your solution in this file!
const employee = {
                    name : "Earnest",
                    streetAddress : 52
                }

function updateEmployeeWithKeyAndValue(employee, key, value){
     const employee2 = {...employee};
     employee2[key] = value;
     return employee2;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(emoloyee, key){
     const employee2 = {...employee};
     delete employee2[key];
     return employee2;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key];
     return employee;
}