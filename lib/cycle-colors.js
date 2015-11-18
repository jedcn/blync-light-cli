function cycleColors(light, colors, cycleTime, totalCycles, currentCycle) {
  if (currentCycle < colors.length * totalCycles) {
    const newColorIndex = currentCycle % colors.length;
    const newColor = colors[newColorIndex];
    light
      .setColor(newColor)
      .then(function() {
        setTimeout(function() {
          cycleColors(light, colors, cycleTime, totalCycles, currentCycle + 1);
        }, cycleTime);
      });
  } else {
    light.turnOff();
  }
};

module.exports = cycleColors;
