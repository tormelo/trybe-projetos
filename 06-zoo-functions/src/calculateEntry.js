const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter(({ age }) => age < 18).length,
  adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
  senior: entrants.filter(({ age }) => age >= 50).length,
});

function calculateEntry(entrants = []) {
  if (!Array.isArray(entrants) || entrants === []) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
