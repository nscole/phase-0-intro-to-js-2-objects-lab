// Write your solution in this file!
const employee = {
 name: "Naomi Cole",
 streetAddress: "32 Wallaby Way"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
};


function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
};

fuction deleteFromEmployeeByKey(employee, key) {

};

