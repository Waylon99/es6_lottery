/*
* @Author: Waylon
* @Date:   2019-05-06 16:40:48
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-22 20:14:36
*/
{
    // 构造函数
    let regex= new RegExp('xyz','i');//第一个参数是字符串，第二个是修饰符
    let regex2= new RegExp(/xyz/i);//第一个参数是正则表达式，不接受第二个参数否则报错

    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.flags);//原有正则对象的修饰符是ig，它会被第二个参数i覆盖
}
// 字符串对象的4个使用正则表达式的方法：match()\replace()\search()\split()这四个方法全部调用RegExp实例的方法
{
    //y修饰符
    let s = 'bbb_bb_b';
    let a1=/b+/g;
    let a2=/b+/y;
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));
    console.log(a1.sticky,a2.sticky);//表示是否开启了粘连模式
}

{
   console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//false
   console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//true
   // 大括号表示Unicode字符，只有加上u才能识别
   console.log(/\u{61}/.test('a'));
   console.log(/\u{61}/u.test('a'));
   // 点（.）字符不能识别编码大于0xFFFF的Unicode字符，必须加上u修饰字符
   console.log('\u{20BB7}');
   let s='𠮷';
   // 使用u修饰符后，所有量词都会正确识别编码大于0xFFFF的Unicode字符
   console.log('u',/^.$/.test(s));//false
   console.log('u-2',/^.$/u.test(s));//true
   console.log('test',/𠮷{2}/.test('𠮷𠮷'));
   console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
   // 正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符除外
}