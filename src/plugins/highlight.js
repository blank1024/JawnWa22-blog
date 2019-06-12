/*
 * @Description: 导出代码高亮函数
 * @Date: 2019-06-11 09:23:40
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-06-12 13:38:02
 */

import hljs from "highlight.js";

export default function() {
    let blocks = document.querySelectorAll("pre code");
    blocks.forEach(block => {
        hljs.highlightBlock(block);
    });
}
