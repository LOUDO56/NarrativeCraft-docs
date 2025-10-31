# Interaction Control

Summon or remove an interaction scene, allowing the player to interact with specific elements.

## Syntax

Summon an interaction scene.

`interaction summon %interaction_name%`

Remove an interaction scene.

`interaction remove %interaction_name%`

## Parameters

- `interaction_name` _(string, required)_, the name of the interaction scene to summon or remove.

## Examples

`interaction summon merchant_stall`  
Summons the interaction scene named “merchant_stall”, making its interactive elements available to the player.

`interaction remove merchant_stall`  
Removes the interaction scene “merchant_stall”, hiding all its elements from the player.
