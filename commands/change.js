'use strict';

const colorLookup = require('blync-core/lib/color-lookup');
const cycleColors = require('../lib/cycle-colors');

function noSmallerNoBigger(number, smallest, biggest) {
  return Math.min(Math.max(number, smallest), biggest);
}

function findShift(start, end, steps) {
  const roundedUpAbsDiff = Math.ceil(Math.abs(start - end) / steps);
  let direction = 1;
  if (start > end) {
    direction = -1;
  }
  return direction * roundedUpAbsDiff;
}

function determineColors(fromColor, toColor, totalSteps) {
  const fromRGB = colorLookup(fromColor);
  const toRGB = colorLookup(toColor);
  const redShift = findShift(fromRGB[0], toRGB[0], totalSteps);
  const greenShift = findShift(fromRGB[1], toRGB[1], totalSteps);
  const blueShift = findShift(fromRGB[2], toRGB[2], totalSteps);

  const colors = [];
  const firstColor = [ fromRGB[0], fromRGB[1], fromRGB[2] ];
  const lastColor = [ toRGB[0], toRGB[1], toRGB[2] ];
  let currentColor = firstColor;
  colors.push(firstColor);
  for(let i = 0; i < totalSteps; i++) {
    let newColor = [ noSmallerNoBigger(currentColor[0] + redShift, 0, 255),
                     noSmallerNoBigger(currentColor[1] + greenShift, 0, 255),
                     noSmallerNoBigger(currentColor[2] + blueShift, 0, 255) ];
    colors.push(newColor);
    currentColor = newColor
  }
  colors.push(lastColor);
  return colors;
}
//
// Given a blync-light run ala:
//
// blync-light fade --fromColor red --toColor blue --totalSteps 10 --stepTime 1000
//
// Start the light at red and every second move it one step closer to
// being blue. Take 10 steps in total such that the first 1000 millis
// it is red and the last 1000 millis it is blue.
//
// Print an error if something goes wrong.
//
module.exports = function(options) {
  const light = options.light;
  const argv = options.argv;
  const fromColor = argv.fromColor;
  const toColor = argv.toColor;
  const totalSteps = argv.totalSteps;
  const stepTime = argv.stepTime;
  const colors = determineColors(fromColor, toColor, totalSteps);
  cycleColors(light, colors, stepTime, 1, 0);
}
