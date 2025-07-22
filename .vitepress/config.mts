import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NarrativeCraft",
  description: "Documentation for the minecraft mod NarrativeCraft",
  ignoreDeadLinks: true,
  base: "/NarrativeCraft-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Getting started",
        items: [
          {
            text: "Introduction to NarrativeCraft",
            link: "/getting-started/introduction-to-narrativecraft",
          },
          { text: "Prerequisites", link: "/getting-started/prerequisites" },
          {
            text: "Initializing a story",
            link: "/getting-started/initializing-your-first-story",
          },
          {
            text: "Managing the story",
            link: "/getting-started/managing-the-story",
          },
          {
            text: "Project Architecture",
            link: "/getting-started/project-architecture",
          },
          {
            text: "Creating characters",
            link: "/getting-started/creating-characters",
          },
        ],
      },
      {
        text: "Creating in-game",
        items: [
          {
            text: "Animation",
            link: "/creating-in-game/animation",
          },
          {
            text: "Cutscene",
            link: "/creating-in-game/cutscene",
          },
          {
            text: "Camera angle",
            link: "/creating-in-game/camera-angle",
          },
          {
            text: "NPC",
            link: "/creating-in-game/npc",
          },
        ],
      },
      {
        text: "Tags",
        items: [
          {
            text: "Dialog",
            link: "/tags/dialog",
          },
          {
            text: "Animation",
            link: "/tags/animation",
          },
          {
            text: "Border",
            link: "/tags/border",
          },
          {
            text: "Camera angle",
            link: "/tags/camera-angle",
          },
          {
            text: "Change day time",
            link: "/tags/change-day-time",
          },
          {
            text: "Cutscene",
            link: "/tags/cutscene",
          },
          {
            text: "Cooldown",
            link: "/tags/cooldown",
          },
          {
            text: "Dialog parameters",
            link: "/tags/dialog-parameters",
          },
          {
            text: "Minecraft command",
            link: "/tags/minecraft-command",
          },
          {
            text: "Emote",
            link: "/tags/emote",
          },
          {
            text: "Fade",
            link: "/tags/fade",
          },
          {
            text: "Kill character",
            link: "/tags/kill-character",
          },
          {
            text: "On Enter",
            link: "/tags/on-enter",
          },
          {
            text: "Save",
            link: "/tags/save",
          },
          {
            text: "Shake",
            link: "/tags/shake",
          },
          {
            text: "Song/Sfx",
            link: "/tags/song-sfx",
          },
          {
            text: "Subscene",
            link: "/tags/subscene",
          },
          {
            text: "Weather change",
            link: "/tags/weather-change",
          },
        ],
      },
      {
        text: "Customizations",
        items: [
          {
            text: "Dialog",
            link: "/customizations/dialog",
          },
          {
            text: "Main Menu",
            link: "/customizations/main-menu",
          },
          {
            text: "Credits",
            link: "/customizations/credits",
          },
          {
            text: "Sounds",
            link: "/customizations/sounds",
          },
          {
            text: "Logo",
            link: "/customizations/logo",
          },
        ],
      },
      {
        text: "Developers",
        items: [
          {
            text: "Forking",
            link: "/developers/forking",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/LOUDO56/NarrativeCraft" },
      { icon: "discord", link: "https://discord.gg/E3zzNv79DN" },
    ],
  },
});
