# Project Architecture

## Ink File Structure

NarrativeCraft organizes its story logic into three main Ink files:

- **`main.ink`**  
  This is the central file that contains all `INCLUDE` directives for chapters and scenes.  
  It is automatically managed by NarrativeCraft and should **not** be edited manually.  
  Any manual modifications will be overwritten when new scenes or chapters are added.

- **`vars.ink`**  
  This file is dedicated to the definition of **global variables**.  
  Variables declared here are accessible across all chapters and scenes.

- **`funcs.ink`**  
  This file is reserved for **global function definitions**.  
  Functions written here can be reused throughout the entire narrative.

## File Locations

All Ink files are stored within the save directory of your world:

`/saves/<your_world>/narrativecraft/`


## Usage Notes

- `main.ink` acts as the entry point, including all chapters and scenes automatically.  
- `vars.ink` and `funcs.ink` provide shared resources for the narrative system.  
- Scene-specific `.ink` files should only contain their respective content, while shared logic remains in `vars.ink` and `funcs.ink`.

::: danger Important
Do **not** edit `main.ink` manually. Knot names and includes are handled by the game.  
Always manage chapters, scenes, and their names directly **in-game**.
:::