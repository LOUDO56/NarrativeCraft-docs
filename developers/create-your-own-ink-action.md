# Create your own Ink Action

## Overview

Ink Actions are custom commands that can be executed within the narrative system. They provide a flexible framework for creating interactive story elements, game mechanics, and world modifications. Each Ink Action follows a validate-then-execute pattern and can run on either the client or server side.

## What Ink Actions Can Do

Ink Actions enable developers to:
- Create custom narrative commands with specific syntax patterns
- Execute timed operations (cooldowns, delays, animations)
- Modify game world state (weather, blocks, entities)
- Handle client-side rendering and animations
- Implement complex interactive story mechanics
- Validate command parameters before execution

## Core Components

### InkAction Abstract Class

The `InkAction` class is the foundation for all custom ink actions. It provides:

- **Validation system**: Check command syntax and parameters before execution
- **Execution lifecycle**: Managed execution with proper state tracking  
- **Side specification**: Client or server-side execution
- **Rendering hooks**: Integration with game rendering pipeline
- **Command matching**: Flexible pattern matching for command recognition

#### Key Properties

- `id`: Unique identifier for the ink action
- `syntax`: Human-readable syntax description (e.g., `"wait %time% <second(s), minute(s), hour(s)>"`)
- `side`: Execution side (`CLIENT` or `SERVER`)
- `matcher`: Command pattern matcher implementation
- `isRunning`: Current execution state
- `canBeExecuted`: Validation success flag

#### Lifecycle Methods

- `validate()`: Parse and validate command parameters
- `execute()`: Run the ink action logic
- `tick()`: Called every game tick while running
- `partialTick()`: Called for smooth interpolation
- `render()`: Called for custom rendering (client-side)
- `stop()`: Cleanup when action completes

## Creating Custom Ink Actions

### Step 1: Extend InkAction

```java
public class MyCustomInkAction extends InkAction {
    
    // Your custom properties
    private String targetValue;
    private boolean immediateMode;
    
    public MyCustomInkAction(String id, Side side, String syntax, CommandMatcher matcher) {
        super(id, side, syntax, matcher);
    }
    
    @Override
    public boolean needScene() {
        return true; // Return true if this action requires a scene context
    }
}
```

### Step 2: Implement Validation

The `doValidate` method parses command arguments and validates parameters:

```java
@Override
protected InkActionResult doValidate(List<String> arguments, Scene scene) {
    // Check minimum arguments
    if (arguments.size() < 2) {
        return InkActionResult.error(Translation.message(MISS_ARGUMENT_TEXT, "target value"));
    }
    
    // Parse and validate arguments
    targetValue = arguments.get(1);
    if (targetValue.isEmpty()) {
        return InkActionResult.error(Translation.message(WRONG_ARGUMENT_TEXT, "Target value cannot be empty"));
    }
    
    // Handle optional parameters
    if (arguments.size() > 2) {
        try {
            immediateMode = Boolean.parseBoolean(arguments.get(2));
        } catch (Exception e) {
            return InkActionResult.error(Translation.message(NOT_VALID_BOOLEAN, arguments.get(2)));
        }
    }
    
    return InkActionResult.ok();
}
```

### Step 3: Implement Execution

The `doExecute` method contains your action's core logic:

```java
@Override
protected InkActionResult doExecute(PlayerSession playerSession) {
    // Check if a similar action is already running and clean up conflicts
    playerSession.getInkActions().removeIf(inkAction -> inkAction instanceof MyCustomInkAction);
    
    // Validate current state before proceeding
    if (targetValue == null || targetValue.isEmpty()) {
        return InkActionResult.error("Target value is not properly set");
    }
    
    // Execute based on mode
    if (immediateMode) {
        // Immediate execution - apply changes instantly
        applyTargetValue(playerSession, targetValue);
        isRunning = false; // Complete immediately
    } else {
        // Gradual execution - start the process but keep running
        initializeGradualProcess(playerSession, targetValue);
        // Action continues running until manually stopped in tick()
    }
    
    return InkActionResult.ok();
}
```

### Step 4: Register Your Ink Action

Register your custom ink action in the registry:

```java
InkActionRegistry.register(() -> new MyCustomInkAction(
    "my_custom_action",                          // Unique ID
    InkAction.Side.SERVER,                       // Execution side
    "mycmd %target% [immediate]",                // Syntax description
    command -> command.startsWith("mycmd")       // Command matcher
));
```

## Side Specification

### CLIENT Side
- Executed during client tick
- Used for visual effects, UI updates, animations
- Render methods are available for world and 2D rendering
- Limited to client-side operations

### SERVER Side  
- Executed during server tick
- Used for game logic, world modifications, player state changes
- Has full access to server-side APIs
- Changes are synchronized to clients automatically

## Execution States and Lifecycle

### Running State Management
Ink actions use the `isRunning` flag to control their lifecycle:

- `isRunning = true`: Action continues executing each tick
- `isRunning = false`: Action is automatically removed next tick
- Do `setRunning(false) or isRunning = false` when your action completes

### Validation vs Execution
1. **Validation Phase**: Parse arguments, check syntax, validate parameters
2. **Execution Phase**: Only runs if validation returns `InkActionResult.ok()`
3. **Continuous Execution**: Use `tick()` method for ongoing operations

### External Usage
Access running ink actions from other classes:
```java
// Get player's active ink actions (respects side restrictions)
List<InkAction> actions = playerSession.getInkActions();

// Find specific action type
MyCustomInkAction myAction = actions.stream()
    .filter(action -> action instanceof MyCustomInkAction)
    .map(action -> (MyCustomInkAction) action)
    .findFirst()
    .orElse(null);
```

## InkActionResult Status Types

- `OK`: Action completed successfully
- `IGNORED`: Action was ignored (treated as success)  
- `BLOCK`: Action blocks further execution
- `ERROR`: Action failed with error message
- `WARN`: Action succeeded with warning

## Utility Methods

### InkActionUtil
The utility class provides helpful methods:

- `getArguments(String command)`: Parse command into argument list
- `getSecondsFromTimeValue(double seconds, String timeValue)`: Convert time units

### Error Message Constants
Use predefined error constants for consistency:
- `MISS_ARGUMENT_TEXT`: Missing required argument
- `WRONG_ARGUMENT_TEXT`: Invalid argument value  
- `NOT_VALID_BOOLEAN`: Invalid boolean value
- `NOT_VALID_NUMBER`: Invalid numeric value
- `NOT_VALID_COLOR`: Invalid color value

## Best Practices

1. **Always validate input**: Check all parameters thoroughly in `doValidate()`
2. **Use appropriate side**: Choose CLIENT for visual effects, SERVER for game logic
3. **Handle errors gracefully**: Return meaningful error messages
4. **Manage state properly**: Set `isRunning = false` when actions complete
5. **Document syntax clearly**: Provide clear syntax descriptions for users
6. **Test command matching**: Ensure your matcher correctly identifies commands
7. **Consider performance**: Avoid heavy operations in `tick()` methods

## Example: Complete Teleport Ink Action

```java
public class TeleportInkAction extends InkAction {
    private double x, y, z;
    private boolean relative = false;
    private String dimension = null;
    
    public TeleportInkAction(String id, Side side, String syntax, CommandMatcher matcher) {
        super(id, side, syntax, matcher);
    }
    
    @Override
    protected InkActionResult doValidate(List<String> arguments, Scene scene) {
        if (arguments.size() < 4) {
            return InkActionResult.error(Translation.message(MISS_ARGUMENT_TEXT, "x y z coordinates"));
        }
        
        // Parse coordinates
        try {
            x = Double.parseDouble(arguments.get(1));
            y = Double.parseDouble(arguments.get(2));
            z = Double.parseDouble(arguments.get(3));
        } catch (NumberFormatException e) {
            return InkActionResult.error(Translation.message(NOT_VALID_NUMBER, "Coordinates must be numbers"));
        }
        
        // Parse optional relative flag
        if (arguments.size() > 4) {
            try {
                relative = Boolean.parseBoolean(arguments.get(4));
            } catch (Exception e) {
                return InkActionResult.error(Translation.message(NOT_VALID_BOOLEAN, arguments.get(4)));
            }
        }
        
        // Parse optional dimension
        if (arguments.size() > 5) {
            dimension = arguments.get(5);
            if (!dimension.matches("overworld|nether|end")) {
                return InkActionResult.error(Translation.message(WRONG_ARGUMENT_TEXT, "Dimension must be overworld, nether, or end"));
            }
        }
        
        return InkActionResult.ok();
    }
    
    @Override
    protected InkActionResult doExecute(PlayerSession playerSession) {
        Player player = playerSession.getPlayer();
        
        // Calculate final coordinates
        double finalX = relative ? player.getX() + x : x;
        double finalY = relative ? player.getY() + y : y;
        double finalZ = relative ? player.getZ() + z : z;
        
        // Handle dimension change if specified
        if (dimension != null) {
            ResourceKey<Level> targetDimension = switch(dimension) {
                case "nether" -> Level.NETHER;
                case "end" -> Level.END;
                default -> Level.OVERWORLD;
            };
            
            if (!player.level().dimension().equals(targetDimension)) {
                // Dimension teleportation logic would go here
                return InkActionResult.warn("Cross-dimension teleport initiated");
            }
        }
        
        // Perform teleportation
        player.teleportTo(finalX, finalY, finalZ);
        
        // Remove this ink action instantly, as it mainly a unique ink action.
        isRunning = false;
        
        return InkActionResult.ok();
    }
    
    @Override
    public boolean needScene() {
        return false; // Teleportation doesn't require scene context
    }
}

// Registration example:
InkActionRegistry.register(() -> new TeleportInkAction(
    "teleport",
    InkAction.Side.SERVER,
    "tp %x% %y% %z% [relative] [dimension]",
    command -> command.startsWith("tp ")
));
```