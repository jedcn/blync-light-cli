const cycleColors = require('../lib/cycle-colors');

//
// Given a blync-light run ala:
//
// blync-light cycle --colors 'red white blue' --cycleTime 1000 --totalCycles 1
//
// Make the light cycle once between turning red white and
// blue. Switch colors every 1000 milliseconds.
//
// Print an error if something goes wrong.
//
module.exports = function(options) {
  const light = options.light;
  const argv = options.argv;
  const colors = argv.colors.split(' ');
  const cycleTime = argv.cycleTime || 1000;
  const totalCycles = argv.totalCycles || 1;
  cycleColors(light, colors, cycleTime, totalCycles, 0);
}
