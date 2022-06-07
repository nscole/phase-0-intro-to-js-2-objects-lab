
let employee = {
    name: "Jennifer Aniston",
    streetAddress: "32 Wallaby Way",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
   return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    return Object.assign({}, delete employee.key);
}



