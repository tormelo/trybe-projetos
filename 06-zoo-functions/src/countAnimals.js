const { species } = require('../data/zoo_data');

const countResidents = (residents, filterSex) => (
  residents.reduce((total, { sex }) => (
    !filterSex || sex === filterSex ? total + 1 : total
  ), 0)
);

const countAnimals = ({ specie: name = '', sex = '' } = {}) => {
  const animals = species.reduce((result, { name: speciesName, residents }) => ({
    ...result,
    [speciesName]: countResidents(residents, sex),
  }), {});

  return !name ? animals : animals[name];
};

module.exports = countAnimals;
