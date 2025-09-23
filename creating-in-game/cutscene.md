# Cutscene

Whether it's after a choice, to introduce a scene, or for other reasons, you may want to create a cutscene. Here's everything you need to know.

## Accessing the Cutscene Controller

To access and edit a cutscene, go to the "Cutscenes" section of your scene, then create a new cutscene.

Once created, link the subscenes you want by clicking the gear icon.

::: tip
You can link a single animation by shift-clicking the gear icon.
:::

Click on the cutscene to enter the Cutscene Controller. A set of buttons will appear:

![Cutscene controller buttons image](/assets/creating-in-game/cutscene/cutscene-controller-buttons.png)

### First Section

1. Create a keyframe group
2. Add a keyframe to the currently selected group
3. Add a [keyframe trigger](/creating-in-game/cutscene#keyframe-trigger)

### Second Section

1. Decrease tick
2. Play or pause
3. Increase tick

### Third Section

1. [Cutscene settings](/creating-in-game/cutscene#cutscene-settings)
2. Close and save
3. Close without saving

::: info
To reopen the screen later, press `G` (default key).
:::

## Entering a Keyframe

To enter a keyframe, right-click on it (make sure you're not in spectator mode).  
You will see the following interface:

![Keyframe screen option image](/assets/creating-in-game/cutscene/keyframe-screen.png)

### Top Left

- **Path Time**: Duration for the camera to travel from point A to B
- **Speed**: Movement speed along the path; still tied to Path Time. If increased, the path may complete before the time ends else may end up early
- **Start Delay**: Delay before the path starts
- **Transition Delay**: Delay before moving to the next keyframe group (only visible if it's the last keyframe in its group)
- **Update**: Save the current values <span style="color: red">always click after making changes</span>
- **Play Here**: Play the cutscene starting from this keyframe
- **Remove**: Remove the keyframe from its group

### Top Right

<div style="display: flex; flex-direction: column;">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <p>•</p>
    <img src="/assets/creating-in-game/cutscene/eye.png" alt="eye" style="width: 30px; height: auto;" />
    <span>Hide screen</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <p>•</p>
    <img src="/assets/creating-in-game/cutscene/left-arrow.png" alt="eye" style="width: 30px; height: auto;" />
    <span>Previous keyframe</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <p>•</p>
    <img src="/assets/creating-in-game/cutscene/right-arrow.png" alt="eye" style="width: 30px; height: auto;" />
    <span>Next keyframe</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <p>•</p>
    <img src="/assets/creating-in-game/cutscene/close.png" alt="eye" style="width: 30px; height: auto;" />
    <span>Close</span>
  </div>
</div>

### Bottom

Adjust the camera orientation.

## Creating a Camera Path with Keyframes

Start by creating a keyframe group, it will be selected by default.  
Then, navigate through the cutscene and add keyframes to this group.

It will look like this:

![Keyframe screen option image](/assets/creating-in-game/cutscene/one-keyframe-group.png)

## Transitions

You might not always want a single path. To create camera transitions, you can make multiple keyframe groups.

Creating a new group automatically defines a transition between the previous and new group:

![Keyframe screen option image](/assets/creating-in-game/cutscene/multiple-keyframe-group.png)

## Keyframe Trigger

A keyframe trigger is a special keyframe that lets you inject Ink tags directly into your cutscene.

<div style="display: flex; gap:10px; align-items: center;">
  <p>
    To add one, click:
  </p>
  <span><img src="/assets/creating-in-game/cutscene/keyframe-trigger.png" width="40px" /></span>
  <p>button</p>
</div>

You'll see this screen:

![Keyframe trigger screen image](/assets/creating-in-game/cutscene/keyframe-trigger-screen.png)

To add multiple tags, separate them by lines.

::: details Banned tags

- **On Enter**: This tag is **ONLY** used when entering a scene.
- **Save**: This is only available when the camera is not moving.
  :::

## Cutscene Settings

This section allows you to:

- Change the cutscene’s skip time (default is 1s)
- Change the currently selected keyframe group
