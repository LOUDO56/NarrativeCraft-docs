# Project Architecture

NarrativeCraft has a structured way to manage a story with [Ink](https://github.com/inkle/ink).

Every scene that a chapter contains has its own unique `.ink` file. The overall flow of the story is controlled by a central file called `main.ink`.

`main.ink` is located at:

`/saves/<your_world>/narrativecraft/main.ink`

When opening `main.ink` with [Inky](https://github.com/inkle/inky), all scene files will be included automatically. This allows you to:

- Define global variables in `main.ink`
- Access those variables in any scene file
- Have a centralized view of your full narrative structure

There is no need to include scene files manually. Every time you add a new scene in-game, NarrativeCraft updates `main.ink` for you by inserting the correct `INCLUDE` directives.

::: danger Important
Knot names **must not** be changed manually. Doing so will break the story flow.  
If you want to rename a scene, always do it **in-game** only.
:::
