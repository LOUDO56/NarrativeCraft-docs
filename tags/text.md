# Text

Display and control on-screen text elements using an ID-based system.  
Each text element can be created, modified, repositioned, styled, or removed dynamically.

## Syntax

`text %id% <create|remove|edit|position|color|scale|spacing|width|fade|fadein|fadeout|type|font|sound> %...values%`

## Description

The `text` tag allows the display of text on the player's screen.  
Each text element is identified by an **ID** (`%id%`), making it possible to modify its appearance or behavior without recreating it.

## Parameters

- `%id%` _(string, required)_: Unique identifier for the text element.
- `<action>` _(string, required)_: The operation to perform on the text element.

### Actions

### `create`
Creates a new text element.  
**Syntax:**  
`text %id% create "Your text here" [%color%] (--no-drop-shadow)`

Example:  
`text inside_head create "You failed." color=e81a1a dropShadow=true`

### `edit`
Edits the text content of an existing element.  
**Syntax:**  
`text %id% edit "New text content"`

Example:  
`text inside_head edit "Again."`

### `remove`
Removes the specified text element from the screen.  
**Syntax:**  
`text %id% remove`

### `position`
Sets the screen position of the text element.  
**Syntax:**  
`text %id% position <top_left|top|top_right|center_left|center|center_right|bottom_left|bottom|bottom_right>`

Example:  
`text title position top_center`

### `color`
Changes the text color.  
**Syntax:**  
`text %id% color %hex_color%`

Example:  
`text inside_head color e81a1a`

### `scale`
Sets the text scale.  
**Syntax:**  
`text %id% scale %value%`

Example:  
`text inside_head scale 1.7`

### `spacing`
Add offset to text position.  
**Syntax:**  
`text %id% spacing %x% %y%`

Example:  
`text inside_head spacing 0.5 2`

### `width`
Defines the maximum width of the text block (for wrapping).  
**Syntax:**  
`text %id% width %value%`

### `fade`, `fadein`, `fadeout`
Controls fade effects.  
**Syntax:**  
- `text %id% fade %in_value% %stay_value% %out_value%` — applies both fade in/out  
- `text %id% fadein %value%` — fades in and stay infinitely
- `text %id% fadeout %value%` — fades out text when called

Example:  
`text inside_head fadein 1.5`

### `type`
Defines typing behavior.  
**Syntax:**  
`text %id% type %end_after% %text_speed% --block`

Example:  
`text inside_head type 2 0.1 --block`

### `font`
Changes the font of the text. You need to reference it to the `font/default.json` file of your resource pack
**Syntax:**  
`text %id% font %resource_path%`

Example:  
`text title font font/arial`

### `sound`
Assigns a custom typing sound to the text.  
**Syntax:**  
`text %id% sound %sound_name%`

Example:  
`text title sound sfx/computer`

## Examples

```text
text inside_head create "And you are aware of it."
text inside_head position top_left
text inside_head spacing 10 10
text inside_head scale 1.7
text inside_head type 2 0.1 --block
text inside_head color e81a1a
text inside_head edit "You are [shake]horrible[/shake]."
text inside_head edit "You make me [shake]sick[/shake]."
```
