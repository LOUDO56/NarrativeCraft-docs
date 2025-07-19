# Execute Minecraft Command

Executes any Minecraft command, custom or vanilla.

## Syntax

`command %command_value%`

::: warning
If the command contains curly braces `{}` (used for JSON or NBT data), Ink treats them as variable delimiters and throws an error. Escape each brace with a backslash `\` to prevent this.
:::

## Example

Original command (causes error):  
`text_display ~ ~ ~ {billboard:"center",text:"hello",background:-65536}`

Fixed command (escaped braces):  
`text_display ~ ~ ~ \{billboard:"center",text:"hello",background:-65536\}`
