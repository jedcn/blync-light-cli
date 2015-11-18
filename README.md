# Blync CLI

## Usage

### `blync-light color`

*Set the light to a specific color.*

```shell
blync-light color magenta   # CSS name
blync-light color fefefe    # 6 char hex
blync-light color '#fefefe' # 6 char hex with # sign
blync-light color f00       # 3 char hex
blync-light color '#00f'    # 3 char hex with # sign
blync-light color 000       # Turn off
```

If you like to use the hash sign in front of hex values, remember to
surround the color with single quotes or double quotes to avoid the
shell interpreting the `#` as a comment:

* `'#00f'`
* `"#00f"`

### `blync-light cycle`

*Make the light cycle between several colors.*

```shell
# Cycle between purple and blue, one time. Rest on each color for a
# single second.
blync-light cycle --colors 'purple blue'
```

```shell
# Cycle between two colors, 10 times, and rest for two hundred
# milliseconds on each color.
blync-light cycle --colors 'blue white' --cycleTime 200 --totalCycles 10
```

### `blync-light change`

*Make the light change from one color to another.*

```shell
# Change from red to blue, over the course of 10 transitions, with
# each transition taking 1000 milliseconds
blync-light change --fromColor red --toColor blue --totalSteps 10 --stepTime 1000
```

```shell
# Change from one shade of green to another, over the course of 20
# transitions, with each transition transition taking 200 milliseconds
blync-light change --fromColor limegreen --toColor green --totalSteps 10 --stepTime 200
```
