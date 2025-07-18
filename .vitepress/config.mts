import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NarrativeCraft",
  description: "Documentation for the minecraft mod NarrativeCraft",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

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
            text: "Initializating a story",
            link: "/getting-started/initializating-your-first-story",
          },
          {
            text: "Managing the story",
            link: "/getting-started/managing-the-story",
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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/LOUDO56/NarrativeCraft" },
      { icon: "discord", link: "https://discord.gg/E3zzNv79DN" },
    ],
  },
});
