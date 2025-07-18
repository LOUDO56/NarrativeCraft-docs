# Fade Effect

`fade [%fadeInValue%] [%stayValue%] [%fadeOutValue%] [%hexColor%]`

Displays a fullscreen color overlay with a fade-in and fade-out transition.

## Parameters

- `%fadeInValue%`: Time in seconds for the screen to fade in.
- `%stayValue%`: Time in seconds the screen remains fully opaque.
- `%fadeOutValue%`: Time in seconds for the screen to fade out.
- `%hexColor%`: Hexadecimal color code (e.g., `#000000` for black, `#FFFFFF` for white).

## Example

`fade 1.5 2.0 1.5 000000`  
→ Fades to black in 1.5 seconds, stays for 2 seconds, then fades out over 1.5 seconds.
