const { employees } = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const employee = employees.find(({ firstName, lastName }) => (
    firstName === name || lastName === name
  ));
  return employee !== undefined ? employee : {};
};

module.exports = getEmployeeByName;
