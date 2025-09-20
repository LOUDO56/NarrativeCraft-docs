# Building the story

## Export

To build and export your Ink story for use in NarrativeCraft:

1. In Inky, go to the **Files** menu.
2. Click **Export to JSON**.
3. Navigate to the folder:  
   `narrativecraft/build`
4. Name the exported file:  
   `story.json`

This will generate the compiled Ink story that NarrativeCraft reads at runtime.

## Validation

Before playing the story, it will perform a **validation** and verify every tag. If a tag has an error, the story will not run, and you will receive an error indicating where the issue is located: chapter index, scene name, line, line text, and error message.  
To validate a story without playing it, run `/nc story validate`.
