# Animation Control

Start or stop an animation on the current scene.

## Syntax

Start an animation on the current scene.

`animation start %animation_name% [loop=true/false] [unique=true/false] [block=true/false]`

Stops the specified animation.

`animation stop %animation_name%`

## Parameters

- `animation_name` _(string, required)_ , the name of the animation to play.
- `loop` _(boolean, optional)_ , whether the animation should loop. Default is `false`.
- `unique` _(boolean, optional)_ , if true, the character will be removed from the word. Default is `false`.
- `block` _(boolean, optional)_ , if true, the story will wait for the animation to complete before continuing. Default is `false`.

::: info
This is a **blocking command** if `block` is true. It will pause the story until the animation ends.
:::

## Examples

`animation start wave false true`
Start the wave animation, don't loop, and the character is removed from the world when it ends.

`animation stop wave`
Stop instantly animation wave.
