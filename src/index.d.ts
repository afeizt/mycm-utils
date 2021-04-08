export as namespace mycmUtils;

declare module 'mycm-utils'{
 export function cutHtml(str:string,length:number?):string
 export function dateFormat(timestamp:string|number, format:string):string;
 export function cutStr(str:string,length:number?):string;
 export function htmlToText(htmlSting:string):string
}