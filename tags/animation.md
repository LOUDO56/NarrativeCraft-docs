# Animation Control

Start or stop an animation on the current scene.

## Start Animation

`animation start %animation_name% [loop=true/false] [block]`

Start an animation on the current scene.

## Parameters

- `animation_name` _(string, required)_ — the name of the animation to play.
- `loop` _(boolean, optional)_ — whether the animation should loop. Default is `false`.
- `block` _(keyword, optional)_ — if present, the story will wait for the animation to complete before continuing.

::: info
This is a **blocking command** if `block` is used. It will pause the story until the animation ends.
:::


## Stop Animation

`animation stop %animation_name%`

- Stops the specified animation.


## Example

`animation start wave true block`
