/**
 * Created by Administrator on 2016/6/16.
 */
// \1，\2 对序号为1和2的捕获组的反向引用

//“(a|b)\1”在匹配“abaa”时，匹配成功，匹配到的结果是“aa”。
// “(a|b)”在尝试匹配时，虽然既可以匹配“a”，也可以匹配“b”，
// 但是在进行反向引用时，对应()中匹配的内容已经是固定的了。

var reg=/(a|b)\1/g;
var reg2=/(a|b)(\w)\2/g;
var str='abaabbdsfsdfsd';
console.log(reg)

console.log(str.match(reg)); [ 'aa', 'bb' ]
console.log(str.match(reg2)) [ 'baa' ]