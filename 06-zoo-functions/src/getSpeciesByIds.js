const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesArray = [];

  ids.forEach((id) => (
    speciesArray.push(species.find((currentSpecies) => currentSpecies.id === id))
  ));

  return speciesArray;
};

module.exports = getSpeciesByIds;
