// Write your solution in this file!
const employee = {
    name: 'scott',
    streetAddress: 'prior 310',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObject = {...obj};
    newObject[key] = value;
    return newObject;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}