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
        ],
      },
      {
        text: "Creating in-game",
        items: [
          {
            text: "Create an animation",
            link: "/creating-in-game/create-an-animation",
          },
          {
            text: "Create a cutscene",
            link: "/creating-in-game/create-a-cutscene",
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
