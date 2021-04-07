/**
 * @description: 过滤html文本,返回纯text内容
 * @Author: mycm
 * @param {string} oHtml html文本段
 * @param {boolean} wrap是否保留换行
 * @return {string}
 */
export default function htmlToText(oHtml, wrap = false) {

	if (typeof oHtml === "string") {
		let str = oHtml
		// .replace(/(^\s*)|(\s*$)/g, "")
		// .replace(/<[^<^>]*>/g, "");
		debugger;
		if (wrap === false) str.replace(/[\r\n]/g, "");
		else {
			console.log(/\r\n/.test(str));
			str.replace(/\r\n/, "444");
			console.log(str)
		}
		return str;

	} else {
		return "";
	}
};