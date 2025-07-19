# Screen Shake

Shake the player’s screen to simulate effects like explosions or increase immersion.

## Syntax

`shake %strength% %decay_rate% %speed%`

## Parameters

- `%strength%` _(float)_: Maximum offset of the screen shake. Higher values produce stronger shakes.
- `%decay_rate%` _(float)_: Rate at which the shake effect fades over time. Higher means faster decay.
- `%speed%` _(float)_: Frequency of the shaking motion. Higher means faster shaking.

## Examples

`shake 60 5 30`  
Strong and rapid shake with quick fade, simulating an explosion.

`shake 4 0 0.1`  
Slow, smooth, infinite shake with no decay for ambiance.

`shake 0 0 0`  
Stops and resets all screen shake effects.
