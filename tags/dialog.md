# Dialog (Non-Tag)

Dialog lines in NarrativeCraft are standard Ink lines but can trigger in-game speech when written in a specific format.

## Syntax

`<character_name>: <dialog>`

### Example

`Mark: Hello!`

If **no character** is specified (e.g., `Hello!`), the dialog will be displayed in **2D on the screen**, not in the 3D world.

::: danger Important
The character **must be spawned in the world** before speaking.  
This means they need to be present through an animation, subscene, cutscene, or camera angle where the character is linked.  
Otherwise, the story will crash and throw a runtime error.
:::

## Text Effects

You can apply animated text effects to dialog using inline tags.

### Syntax

`[<effect> (param1=value1, param2=value2)]<text>[/<effect>]`

Effects apply **only** to the enclosed text. All parameters are optional unless stated otherwise.

### Available Effects

#### `waving`

Applies a horizontal wave motion to the text.

`[waving]Hellooo!![/waving]`

#### `shaking`

Applies a chaotic shaking motion.

**Parameters:**

- `time` _(float, optional)_ , interval between shakes. Lower = faster movement.
- `force` _(float, optional)_ , intensity of the shake.

`[shaking time=0.02, force=0.2]I'm angry![/shaking]`

## Example

`Mark: [shaking force=0.1]What did you just say?[/shaking]`
