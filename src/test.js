const myUtils = require('mycm-utils')
    // const myUtils = require('../dist/mycm-utils')


let time = new Date().getTime();
let format = myUtils.dateFormat;
let cutStr = myUtils.cutStr;
let str = "china 我在中国,i am chinese"
console.log(format(time, 'yyyy-MM-dd '));
console.log(cutStr(str, 10));
let html = '<div class="link"><p><a href="/">返回首页</a> | 	< a href = "/index.php?m=Index&amp;a=reg" > 申请入驻</> |		<a href="/index.php?m=Index&amp;a=case">成功案例</a> |		<a href="/index.php?m=Index&amp;a=contact">关于我们</a></p ><p>客服专线：13929488396 QQ：57725649 邮箱：57725649@qq.com</p><p>地址：东莞市东城街道光明社区光明大道21号A1-302&nbsp;&nbsp;</p></div > ';
let htmlToText = myUtils.htmlToText;
let cutHtml = myUtils.cutHtml;
console.log(htmlToText(html))
console.log(cutHtml(html, 10))
testcc