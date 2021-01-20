/**
 * @description: 过滤html文本,返回纯text内容
 * @Author: mycm
 * @param {string} oHtml html文本段
 * @return {string}
 */
export default function htmlToText(oHtml) {
	if (typeof oHtml === "string") {
		return oHtml
			.replace(/(^\s*)|(\s*$)/g, "")
			.replace(/<[^<^>]*>/g, "")
			.replace(/[\r\n]/g, "");
	} else {
		return "";
	}
};