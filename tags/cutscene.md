# Cutscene
Triggers a cutscene linked to the current scene.

::: info
Blocking command: The story will continue only after this cutscene has ended.
:::

## Syntax
`cutscene start %cutscene_name%`

## Parameters
- `%cutscene_name%` _(string)_ — Identifier of the cutscene to start. Must exactly match a registered cutscene name.

## Example
`cutscene start intro_scene`
Starts the cutscene named "intro_scene" and blocks the story until it finishes.