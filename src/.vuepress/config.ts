import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "前端,前端个人笔记,前端经验分享,javascript,vue,vuepress,vuepress-theme-hope,css",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
