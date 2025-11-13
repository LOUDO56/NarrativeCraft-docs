# Create Your Own Ink Action

Ink Actions define custom narrative commands that follow a **validate → execute** workflow.  
Validation (`doValidate`) parses arguments and initializes variables, while execution (`doExecute`) performs the actual logic.  
Each action must return an `InkActionResult`, indicating success, warning, or error.

---

### Basic Structure

```java
public class MyCustomInkAction extends InkAction {
    private String targetValue;
    private boolean immediateMode;

    public MyCustomInkAction(String id, Side side, String syntax, CommandMatcher matcher) {
        super(id, side, syntax, matcher);
    }

    @Override
    protected InkActionResult doValidate(List<String> arguments, Scene scene) {
        if (arguments.size() < 2)
            return InkActionResult.error("Missing argument: target value");

        targetValue = arguments.get(1);
        if (targetValue.isEmpty())
            return InkActionResult.error("Target value cannot be empty");

        if (arguments.size() > 2) {
            try {
                immediateMode = Boolean.parseBoolean(arguments.get(2));
            } catch (Exception e) {
                return InkActionResult.error("Invalid boolean: " + arguments.get(2));
            }
        }

        return InkActionResult.ok();
    }

    @Override
    protected InkActionResult doExecute(PlayerSession session) {
        if (targetValue == null || targetValue.isEmpty())
            return InkActionResult.error("Target value not set");

        if (immediateMode) {
            applyTargetValue(session, targetValue);
            isRunning = false;
        } else {
            initializeGradualProcess(session, targetValue);
        }

        return InkActionResult.ok();
    }
}
```

## Registration

```java
InkActionRegistry.register(() -> new MyCustomInkAction(
    "my_custom_action",
    InkAction.Side.SERVER,
    "mycmd %target% [immediate]",
    command -> command.startsWith("mycmd")
));
```

## Example

```java
public class TeleportInkAction extends InkAction {
    private double x, y, z;
    private boolean relative = false;
    private String dimension = null;

    public TeleportInkAction(String id, Side side, String syntax, CommandMatcher matcher) {
        super(id, side, syntax, matcher);
    }

    @Override
    protected InkActionResult doValidate(List<String> args, Scene scene) {
        if (args.size() < 4)
            return InkActionResult.error("Missing coordinates");

        try {
            x = Double.parseDouble(args.get(1));
            y = Double.parseDouble(args.get(2));
            z = Double.parseDouble(args.get(3));
        } catch (NumberFormatException e) {
            return InkActionResult.error("Coordinates must be numbers");
        }

        if (args.size() > 4)
            relative = Boolean.parseBoolean(args.get(4));
        if (args.size() > 5)
            dimension = args.get(5);

        return InkActionResult.ok();
    }

    @Override
    protected InkActionResult doExecute(PlayerSession session) {
        Player player = session.getPlayer();

        double finalX = relative ? player.getX() + x : x;
        double finalY = relative ? player.getY() + y : y;
        double finalZ = relative ? player.getZ() + z : z;

        if (dimension != null) {
            ResourceKey<Level> targetDimension = switch (dimension) {
                case "nether" -> Level.NETHER;
                case "end" -> Level.END;
                default -> Level.OVERWORLD;
            };

            if (!player.level().dimension().equals(targetDimension))
                return InkActionResult.warn("Cross-dimension teleport initiated");
        }

        player.teleportTo(finalX, finalY, finalZ);
        isRunning = false;
        return InkActionResult.ok();
    }

    @Override
    public boolean needScene() {
        return false;
    }
}

// Registration
InkActionRegistry.register(() -> new TeleportInkAction(
    "teleport",
    InkAction.Side.SERVER,
    "tp %x% %y% %z% [relative] [dimension]",
    command -> command.startsWith("tp ")
));
```