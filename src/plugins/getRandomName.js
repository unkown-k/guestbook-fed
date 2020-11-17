import a from "@/plugins/array.js";
// 获取指定范围内的随机数
function randomAccess() {
    return a[Math.floor(Math.random() * a.length)];
}

// 解码
function decodeUnicode(str) {
    //Unicode显示方式是\u4e00
    str = "\\u" + str;
    str = str.replace(/\\/g, "%");
    //转换中文
    str = unescape(str);
    //将其他受影响的转换回原来
    str = str.replace(/%/g, "\\");
    return str;
}

/*
 *@param Number NameLength 要获取的名字长度
 */
function getRandomName(NameLength) {
    let name = "";
    for (let i = 0; i < NameLength; i++) {
        let unicodeNum = "";
        unicodeNum = randomAccess().toString(16);
        name += decodeUnicode(unicodeNum);
    }
    return name;
}

export { getRandomName };
