import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "2100的个人笔记",
  description: "2100的个人笔记",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
