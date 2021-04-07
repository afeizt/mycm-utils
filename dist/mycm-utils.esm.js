import 'core-js/modules/es.date.to-string.js';
import 'core-js/modules/es.regexp.constructor.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.string.replace.js';
import 'core-js/modules/es.array.includes.js';
import 'core-js/modules/es.array.slice.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.string.match.js';
import 'core-js/modules/es.string.search.js';
import 'core-js/modules/es.string.split.js';

function dateFormat(timestamp, format) {
  var time = new Date(timestamp);
  var o = {
    "M+": time.getMonth() + 1,
    "d+": time.getDate(),
    "h+": time.getHours(),
    "m+": time.getMinutes(),
    "s+": time.getSeconds(),
    "q+": Math.floor((time.getMonth() + 3) / 3),
    "S": time.getMilliseconds()
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }

  return format;
}

function cutStr(str, num) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

  if (str.replace(/[\u4e00-\u9fa5]/g, '**').length <= num) {
    return str;
  }

  var len = 0;
  var tmpStr = '';

  for (var i = 0; i < str.length; i++) {
    if (/[\u4e00-\u9fa5]/.test(str[i])) {
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

function htmlToText(oHtml) {
  var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof oHtml === "string") {
    var str = oHtml;
    debugger;
    if (wrap === false) str.replace(/[\r\n]/g, "");else {
      console.log(/\r\n/.test(str));
      str.replace(/\r\n/, "444");
      console.log(str);
    }
    return str;
  } else {
    return "";
  }
}

var cutHtml = function cutHtml(oHtml, length, isByte) {
  var rgx1 = /<[^<^>^\/]+>/;
  var rgx2 = /<\/[^<^>^\/]+>/;
  var rgx4 = /<[^<^>]+>/;
  var selfTags = "hr,br,img,input,meta".split(",");

  if (typeof oHtml !== "string") {
    return "";
  }

  oHtml = oHtml.replace(/(^\s*)|(\s*$)/g, "").replace(/[\r\n]/g, "");
  var oStr = oHtml.replace(/<[^<^>]*>/g, "");
  var olen = isByte ? oStr.replace(/[^\x00-\xff]/g, "**").length : oStr.length;

  if (!/^\d+$/.test(length) || olen <= length) {
    return oHtml;
  }

  var tStr = oHtml;
  var index = 0;
  var matchs = new Array();

  while (rgx4.test(tStr)) {
    var m = new Object();
    m.index = index + tStr.search(rgx4);
    m.string = tStr.match(rgx4).toString();
    var len = tStr.search(/<[^<^>]+>/) + tStr.match(/<[^<^>]+>/)[0].length;
    tStr = tStr.substr(len);
    index += len;
    matchs.push(m);
  }

  if (isByte) {
    var i = 0;

    for (var z = 0; z < oStr.length; z++) {
      i += oStr.charCodeAt(z) > 255 ? 2 : 1;

      if (i >= length) {
        tStr = oStr.slice(0, z + 1);
        break;
      }
    }
  } else {
    tStr = oStr.substr(0, length);
  }

  var startTags = new Array();

  for (var i = 0; i < matchs.length; i++) {
    if (tStr.length <= matchs[i].index) {
      matchs = matchs.slice(0, i);
      break;
    } else {
      tStr = tStr.substring(0, matchs[i].index) + matchs[i].string + tStr.substr(matchs[i].index);

      if (rgx1.test(matchs[i].string.replace(/(\/\/)/g, ""))) {
        var name = matchs[i].string.replace(/[<>]/g, "").split(" ");

        if (name.length > 0) {
          name = name[0];

          if (!selfTags.includes(name)) {
            startTags.push(name);
          }
        }
      } else if (rgx2.test(matchs[i].string)) {
        var name = matchs[i].string.replace(/[<\/>]/g, "");

        if (startTags.length > 0 && startTags[startTags.length - 1] === name) {
          startTags.pop();
        }
      }
    }
  }

  if (startTags.length > 0) {
    for (var i = startTags.length - 1; i >= 0; i--) {
      tStr += "";
    }
  }

  return tStr;
};

var index = {
  dateFormat: dateFormat,
  cutStr: cutStr,
  htmlToText: htmlToText,
  cutHtml: cutHtml
};

export default index;
//# sourceMappingURL=mycm-utils.esm.js.map
