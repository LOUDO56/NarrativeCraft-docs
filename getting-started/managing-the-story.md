# Managing the story

To manage a story, you will organize it into chapters and scenes. Each chapter has its own unique scene.  
This structure ensures good maintainability and makes it easier to create branching paths based on specific choices.

Each scene contains its own unique data, which is accessible only within that scene. This helps keep things organized and prevents data overload.

## Opening the Story Manager

Once you are in-game, press the key that opens the Story Manager screen (default is `N`).

This will open a screen displaying the list of chapters.  
If it’s your first time entering the world, the list will be empty. To add a chapter, simply press the `+` button.

You’ll then need to give the chapter a name, and optionally a short description.

Once the first chapter is created, click on it to access the scene list.  
Repeat the process to create a new scene.

After creating a scene, click on it to display its data categories:

- Animations
- Camera Angles
- Cutscenes
- Subscenes
- NPC

These categories represent the data associated with that scene.

## Session

To work in a specific chapter and scene, you need to assign yourself a session, so everything you do is saved to that specific chapter and scene.

To assign you a session, execute this command `/nc session set <chapter_index> <scene_name>`.