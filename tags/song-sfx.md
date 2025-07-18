# Song/Sfx

NarrativeCraft allows you to play and stop songs or sound effects using Ink tags. Sounds must be registered in the Minecraft `sounds.json`.

## Sound Name Format

The name follows the format: `%namespace:category.name%`

- `namespace` (optional): Defaults to `minecraft` if omitted.
- `category`: Sound category (e.g. `music`, `sfx`, etc.)
- `name`: Sound name registered in `sounds.json`.

### Examples

- `custom.piano` → interpreted as `minecraft:custom.piano`
- `modid:custom.sand` → full qualified name with custom namespace


## Play a Song

```
song start %namespace:category.name% [%volume% %pitch% [loop=true/false] [<fadein> %fadeTime%]]
```

- Plays background music.
- Volume and pitch are optional floats (e.g. `0.5` or `1.2`).
- `loop=true/false` determines if the music should repeat.
- `<fadein> %fadeTime%` fades in the sound over the given seconds.

### Example

```
song start narrativecraft:music.intro 0.8 1.0 true fadein 2.0
```

## Play a Sound Effect

```
sfx start %namespace:category.name% [%volume% %pitch% [loop=true/false] [fadein %fadeTime%]]
```

- Same parameters and behavior as for songs, used for sound effects (e.g., UI blips, footsteps).

### Example

```
sfx start sfx.page_turn 1.0 1.0
```

## Stop a Song

```
song stop %namespace:category.name% [fadeout %fadeTime%]
```

- Stops a specific song with optional fadeout time in seconds.

### Example

```
song stop narrativecraft:music.intro fadeout 3.0
```


## Stop a Sound Effect

```
sfx stop %namespace:category.name% [fadeout %fadeTime%]
```

- Stops a specific sound effect, optionally with fadeout.

### Example

``sfx stop sfx.page_turn``


## Stop All Sounds

- ``song stop all`` → Stops all currently playing songs.
- ``sfx stop all`` → Stops all currently playing sound effects.
- ``sound stop all`` → Stops both songs and sound effects at once.

::: info
If no namespace is provided, `minecraft` is used as the default.
:::
