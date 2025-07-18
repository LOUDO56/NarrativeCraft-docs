# Subscene Control

Start or stop a subscene on the current scene. These actions target subscenes that have been linked to the current scene beforehand.

## Start Subscene

`subscene start %subscene_name% [loop=true/false] [block]`

- **%subscene_name%**: The name of the subscene to start.
- **loop=true/false** *optional*: Whether the subscene should loop.
- **block** *optional*: If present, the story will wait until the subscene completes.

## Stop Subscene

`subscene stop %subscene_name%`

- Stops the specified subscene.

::: info
Using the `block` keyword makes this a blocking command. It delays further script execution until the animation or subscene ends.
:::

## Example

`subscene stop fight_intro`  
→ Instantly stops the subscene named "fight_intro".
