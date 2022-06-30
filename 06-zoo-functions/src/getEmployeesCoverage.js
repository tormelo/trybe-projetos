const { employees, species } = require('../data/zoo_data');

const invalidInfo = new Error('Informações inválidas');

const employeeIds = employees.map(({ id }) => id);
const employeeNames = [
  ...employees.map(({ firstName }) => firstName),
  ...employees.map(({ lastName }) => lastName),
];

const getEmployeeById = (employeeId) => {
  if (!employeeIds.includes(employeeId)) throw invalidInfo;
  return employees.find(({ id }) => id === employeeId);
};

const getEmployeeByName = (employeeName) => {
  if (!employeeNames.includes(employeeName)) throw invalidInfo;
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  ));
};

const getSpeciesNames = (speciesIds) => (
  speciesIds.map((speciesId) => (
    species.find(({ id }) => id === speciesId).name
  ))
);

const getSpeciesLocations = (speciesIds) => (
  speciesIds.map((speciesId) => (
    species.find(({ id }) => id === speciesId).location
  ))
);

const getEmployeeCoverage = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpeciesNames(responsibleFor),
  locations: getSpeciesLocations(responsibleFor),
});

const getEmployeesCoverage = ({ name = '', id = '' } = {}) => {
  try {
    let coverage;
    if (id) {
      coverage = getEmployeeCoverage(getEmployeeById(id));
    } else if (name) {
      coverage = getEmployeeCoverage(getEmployeeByName(name));
    } else {
      coverage = employees.map((employee) => getEmployeeCoverage(employee));
    }
    return coverage;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = getEmployeesCoverage;
