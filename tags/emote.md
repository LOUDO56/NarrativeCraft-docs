# Emote

::: warning
This tag **only** works if [EmoteCraft](https://modrinth.com/plugin/emotecraft) is installed.
:::

Play an emote animation on a character using EmoteCraft.

`emote play %emote_name% %character_name% %isForced%`

## Parameters

- **%emote_name%**: The identifier of the emote animation to play.
- **%character_name%**: The target character who will perform the emote.
- **%isForced%**: Boolean value (`true` or `false`).
  - `true`: Force the emote to play immediately, interrupting current animations if necessary.
  - `false`: Play the emote only if the character is available, without interruption.

## Example

`emote play wave Mark true`  
Makes the character "Mark" perform the "wave" emote immediately, forcing it if needed.

`emote stop Mark`  
Stop the current emote from character "Mark".
