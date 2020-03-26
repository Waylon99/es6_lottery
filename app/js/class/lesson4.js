/*
* @Author: Waylon
* @Date:   2019-05-06 20:29:43
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-23 12:13:59
*/
{
    console.log('a','\u0061');//a a
    console.log('a','\u20BB7');//a ₻7
    console.log('s','\u{20BB7}')//s 𠮷
}

{
    // ES5
    let s='𠮷';
    console.log('length',s.length);//length 2
    console.log('0',s.charAt(0));//0 �
    console.log('1',s.charAt(1));//1 �
    console.log('at0',s.charCodeAt(0));//at0 55362
    console.log('at1',s.charCodeAt(1));//at1 57271
    // ES6
    let s1='𠮷a';
    console.log('length',s1.length);//length 3
    console.log('code0',s1.codePointAt(0));//code0 134071
    console.log('code0',s1.codePointAt(0).toString(16));//code0 20bb7
    console.log('code1',s1.codePointAt(1));//code1 57271
    console.log('code2',s1.codePointAt(2));//code2 97
}

// 取码值
{
    // ES5
    console.log(String.fromCharCode("0x20bb7"));//ஷ
    // ES6
    console.log(String.fromCodePoint("0x20bb7"));//𠮷
}
// 遍历字符串
{
    let str='\u{20bb7}abc';

    // ES5
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);//es5 �
         // es5 �
         // es5 a
        // es5 b
        // es5 c
    }
    // ES6
    for(let code of str){
        console.log('es6',code);
        // es6 𠮷
        //  es6 a
        // es6 b
        // es6 c
    }
}
// 判断字符串中包含某些字符，起始截止
{
    let str="string";
    console.log('includes',str.includes("r"));//true
    console.log('start',str.startsWith("str"));//true
    console.log('end',str.endsWith("ng"));//true
}
// 重复字符串
{
    let str="abc";
    console.log(str.repeat(2));//abcabc
}
// ES6中的模板字符串
{
    let name="list";
    let info="hello world";
    let m=`im ${name},${info}`;//数字1左边的键`,数值项用${变量}
    console.log(m);//im list,hello worldim list,hello world
}

// ES7中的草案，加babel-polyfill在ES6中也可以使用
{
    console.log('1'.padStart(2,'0'));//此api常用日期中补白，向前补 01
    console.log('1'.padEnd(2,'0'));//此api常用日期中补白，向后补 10
}

// 标签模板,1.用于字符串过滤，防止XML攻击2.处理多语言转换
{
    let user={
        name:'list',
        info:'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`);//i am ,,,listhello world
    function abc(s,v1,v2){
        console.log(s,v1,v2);//["i am ", ",", "", raw: Array(3)] "list" "hello world"
        return s+v1+v2;
    }
}

{
   console.log(String.raw`Hi\n${1+2}`);//String.raw用于转意 Hi\n3
   console.log(`Hi\n${1+2}`);//Hi
   // 3
}