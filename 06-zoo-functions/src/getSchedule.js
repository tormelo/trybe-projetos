const { species, hours } = require('../data/zoo_data');

const days = Object.keys(hours);
const animals = species.map(({ name }) => name);

const getType = (input) => {
  let type;
  if (animals.includes(input)) {
    type = 'animal';
  } else if (days.includes(input)) {
    type = 'day';
  } else {
    type = 'none';
  }
  return type;
};

const getScheduleAnimal = (speciesName) => (
  species.find(({ name }) => speciesName === name).availability
);

const getScheduleDay = (day) => {
  const schedule = {};
  if (day === 'Monday') {
    schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    schedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(day))
        .map(({ name }) => name),
    };
  }
  return schedule;
};

const getScheduleAll = () => (
  days.reduce((result, day) => ({
    ...result,
    ...getScheduleDay(day),
  }), {})
);

const getSchedule = (scheduleTarget) => {
  switch (getType(scheduleTarget)) {
  case 'animal':
    return getScheduleAnimal(scheduleTarget);
  case 'day':
    return getScheduleDay(scheduleTarget);
  default:
    return getScheduleAll();
  }
};

module.exports = getSchedule;
