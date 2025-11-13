# Change Weather

Change the current weather state immediately.

## Syntax

`weather <clear, rain, thunder> (--instant)`

On multiplayer, the weather is automatically instant.

## Parameters

- `clear` _(keyword)_: Clears the weather to sunny.
- `rain` _(keyword)_: Starts rain without thunder.
- `thunder` _(keyword)_: Starts thunderstorm with rain and thunder effects.
- `instant` _(argument, optional)_: Don't show any weather transition

## Examples

- `weather clear`  
- `weather rain`  
- `weather rain --instant`  
- `weather thunder`  