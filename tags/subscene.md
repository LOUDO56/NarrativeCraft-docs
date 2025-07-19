# Subscene Control

Start or stop a subscene linked to the current scene.

## Syntax

Start subscene:  
`subscene start %subscene_name% [loop=true/false] [block]`

Stop subscene:  
`subscene stop %subscene_name%`

## Parameters

- `%subscene_name%` _(string)_: Name of the subscene to start or stop.
- `loop=true/false` _(boolean, optional)_: Whether the subscene should loop when started.
- `block` _(keyword, optional)_: If present, pauses the story progression until the subscene finishes.

## Example

`subscene start fight_intro loop=true block`  
Starts the subscene "fight_intro", loops it continuously, and blocks story progression until it finishes.

`subscene stop fight_intro`  
Instantly stops the subscene called "fight_intro".
