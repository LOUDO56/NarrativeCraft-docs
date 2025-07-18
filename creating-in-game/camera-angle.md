# Camera Angle

A Camera Angle is a static camera position used to focus on a subject.

## Accessing the Camera Angle Controller

To access and edit a camera angle scene, go to the "Camera Angles" section of your scene, then create a new camera angle scene.

The name you assign will be treated as a **parent name**. Every camera angle you create within it will have a **child name**.

Click on the camera angle scene to open the Camera Angle Controller. The following menu will appear:

![Camera angle buttons image](/assets/creating-in-game/camera-angle/camera-angle-menu.png)

1. [Add a camera angle](/creating-in-game/camera-angle.html#create-a-camera-angle)
2. [Add a character](/creating-in-game/camera-angle#add-character)
3. [Add template of characters from animations / subscenes / cutscenes](/creating-in-game/camera-angle.html#add-template-character)
4. Close and save
5. Close without saving

## Create a Camera Angle

A camera angle requires a name to identify it when calling it from your Ink script using [tags]().

To enter and edit the camera angle, refer to [this section](/creating-in-game/cutscene.html#entering-a-keyframe).

![Camera angle screen image](/assets/creating-in-game/camera-angle/camera-angle-screen.png)

This interface is slightly different from a [cutscene keyframe](/creating-in-game/cutscene):  
You can only edit the camera's position and orientation.

<div style="display: flex; align-items:center; gap:15px;">
  <span>However, you can edit the name of the camera angle by pressing</span>
  <span><img src="/assets/creating-in-game/camera-angle/edit-button.png" width="35px" /></span>
</div>

## Add Character

You can add characters that will spawn when this camera angle is invoked.

::: tip
Equip the armor or items **before** spawning the entity, as the equipment will be copied at the time of creation.
:::

## Add Template Character

If you want to calibrate your camera to a character after an animation, subscene, or cutscene ends, click the gear icon and select the source: animation, subscene, or cutscene.

These are only **template characters** used for positioning. They **won’t** spawn when the camera is invoked.

- For animations or subscenes: characters spawn at the **last tick** of the recording
- For cutscenes: characters spawn at the **last keyframe** of the last group

## Edit Character

Right-click a character to:

- Change their skin (if the entity type is player)
- Change their pose (Sneak, Shooting...)
- Remove them from the scene
