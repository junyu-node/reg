//? 当该字符紧跟在任何一个其他限制符
// （*,+,?，{n}，{n,}，{n,m}）后面时，
// 匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串
// ，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。
// 例如，对于字符串“oooo”，“o+?”将匹配单个“o”，
// 而“o+”将匹配所有“o”。

var reg=/[a-zA-Z]+?/g;
var reg1=/[a-zA-Z]+/g
var str='sasdqwew23q3e4a6s7d9asdas';
console.log(str.match(reg));//[ 's','a','s','d','q','w','e','w','q','e','a', 's'...]

console.log(str.match(reg1)); //[ 'sasdqwew', 'q', 'e', 'a', 's', 'd', 'asdas' ]