/*
* @Author: Waylon
* @Date:   2019-05-06 13:33:21
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-22 22:09:59
*/
// 数组解构赋值
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);//1 2
}
// ...rest数组解构赋值
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);//1 2 (4) [3, 4, 5, 6]
}
// 对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);//1 2
}
// 解构赋值中的默认值，防止没有配对成功中的undefined
{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c);//1 2 3
}
// 解构赋值用于变量交换
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);//2 1
}
//
{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);//1 2
}
// 返回多个值时选择性的接收其中的值
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);//1 4
}
//...用于不确定数组返回的长度为多少，把第一个元素取出，其他的返回一个数组
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b]=f();
    console.log(a,b);//1 (3) [3, 4, 5]
}
// 对象解构赋值按照key:value去匹配
{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);//42 true
}
// 对象解构赋值使用默认值
{
    let {a=10,b=5}={a:3}
    console.log(a,b);//3 5
}
// 嵌套对象使用
{
    let metaDate={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaDate;
    console.log(esTitle,cnTitle);//abc test
    //1 4abc test
}