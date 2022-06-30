const { species } = require('../data/zoo_data');

const getSpeciesByRegion = (region) => (
  species.filter(({ location }) => location === region).map(({ name }) => name)
);

const getSpeciesResidents = (speciesName, filterSex) => (
  species
    .find(({ name }) => name === speciesName).residents
    .reduce((residents, { name, sex }) => (
      !filterSex || sex === filterSex ? [...residents, name] : [...residents]
    ), [])
);

const getSpeciesMap = () => ({
  NE: getSpeciesByRegion('NE'),
  NW: getSpeciesByRegion('NW'),
  SE: getSpeciesByRegion('SE'),
  SW: getSpeciesByRegion('SW'),
});

const getAnimalMap = ({ includeNames = false, sex = '', sorted = false } = {}) => {
  const map = getSpeciesMap();
  if (includeNames) {
    const keys = Object.keys(map);
    keys.forEach((key) => {
      map[key] = map[key].map((speciesName) => {
        const residents = getSpeciesResidents(speciesName, sex);
        return {
          [speciesName]: sorted ? residents.sort() : residents,
        };
      });
    });
  }
  return map;
};

module.exports = getAnimalMap;
