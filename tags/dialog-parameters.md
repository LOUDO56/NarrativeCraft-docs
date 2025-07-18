# Dialog Parameters

Change current parameters of the dialog box appearance and behavior.

`dialog <offset, scale, padding, width, textColor, backgroundColor, gap, letterSpacing, unSkippable, autoSkip, bobbing> [%value1%] [%value2%]`

## Parameters and Descriptions

- **offset**: Adjusts the vertical position of the dialog box.  
  *Value*: Float (positive or negative)  
  *Example*: `dialog offset -1` moves the dialog box up by 1 unit.

- **scale**: Changes the size scale of the dialog box.  
  *Value*: Float (default 1)  
  *Example*: `dialog scale 1.3` increases the dialog box size by 30%.

- **padding**: Sets the padding inside the dialog box around the text.  
  *Value*: Float or Integer (pixels or relative units)  
  *Example*: `dialog padding 5` adds padding of 5 units around the text.

- **width**: Sets the width of the dialog box.  
  *Value*: Integer (pixels)  
  *Example*: `dialog width 300` makes the dialog box 300 pixels wide.

- **textColor**: Changes the text color using hex code or color name.  
  *Value*: Hex string or Minecraft color code  
  *Example*: `dialog textColor FF0000` sets text color to red.

- **backgroundColor**: Changes the background color of the dialog box.  
  *Value*: Hex string or Minecraft color code  
  *Example*: `dialog backgroundColor 862J5` sets the background to a specific color.

- **gap**: Sets the gap between dialog elements (like text and portrait).  
  *Value*: Integer or Float  
  *Example*: `dialog gap 10` sets gap size to 10 units.

- **letterSpacing**: Adjusts spacing between letters for stylistic effects.  
  *Value*: Float (e.g., 1.0 = normal spacing)  
  *Example*: `dialog letterSpacing 1.2` increases spacing by 20%.

- **unSkippable**: Makes the dialog impossible to skip by the player.  
  *Value*: No additional value needed  
  *Example*: `dialog unSkippable`

- **autoSkip**: Automatically skips dialog after a delay once finished.  
  *Value*: Number (seconds)  
  *Example*: `dialog autoSkip 2` auto skips dialog 2 seconds after finishing.

- **bobbing**: Adds a bobbing animation to the dialog box.  
  *Values*: Two numbers — first is speed, second is strength of bobbing  
  *Example*: `dialog bobbing 200 150` where 200 = speed, 150 = strength

## Example

`dialog offset -1 0.7`  
Moves the dialog box up by 1 unit and applies a secondary parameter 0.7 (depends on implementation).

`dialog scale 1.3`  
Increases dialog box size by 30%.

`dialog backgroundColor K862J5`  
Sets background color using the code "K862J5".

`dialog bobbing 200 150`  
Adds bobbing animation with speed 200 and strength 150.

`dialog unSkippable`  
Player cannot skip this dialog.

`dialog autoSkip 2`  
Dialog will auto skip 2 seconds after finishing.
