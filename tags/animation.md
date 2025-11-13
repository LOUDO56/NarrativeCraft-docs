# Animation Control

Start or stop an animation on the current scene.

## Syntax

Start an animation on the current scene.

`animation start %animation_name% (--loop) (--unique) (--block)`

Stops the specified animation.

`animation stop %animation_name%`

## Parameters

- `animation_name` _(string, required)_ The name of the animation to play.
- `--loop` _(argument, optional)_ Loop the animation.
- `--unique` _(argument, optional)_ Kill entities when the animation end.
- `--block` _(argument, optional)_ Story will wait for the animation to complete before continuing.

::: info
This is a **blocking command** if `block` is true. It will pause the story until the animation ends.
:::

## Examples

- `animation start wave --unique`
- `animation stop wave`

