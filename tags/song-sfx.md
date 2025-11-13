# Song/Sfx

Play sound from Minecraft. Sounds must be registered in Minecraft’s `sounds.json`.

## Syntax

Play song:

```
song start %namespace:category.name% [%volume% %pitch% [fadein %fade_time%]] (--loop)
```

Play sound effect:

```
sfx start %namespace:category.name% [%volume% %pitch% [fadein %fade_time%]] (--loop)
```

Stop song:  
`song stop %namespace:category.name% [fadeout %fade_time%]`

Stop sound effect:  
`sfx stop %namespace:category.name% [fadeout %fade_time%]`

Stop all:  
`song stop all`  
`sfx stop all`  
`sound stop all`


::: info
If no namespace is provided, `minecraft` is used as the default.
:::

## Parameters

- `%namespace:category.name%` _(string, required)_: Sound identifier with optional namespace.
- `%volume%` _(float, optional)_: Volume level (e.g., `0.5` for half volume).
- `%pitch%` _(float, optional)_: Pitch level (e.g., `1.2` for higher pitch).
- `loop` _(argument, optional)_: Whether to loop the sound.
- `fadein %fade_time%` _(float, optional)_: Fade-in duration in seconds when starting sound.
- `fadeout %fade_time%` _(float, optional)_: Fade-out duration in seconds when stopping sound.

## Examples

- `song start narrativecraft:music.intro 0.8 1 fadein 2 --loop` 
- `sfx start sfx.page_turn 1 1`  
- `song stop narrativecraft:music.intro fadeout 3`  
- `sfx stop sfx.page_turn`  
- `song stop all`  
- `sound stop all`