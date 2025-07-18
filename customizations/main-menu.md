# Main Menu

The main menu is shown when you join a world that contains a `narrativecraft` directory.  
By default, it displays a black screen—but you have two options to customize the background.

## Add a Background Image

You can replace the black background with a custom image.  
To do this, create a custom resource pack and add your image with the **exact** path and name:  
`textures/narrativecraft_mainscreen/background.png`

## Use a Scene as Background

If you want a more dynamic background, you can use a scene instead.

Execute the command:  
`/nc open story_options`  
Then select **"Main Screen Controller"**.

It works like a [camera angle](/creating-in-game/camera-angle), but:

- You **cannot** add template characters
- You can only have **one keyframe** and **one [keyframe trigger](/creating-in-game/cutscene#keyframe-trigger)**

Example of a custom animated background, with a keyframe trigger:  
![Custom background image](/assets/customizations/main-menu/cutsom-background-main-menu.png)

## Background Music

To add background music to the main menu:

1. In your resource pack, create a `sounds.json` file inside `assets/minecraft`
2. Add the following content to `sounds.json`:

```json
"narrativecraft_mainscreen.music": {
  "category": "master",
  "sounds": ["narrativecraft_mainscreen/music"]
}
```

3.  Place your .ogg music file at: `sounds/narrativecraft_mainscreen/music.ogg` (Make sure the name matches exactly.)
