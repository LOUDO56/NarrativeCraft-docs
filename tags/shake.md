# Screen Shake

Shake the player’s screen to simulate effects like explosions or increase immersion.

``shake %strength% %decay_rate% %speed%``

## Parameters

- **strength**: The maximum offset of the screen shake. Higher values produce stronger shakes.  
  *Type*: Integer or Float  
  *Example*: `60` for a strong shake.

- **decay_rate**: How quickly the shake effect diminishes over time. Higher values make the shake stop faster.  
  *Type*: Integer or Float  
  *Example*: `5` means the shake fades quickly.

- **speed**: Frequency of the shaking noise or vibration. Higher values create faster shaking motions.  
  *Type*: Float  
  *Example*: `30` for fast shaking.

## Examples

``shake 60 5 30``
→ Shake rapidly and strongly, simulating an explosion with quick decay.

``shake 4 0 0.1``
Slow, smooth, infinite shake to create ambient immersion (no decay).

``shake 0 0 0``
Reset and stop any active shake effect.