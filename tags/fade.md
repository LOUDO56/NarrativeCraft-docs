# Fade Effect

Displays a fullscreen color overlay with a fade-in and fade-out transition.

## Syntax

`fade %fade_in_value% %stay_value% %fade_out_value% [%color%]`

## Parameters

- `%fadeInValue%` _(float)_: Time in seconds for the screen to fade in.
- `%stayValue%` _(float)_: Time in seconds the screen remains fully opaque.
- `%fadeOutValue%` _(float)_: Time in seconds for the screen to fade out.
- `%color%` _(string, optional)_: Hexadecimal color code.

## Example

`fade 1.5 2.0 1.5`  
Fades to black in 1.5 seconds, stays for 2 seconds, then fades out over 1.5 seconds.
