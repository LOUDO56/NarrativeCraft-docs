# Forking

If you fork the github repository of NarrativeCraft and try running/building the mod, you may get this error:
![Error build image](/assets/developers/error-build.png)

The reason is because I forked the repository of bladecoder of it's java adaptation of ink and added some features in order to make it work for NarrativeCraft.

To resolve this issue:
- Close this [repository](https://github.com/LOUDO56/blade-ink-java-nc)
- Run `build` task then push it to your maven repository with `publishToMavenLocal` task
- Return to NarrativeCraft project
- Run or build