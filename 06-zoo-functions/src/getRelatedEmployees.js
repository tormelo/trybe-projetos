const { employees } = require('../data/zoo_data');

const isManager = (id) => (
  employees.some(({ managers }) => managers.includes(id))
);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return relatedEmployees;
};

module.exports = { isManager, getRelatedEmployees };
