# Quick Overview

Now that you know the basics of Ink and have installed Inky, it's time to learn how NarrativeCraft works.

## Joining a world

When joining a world, if NarrativeCraft has not been initialized, it will create a directory called `narrativecraft` in your root world folder.

It contains several files and folders, let's break it down:

### Basics
- `build`  
    This folder contains only one file called `story.json` that you will constantly update. It's the built story from your script used to run the story.
- `chapters`  
    This is the list of every chapter with its scenes and scene data (animations, NPCs, cutscenes...). You should never delete, edit, or create new files manually in it; everything is handled automatically in-game.
- `characters`  
    List of your global characters.
- `data`  
    Some miscellaneous info like dialog default values, world options, or main screen background.
- `saves`  
    Contains one file called `save.json` that has every piece of information for a save file.

### What you'll use

- `main.ink`  
    This is the **file** that you will need to open to write your **story**. Do not open an individual scene Ink file, as you will not be able to compile your story.  
    Do **NOT** write in it; it is read-only as this file is handled in-game to automatically write the `INCLUDE` list of your scenes.
- `funs.ink`  
    If you need to write functions that you will use in multiple files, write your functions here.
- `vars.ink`  
    Variables that will be used throughout the story, such as a name or an important choice.

## Enter developmnent mode

If you are on the main screen when you join a world and want to close it without leaving the world, simply press CTRL LEFT five times. A button labeled `Development Environment` will appear at the top right of your screen, allowing you to access the world and all its NarrativeCraft data.

## Managing the story

To open the story manager, press `N`. It will open a screen with a list of chapters and their scenes, scene data, etc.  
This is where you want to create or access data.

## Session

To easily work in a scene, record, or create a cutscene, you need to assign yourself a **session**.  
A session is your current chapter and scene assignment.

To set it, run `/nc session set %chapter_index% %scene_name%`.

## Building the story

To build and export your Ink story for use in NarrativeCraft:

1. In Inky, go to the Files menu.  
2. Click **Export to JSON**.  
3. Navigate to the folder: `narrativecraft/build`.  
4. Name the exported file: `story.json`.

## Validation

Before playing the story, it will perform a validation and verify every tag.  
If a tag has an error, the story will not run, and you will receive an error indicating where the issue is located: chapter index, scene name, line, line text, and error message.  

To validate a story without playing it, run `/nc story validate`.
