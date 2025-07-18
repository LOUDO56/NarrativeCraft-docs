# Border

Add customizable borders around the screen to adjust the visible resolution and enhance ambiance.

`border %up% %right% %down% %left% [%color%] [%opacity%]`

## Parameters

- **%up%**: Size of the top border in pixels.
- **%right%**: Size of the right border in pixels.
- **%down%**: Size of the bottom border in pixels.
- **%left%**: Size of the left border in pixels.
- **[%color%]** (optional): Hexadecimal color code for the border (without #).  
  _Example_: `4J5162`  
  Defaults to black or transparent if omitted.
- **[%opacity%]** (optional): Opacity of the border as a float between 0 (transparent) and 1 (fully opaque).  
  _Example_: `0.5`

## Example

- `border 10 0 10 0 4J5162 0.5`  
  Adds a top and bottom border of 10 pixels each, colored with hex `4J5162`, at 50% opacity.

- Common aspect ratio presets:
  - Cinematic 2.39:1 → `border 56 0 56 0`
  - Widescreen 1.85:1 → `border 21 0 21 0`
  - Classic 4:3 → `border 75 0 75 0`
