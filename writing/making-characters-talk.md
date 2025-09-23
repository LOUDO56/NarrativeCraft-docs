# Making Characters Talk

Making characters talk in the world is relatively straightforward. There are two ways to invoke characters in your scene:

## Character Invocation Methods

### 1. Animation or Subscene Actions
- Use [Animation](/tags/animation.md) ink actions to trigger character animations
- Use [Subscene](/tags/subscene.md) ink actions to load character subscenes

### 2. Controller-Based Approach
- Start a [Camera angle controller](/creating-in-game/camera-angle.md) with no template characters
- Start a [Cutscene controller](/creating-in-game/cutscene.md) that has animations or subscenes linked

Once you've set up character invocation using any of these methods, you'll have characters available in your world and ready to deliver dialogue.

## Ink Action Types

There are two types of ink action execution:

### Command Block Actions
These actions **block** the story progression until they complete. Use for actions that require the story to wait.

### Normal Actions
These actions execute **without blocking** the story flow. The narrative continues while the action runs in the background.

## Implementation Examples

### Example 1: Using a Camera Angle

```ink
=== chapter_1_scene ===
# camera jamie pov
Jamie: Hello, world!
```

**Execution behavior:** The camera command executes immediately, and the dialogue starts right away. Jamie speaks while the camera is in his point of view.

### Example 2: Using a Cutscene

```ink
=== chapter_1_scene ===
# cutscene start "Beginning"
Jamie: Hello, world!
```

**Execution behavior:** The cutscene "Beginning" starts and plays completely. Once the cutscene finishes, then Jamie speaks his dialogue.

## Execution Flow Comparison

### Camera Command Flow:
1. `# camera jamie pov` executes
2. Camera switches to Jamie's POV immediately
3. Dialogue executes simultaneously
4. Jamie speaks while camera action is active

### Cutscene Flow:
1. `# cutscene start "Beginning"` executes
2. Cutscene plays entirely
3. Cutscene ends
4. **Then** Jamie speaks his dialogue

![Character talking](/assets/writing/character_talking.png)

## Technical Notes

- **Character names** in dialogue must match entity names in your world
- **Looped animations**: Characters with looped movement animations are allowed during dialogue, because the story is on a static state.
- **Reading pace**: Keep dialogues short. If you need more lines, have the same character speak multiple times
- Characters must be spawned and available in the scene before dialogue execution or else your story will crash.