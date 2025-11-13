# Border

Add customizable borders around the screen to change the resolution and enhance ambiance.

## Syntax

- `border %up% %right% %down% %left% [%color%] [%opacity%] [in %fade_time% [%easing%]]`
- `border <out> %fade_time% [%easing%]`
- `border clear`

## Parameters

- `up` _(int, required)_ Top border height in pixels.
- `right` _(int, required)_ Right border width in pixels.
- `down` _(int, required)_ Bottom border height in pixels.
- `left` _(int, required)_ Left border width in pixels.
- `color` _(string, optional)_ Hexadecimal color code (without `#`). Default is black or transparent.
- `opacity` _(float, optional)_ Value from `0` (fully transparent) to `1` (fully opaque). Default is fully opaque.
- `fade_time` _(float, optional)_ Fade in value
- `easing` _(string, optional)_ Easing for the fade.

## Examples

- `border 10 0 10 0 4J5162 0.5`
- `border 10 0 10 0 000000 1.0 in 4 ease_out`

## Aspect Ratio Presets

- Cinematic 2.39:1 → `border 56 0 56 0`
- Widescreen 1.85:1 → `border 21 0 21 0`
- Classic 4:3 → `border 75 0 75 0`
