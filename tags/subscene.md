# Subscene Control

Start or stop a subscene linked to the current scene.

## Syntax

Start subscene:

`subscene start %subscene_name% [loop=true/false] [unique=true/false] [block=true/false]`

Stop subscene:

`subscene stop %subscene_name%`

## Parameters

- `%subscene_name%` _(string)_: Name of the subscene to start or stop.
- `loop` _(boolean, optional)_ , whether the animation should loop. Default is `false`.
- `unique` _(boolean, optional)_ , if true, the character will be removed from the word. Default is `false`.
- `block` _(boolean, optional)_ , if true, the story will wait for the animation to complete before continuing. Default is `false`.

::: info
This is a **blocking command** if `block` is true. It will pause the story until the subscene ends.
:::

## Example

`subscene start fight_intro true false true`  
Starts the subscene "fight_intro", loops it continuously, and blocks story progression until it finishes.

`subscene stop fight_intro`  
Instantly stops the subscene called "fight_intro".
