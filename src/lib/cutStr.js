/**
 * @description: 截取字符串长度函数,支持中文
 * @Author: mycm
 * @param {string} str
 * @param {int} num要截取下来的长度
 * @param {*} suffix后缀
 * @return {string}
 */
export default function cutStr(str, num, suffix = '...') {
	if (str.replace(/[\u4e00-\u9fa5]/g, '**').length <= num) {
		return str;
	}
	let len = 0;
	let tmpStr = '';
	for (let i = 0; i < str.length; i++) { // 遍历字符串
		if (/[\u4e00-\u9fa5]/.test(str[i])) { // 中文 长度为两字节
			len += 2;
		} else {
			len += 1;
		}
		if (len > num) {
			break;
		} else {
			tmpStr += str[i];
		}
	}
	return tmpStr + suffix;
}