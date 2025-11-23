# Subscene Control

Start or stop a subscene linked to the current scene.

## Syntax

Start subscene:

`subscene start %subscene_name% (--loop) (--unique) (--block)`

Stop subscene:

`subscene stop %subscene_name%`

## Parameters

- `%subscene_name%` _(string)_: Name of the subscene to start or stop.
- `loop` _(argument, optional)_ Loop all animations.
- `unique` _(argument, optional)_ Kill all entities when every animation ends.
- `block` _(argument, optional)_  Story will wait for the subscene to complete before continuing.

::: info
This is a **blocking command** if `block` is true. It will pause the story until the subscene ends.
:::

## Examples

- `subscene start fight_intro --block`  
- `subscene stop fight_intro`  
