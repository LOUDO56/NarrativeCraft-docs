# Emote

::: warning
This tag **only** works if [EmoteCraft](https://modrinth.com/plugin/emotecraft) is installed.
:::

Play an emote animation on a character using EmoteCraft.

## Syntax

`emote play %emote_name% %character_name% %isForced%`

## Parameters

- `%emote_name%` _(string)_: The identifier of the emote animation to play.
- `%character_name%` _(string)_: The target character who will perform the emote.
- `%isForced%` _(boolean)_: Force the emote to play.

## Example

`emote play wave Mark true`  
Makes the character "Mark" perform the "wave" emote immediately, forcing it if needed.

`emote stop Mark`  
Stops the current emote from the character "Mark".
