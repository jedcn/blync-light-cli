const HID = require('node-hid');

function Blync() {
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

Blync.prototype.setColor = function(color) {
  console.log('color', color);
  this.sendCommand(color);
};

Blync.prototype.sendCommand = function (controlCode) {
  console.log('sendCommand', controlCode);
  var commandBuffer = [];
  commandBuffer[0] = 0;
  commandBuffer[1] = 85;
  commandBuffer[2] = 83;
  commandBuffer[3] = 66;
  commandBuffer[4] = 67;
  commandBuffer[5] = 0;
  commandBuffer[6] = 64;
  commandBuffer[7] = 2;
  commandBuffer[8] = controlCode & 0xFF;
  console.log('commandBuffer', commandBuffer);
  try {
    const result = this.device.write(commandBuffer);
    console.log('write result', result);
  } catch (e) {
    console.log('write failed: ', e);
  }
};

const blync = new Blync();
blync.setColor(111);
