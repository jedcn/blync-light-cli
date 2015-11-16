# Blync CLI

## Usage

### `blync-light color`

```shell
blync-light color magenta   # CSS name
blync-light color fefefe    # 6 char hex
blync-light color #fefefe   # 6 char hex with # sign
blync-light color f00       # 3 char hex
blync-light color '#00f'    # 3 char hex with # sign
blync-light color 000       # Turn off
```

If you like to use the hash sign in front of hex values, remember to
surround the color with single quotes or double quotes to avoid the
shell interpreting the `#` as a comment:

* `'#00f'`
* `"#00f"`
