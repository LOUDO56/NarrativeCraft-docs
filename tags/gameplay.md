# Gameplay

Allow the player to move freely within the environment.

## Syntax

`gameplay`

## Description

The `gameplay` tag enables player control, and teleport him to the last position of the main character (if in the world), allowing movement and normal interaction with the environment to resume.  
It is typically used after a cutscene or scripted sequence where the player was previously immobilized.

::: warning
Be sure to always put `# gameplay` before the knot or stitch ends, or else the story will stop unexpectedly.
:::

## Examples

`gameplay`
