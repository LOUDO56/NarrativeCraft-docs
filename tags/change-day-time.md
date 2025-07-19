# Change Day Time

Change the time of the world.

## Syntax

`time <set,add> <day,midnight,night,noon,%tick%> [to <day,midnight,night,noon,%tick%> for %time% <second(s), minute(s), hour(s)> [%easing%]]`

## Parameters

- `set / add`:

  - `set`: Directly sets the time.
  - `add`: Adds to the current time.

- `<day, midnight, night, noon, %tick%>`:  
  Target time value. You can use predefined values or specify a tick (e.g., `6000`).

- `to ... for ...` _optional_:  
  Creates a smooth transition to the target time over the specified duration.

- `%time% <second(s), minute(s), hour(s)>`:  
  Duration of the transition.

- `%easing%` _optional_:  
  Easing function used for interpolation (e.g., `linear`, `ease_in`, `ease_out`, etc.).

## Example

`time set midnight`  
Sets the world time instantly to midnight.

`time set 0 to 6000 for 5 seconds linear`  
Smoothly transitions the time from tick 0 (dawn) to tick 6000 (noon) over 5 seconds with linear easing.

`time add 1200`  
Adds 1200 ticks (approximately one hour) to the current time.
