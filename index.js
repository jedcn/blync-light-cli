'use strict';

function Blync() {
  const HID = require('node-hid');
  const devices = HID.devices();
  const blyncLights = devices.filter(function(element, index, array) {
    return element.product === 'Blynclight'
  });
  const firstBlyncLight = blyncLights[0];
  // firstBlyncLight == {
  //   vendorId: 3667,
  //   productId: 9494,
  //   path: 'USB_0e53_2516_14100000',
  //   product: 'Blynclight',
  //   release: 256,
  //   interface: -1
  // }
  const firstBlyncLightPath = firstBlyncLight.path
  this.device = new HID.HID(firstBlyncLightPath);
};

Blync.prototype.setColor = function(red, blue, green) {
  this.sendCommand(red, blue, green);
};

Blync.prototype.turnOff = function() {
  var commandBuffer = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    111 & 0xFF
  ];
  try {
    this.device.write(commandBuffer);
  } catch (e) {
    console.log('write failed: ', e);
  }
};

Blync.prototype.sendCommand = function (red, green, blue) {
  var commandBuffer = [];
  commandBuffer[0] = 0x00;
  commandBuffer[1] = red;
  commandBuffer[2] = blue;
  commandBuffer[3] = green;
  commandBuffer[4] = 0; // 0 is stable, 70 is fast blink, 100 is medium blink
  commandBuffer[5] = 90;
  commandBuffer[6] = 0x40;
  commandBuffer[7] = 0x02;
  commandBuffer[8] = 0xFF; // Did this turn it off? controlCode & 0xFF
  try {
    this.device.write(commandBuffer);
  } catch (e) {
    console.log('write failed: ', e);
  }
};

const blync = new Blync();

// Uncomment to get ~30 second long color display
//
// const rainbow = require('./lib/rainbow');
// const numberOfColors = 256;
// for(let i = 0; i < numberOfColors; i++) {
//   (function(n) {
//     setTimeout(function() {
//       const rgb = rainbow(numberOfColors, n);
//       blync.setColor(parseInt(rgb[0], 16), parseInt(rgb[1], 16), parseInt(rgb[2], 16));
//     }, n * 100);
//   })(i);
// }

// Uncomment to set to a specific RGB
blync.setColor(255, 0, 0);

// Uncomment to turn off
// blync.turnOff();
