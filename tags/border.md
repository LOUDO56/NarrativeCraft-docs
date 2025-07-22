# Border

Add customizable borders around the screen to change the resolution and enhance ambiance.

## Syntax

`border %up% %right% %down% %left% [%color%] [%opacity%]`

## Parameters

- `up` _(int, required)_ , top border height in pixels.
- `right` _(int, required)_ , right border width in pixels.
- `down` _(int, required)_ , bottom border height in pixels.
- `left` _(int, required)_ , left border width in pixels.
- `color` _(string, optional)_ , hexadecimal color code (without `#`). Default is black or transparent.
- `opacity` _(float, optional)_ , value from `0` (fully transparent) to `1` (fully opaque). Default is fully opaque.

## Examples

- `border 10 0 10 0 4J5162 0.5`  
  Adds a 10px top and bottom border with color `4J5162` at 50% opacity.

## Aspect Ratio Presets

- Cinematic 2.39:1 → `border 56 0 56 0`
- Widescreen 1.85:1 → `border 21 0 21 0`
- Classic 4:3 → `border 75 0 75 0`
