'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

const computeEarnings = (tasks, hours) =>
  tasks
    // Covert minutes to hours.
    .map(task => [task.duration] / 60)
    // Extract the hours > 2
    .filter(duration => [duration] >= 2)
    // calculate the amount with estimated hourly rate
    .map(estimateHours => estimateHours * hours)
    // calculate the total amount
    .reduce((accumulator, currentValue) => accumulator + currentValue);
// Replace this comment and the next line with your code

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
const result = earnings.toFixed(2);

console.log(result);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
