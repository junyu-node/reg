// .点 匹配除“\r\n”之外的任何单个字符。要匹配包括“\r\n”在内的任何字符，请使用像“[\s\S]”的模式。

var reg=/.+/g;
var reg1=/[\s\S]+/g;
console.log('assdlk8554867486\n\rasdhuijk.lkashjdsadnlpo./'.match(reg));//[ 'assdlk8554867486', 'asdhuijk.lkashjdsadnlpo./' ]
console.log('assdlk8554867486\n\rasdhuijk.lkashjdsadnlpo./'.match(reg1));//[ 'assdlk8554867486\n\rasdhuijk.lkashjdsadnlpo./' ]