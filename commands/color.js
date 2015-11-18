//
// Given a blync-light run ala:
//
// blync-light color red
//
// Make the light turn red.
//
// Print an error if something goes wrong.
//
module.exports = function(options) {
  const color = options.argv._[1];
  options.light
    .setColor(color)
    .catch(function(error) {
      console.log('Error ' + error.message);
    });
}
