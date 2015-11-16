'use strict';

const blyncCore = require('blync-core');
const blyncLight = blyncCore.findFirstBlyncLight();

// Red for a second, then blue for a second, then off.
blyncLight.setColor('red')
  .then(function() {
    setTimeout(function() {
      blyncLight.setColor('blue');
      setTimeout(function() {
        blyncLight.turnOff();
      }, 1000);
    }, 1000);
  })
