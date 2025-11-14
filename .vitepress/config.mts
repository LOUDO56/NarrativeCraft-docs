import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NarrativeCraft",
  description: "Documentation for the minecraft mod NarrativeCraft",
  ignoreDeadLinks: true,
  base: "/NarrativeCraft-docs/",
  lang: "en-US",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    }
  },
  head: [['link', { rel: 'icon', href: '/NarrativeCraft-docs/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
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
            text: "Quick Overview",
            link: "/getting-started/quick-overview"
          }
        ],
      },
      {
        text: "Creating in-game",
        items: [
          {
            text: "Character",
            link: "/creating-in-game/character"
          },
          {
            text: "Interaction",
            link: "/creating-in-game/interaction"
          },
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
        text: "Writing",
        items: [
          {
            text: "Dialog",
            link: "/writing/dialog",
          },
          {
            text: "Dialog 2D",
            link: "/writing/dialog_2d",
          },
          {
            text: "Making characters talk",
            link: "/writing/making-characters-talk",
          }
        ],
      },
      {
        text: "Tags",
        collapsed: false,
        items: [
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
            text: "Gameplay",
            link: "/tags/gameplay",
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
            text: "Interaction",
            link: "/tags/interaction",
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
            text: "Text",
            link: "/tags/text"
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
          {
            text: "Create your own Ink Action",
            link: "/developers/create-your-own-ink-action",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "modrinth", link: "https://modrinth.com/mod/narrativecraft" },
      { icon: "curseforge", link: "https://www.curseforge.com/minecraft/mc-mods/narrativecraft" },
      { icon: "github", link: "https://github.com/LOUDO56/NarrativeCraft" },
      { icon: "discord", link: "https://discord.gg/E3zzNv79DN" },
    ],
  },
});
