# Cooldown

Pauses the story progression for a specified duration before continuing to the next tag or dialog.

::: info
This is a blocking command. The story will not proceed until the wait time has fully elapsed.
:::

## Syntax

`wait %time% <second(s), minute(s), hour(s)>`

## Parameters

- `%time%` _(float)_ , Length of the wait.
- `<second(s), minute(s), hour(s)>` _(string)_ , Time unit for the wait duration.

## Examples

`wait 5 seconds`  
Pauses the story for 5 seconds before continuing.

`wait 2.5 minutes`  
Pauses the story for 2.5 minutes before continuing.

`wait 1 hour`  
Pauses the story for 1 hour before continuing.
