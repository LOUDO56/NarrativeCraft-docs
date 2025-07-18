# Change Day Time

``time <set,add> <day,midnight,night,noon,%tick%> [to <day,midnight,night,noon,%tick%> for %time% <second(s), minute(s), hour(s)> [%easing%]]``

Controls the in-game time. You can set or add to the current time directly, or interpolate between two times over a given duration for smoother transitions.

## Parameters

- **set / add**:  
  - `set`: Directly sets the time.  
  - `add`: Adds to the current time.

- **<day, midnight, night, noon, %tick%>**:  
  Target time value. You can use predefined values or specify a tick (e.g., `6000`).

- **to ... for ...** *optional*:  
  Creates a smooth transition to the target time over the specified duration.

- **%time% <second(s), minute(s), hour(s)>**:  
  Duration of the transition.

- **%easing%** *optional*:  
  Easing function used for interpolation (e.g., `linear`, `ease_in`, `ease_out`, etc.).

## Example

``time set midnight``  
→ Instantly sets the world time to midnight.

``time set 0 to 6000 for 5 seconds linear``  
→ Smoothly transitions from tick `0` (dawn) to `6000` (noon) over 5 seconds using linear easing.

``time add 1200``  
→ Adds 1200 ticks to the current time (one hour).
