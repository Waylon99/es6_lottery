/*
* @Author: Waylon
* @Date:   2019-05-24 20:39:52
* @Last Modified by:   Waylon
* @Last Modified time: 2020-02-18 23:55:33
*/
{
    // 简介表达
    let o=1;
    let k=2;
    // ES5
    let es5={
        o:o,
        k:k
    };
    // ES6
    let es6={
        o,
        k
    };
    console.log(es5,es6);
    // Objectk: 2o: 1__proto__: Objec、t Objectk: 2o: 1__proto__: Object
    // ES5对象中的方法
    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    // ES6对象中的方法
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello());
    // hello
//hello
//undefined undefined
}
// 属性表达式
{
    // 属相表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };
    let es6_obj={
        [a]:'c'
    };
    console.log(es5_obj,es6_obj);//{a: "c", b: "c"} {b: "c"}
}
// obj中常用的api
{
    // 判断两个字符串是否相等
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//字符串 true true
    // 判断数组是否相等
    // 注意1.数组也是引用类型2.Object.is()与===一样，没有区别
    console.log('数组',Object.is([],[]),[]===[]);//数组 false false
    // 拷贝Object.assign()
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//拷贝 {a: "a", b: "b"} 浅复制
    // entries()
    let test={k:123,o:456};
    for( let [key,value] of Object.entries(test)){
        console.log([key,value]);
        // (2) ["k", 123]
        // (2) ["o", 456]
    }
}
// 扩展运算符,babel支持不好
{
    let {a，b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
}