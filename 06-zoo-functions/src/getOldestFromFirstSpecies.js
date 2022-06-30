const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employeeId) => {
  const firstSpeciesId = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const speciesResidents = species.find(({ id }) => id === firstSpeciesId).residents;
  const { name, sex, age } = speciesResidents.reduce((previous, current) => (
    current.age > previous.age ? current : previous
  ));
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
