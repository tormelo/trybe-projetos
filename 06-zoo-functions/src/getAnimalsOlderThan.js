const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (speciesName, lowestAge) => (
  species.find(({ name }) => name === speciesName)
    .residents.every(({ age }) => age >= lowestAge)
);

module.exports = getAnimalsOlderThan;
