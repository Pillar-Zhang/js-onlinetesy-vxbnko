const terminalTime = '130A1F10282700760368025D';
import { isNaN } from 'lodash';

const timeIsDate = (obj) => {
  const preIsDate = new Date(`20${obj.year}-${obj.month}-${obj.date} ${obj.hour}:${obj.minutes}:${obj.second}`).getTime();
  const afterIsDate = [obj.ms, obj.us, obj.ns].find(t => t > 999);
  return !isNaN(preIsDate) && !afterIsDate;
};


const DateFormat = (obj) => `20${obj.year}-${obj.month}-${obj.date} ${obj.hour}:${obj.minutes}:${obj.second} ${obj.ms}.${obj.us}.${obj.ns}`;
const timeArray = ['year', 'month', 'date', 'hour', 'minutes', 'second', 'ms', 'us', 'ns'];

const dateMap = {};
const ConversionHexToTime = (str) => {
  if (!str || str.length !== 24) return;
  const sliceArray = [0, 2, 2, 2, 2, 2, 2, 4, 4, 4];
  const rules = [];
  const IntArray = [];
  sliceArray.reduce((a, b) => {
    rules.push(a + b);
    return a + b;
  }, 0);
  for (let i = 0; i < rules.length - 1; i += 1) {
    const hex = str.slice(rules[i], rules[i + 1]);
    const number = parseInt(hex, 16);
    if (i < 6) {
      IntArray.push((`${number}`).padStart(rules[i + 1] - rules[i], 0));
      dateMap[timeArray[i]] = (`${number}`).padStart(rules[i + 1] - rules[i], 0);
    } else {
      IntArray.push((`${number}`).padStart(3, 0));
      dateMap[timeArray[i]] = (`${number}`).padStart(3, 0);
    }
  }
  console.log("dateMap:",dateMap)
  return dateMap;
};
ConversionHexToTime(terminalTime)
const headClockTimeFormat = (str) => {
  if (!str || str.length !== 23) return;
  const sliceArray = [0, 4, 2, 2, 2, 2, 2, 3, 3, 3];
  const rules = [];
  const IntArray = [];
  sliceArray.reduce((a, b) => {
    rules.push(a + b);
    return a + b;
  }, 0);
  for (let i = 0; i < rules.length - 1; i += 1) {
    const number = str.slice(rules[i], rules[i + 1]);
    if (i < 6) {
      IntArray.push((`${number}`).padStart(rules[i + 1] - rules[i], 0));
      dateMap[timeArray[i]] = (`${number}`).padStart(rules[i + 1] - rules[i], 0);
    } else {
      IntArray.push((`${number}`).padStart(3, 0));
      dateMap[timeArray[i]] = (`${number}`).padStart(3, 0);
    }
  }
  return `${dateMap.year}-${dateMap.month}-${dateMap.date} ${dateMap.hour}:${dateMap.minutes}:${dateMap.second} ${dateMap.ms}.${dateMap.us}.${dateMap.ns}`;
};

export {
  timeIsDate,
  DateFormat,
  ConversionHexToTime,
  headClockTimeFormat
};