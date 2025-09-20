# Dialog Parameters

Change current parameters of the dialog box appearance and behavior.

## Syntax

`dialog <offset, scale, padding, width, text_color, background_color, gap, letter_spacing, no_skip, auto_skip, manual_skip, bobbing> [%value1%] [%value2%]`

## Parameters and Descriptions

- `offset` _(float, float)_: Adjusts the x,y position of the dialog box from his initial position.

- `scale` _(float)_: Changes the size scale of the dialog box. Default is 1.

- `padding` _(float)_: Sets the padding inside the dialog box around the text.

- `width` _(int)_: Sets the width of the dialog box in pixels.

- `text_color` _(hex value)_: Changes the text color of the dialog box.

- `background_color` _(hex value)_: Changes the background color of the dialog box.

- `gap` _(float)_: Sets the gap between dialog texts.

- `letter_spacing` _(float)_: Adjusts spacing between letters.

- `no_skip` _(boolean)_: Makes the dialog impossible for the player to skip.

- `manual_skip` _(boolean)_: Makes the dialog skippable manually.

- `auto_skip` _(float)_: Automatically skips dialog after the given seconds once finished.

- `bobbing` _(float, float)_: Adds bobbing animation with speed and strength parameters.

## Examples

`dialog offset -1 0.7`  
Moves the dialog up by 1 and move to the right by 0.7.

`dialog scale 1.3`  
Increases dialog box size by 30%.

`dialog background_color K862J5`  
Sets dialog background color to hex code "K862J5".

`dialog bobbing 1.2 2.4`  
Adds bobbing animation with speed 1.2 and strength 2.4.

`dialog no_skip`  
Makes the dialog not skippable by the player.

`dialog auto_skip 2`  
Dialog automatically skips 2 seconds after finishing.
