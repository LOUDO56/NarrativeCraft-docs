# Cooldown

`wait %time% <second(s), minute(s), hour(s)>`

Pauses the story progression for a specified duration before continuing to the next tag or dialog.

::: info
This is a blocking command. The story will not proceed until the wait time has fully elapsed.
:::

## Parameters

- `%time%`: Numeric value representing the length of the wait.
- `<second(s), minute(s), hour(s)>`: Time unit for the wait duration.

## Example

`wait 5 seconds`  
→ Pauses for 5 seconds.

`wait 2 minutes`  
→ Pauses for 2 minutes.

`wait 1 hour`  
→ Pauses for 1 hour.
