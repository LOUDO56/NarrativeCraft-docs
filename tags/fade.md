# Fade Effect

Displays a fullscreen color overlay with a fade-in and fade-out transition.

## Syntax

`fade %fade_in_value% %stay_value% %fade_out_value% [%color%]`

## Parameters

- `%fade_in_value%` _(float, required)_: Time in seconds for the screen to fade in.
- `%stay_value%` _(float, required)_: Time in seconds the screen remains fully opaque.
- `%fade_out_value%` _(float, required)_: Time in seconds for the screen to fade out.
- `%color%` _(string, optional)_: Hexadecimal color code.

## Example

- `fade 1.5 2.0 1.5`  