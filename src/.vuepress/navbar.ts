import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "代码笔记",
    link: "/zh/code-notes/",
    icon: "code",
    activeMatch: "^/zh/code-notes",
  },
]);
