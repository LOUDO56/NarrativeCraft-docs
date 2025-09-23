# Animation

An animation in NarrativeCraft is a recording of your in-game movements and actions, assigned to a specific character.  
Each animation is uniquely linked to one character.

## Recording

To start creating animations, you need to record yourself.  
The first step is to execute the command `/nc record start` or press the Start Record button (default key is `V`).

::: tip
If you see a message saying you need to have a session, refer to [this section](/getting-started/managing-the-story#session).
:::

Now, move around, place or break blocks, perform actions, and when you're done, execute `/nc record stop`.

However, the recording is not saved yet.  
To save it, execute `/nc record save`. A list of main characters or [NPCs](/creating-in-game/npc.md) will appear, assign the animation to a character and click "Done".

## Multiple Recordings at the Same Time

If you want to interact with your previous animation to create a natural scene, you’ll need a subscene.

A subscene is a collection of animations that play simultaneously. You can include as many animations as needed.

To create a subscene:

1. Open the Story Manager.
2. Go to your specific scene (auto if session set)
3. Go to the "Subscene" section and create a new one.
4. Click the gear icon to open the configuration menu.
5. A list of available and selected animations will appear.

Select the animations you want to include by clicking on them, then click the arrow button to move them to the selected list. Press "Done" when finished.

After that, close the Story Manager and type the following command to begin recording with the subscene:  
`/nc record start with <subscene_name>`

::: tip
You can start multiple subscenes at the same time by separating their names with commas:

`/nc record start with <subscene_name1>,<subscene_name2>,<subscene_name3>`
:::
