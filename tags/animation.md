# Animation Control

Start or stop an animation on the current scene. These actions target animations that have been linked to the current scene beforehand.

## Start Animation

`animation start %animation_name% [loop=true/false] [block]`

- **%animation_name%**: The name of the animation to start.
- **loop=true/false** *optional*: Whether the animation should loop.
- **block** *optional*: If provided, the story will wait until the animation finishes before continuing.

::: info
Using the `block` keyword makes this a blocking command. It delays further script execution until the animation ends.
:::


## Stop Animation

`animation stop %animation_name%`

- Stops the specified animation.

## Example

`animation start angry_walk true block`  
→ Starts the "angry_walk" animation, looping and blocking until it ends.
