// See:
//
//  http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
//
// And:
//
//  http://blog.adamcole.ca/2011/11/simple-javascript-rainbow-color.html
//
module.exports = function rainbow(numOfSteps, step) {
  'use strict';
  let r, g, b;
  const h = step / numOfSteps;
  const i = ~~(h * 6);
  const f = h * 6 - i;
  const q = 1 - f;
  switch(i % 6) {
    case 0: r = 1; g = f; b = 0; break;
    case 1: r = q; g = 1; b = 0; break;
    case 2: r = 0; g = 1; b = f; break;
    case 3: r = 0; g = q; b = 1; break;
    case 4: r = f; g = 0; b = 1; break;
    case 5: r = 1; g = 0; b = q; break;
  }
  const red = ("00" + (~ ~(r * 255)).toString(16)).slice(-2);
  const green = ("00" + (~ ~(g * 255)).toString(16)).slice(-2);
  const blue = ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
  return [ red, green, blue ];
}
