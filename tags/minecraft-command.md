# Execute Minecraft Command

``command %command_value%``

Executes any Minecraft command, whether custom or vanilla.

::: warning
If the command contains curly braces `{}` (used for JSON or NBT data), Ink will interpret them as variable delimiters and throw an error. To prevent this, escape each brace with a backslash `\`.
:::

## Example

Original command (will cause error):  
``text_display ~ ~ ~ {billboard:"center",text:"hello",background:-65536}``

Fixed command (escaped braces):  
``text_display ~ ~ ~ \{billboard:"center",text:"hello",background:-65536\}``
