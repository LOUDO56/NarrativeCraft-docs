# Credits

When the user finishes the story, the credits will roll, allowing you to credit the people involved in the project.

It uses Minecraft's default credits screen with added customizations.

## Change Background

Unlike the [Main Screen](/customizations/main-menu), you can **only** use a static background image.  
To set it, place your `.png` file at:  
`narrativecraft/assets/textures/credits/background.png`

## Background Music

Like the [Main Screen](/customizations/main-menu), you can add background music.  
Place your `.ogg` file at:  
`narrativecraft/assets/sounds/credits/music.ogg`

Then add the following to your `sounds.json`:

```json
"credits.music": {
  "category": "master",
  "sounds": ["narrativecraft:credits/music"]
}
```

## Write Credits

Minecraft uses a JSON file called `credits.json`, located in `texts/credits.json`.  
To write your own, you must follow Mojang’s credit format strictly.

### Format Overview

- **section**: The section title of your credits
- **disciplines**: A list of groups that contributed
  - **discipline**: Name of the group (e.g., "Development Team")
  - **titles**: List of subgroups or roles within the discipline
    - **title**: Name of the role or subgroup
    - **names**: List of names under that title

### Example

```json
[
  {
    "section": "NarrativeCraft",
    "disciplines": [
      {
        "discipline": "Github Repository",
        "titles": [
          {
            "title": "Contributors",
            "names": ["LOUDO"]
          }
        ]
      }
    ]
  }
]
```
