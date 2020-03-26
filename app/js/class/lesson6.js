/*
* @Author: Waylon
* @Date:   2019-05-11 21:52:24
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-23 12:43:21
*/
// Array.of不传值为空数组
{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);//arr= (5) [3, 4, 7, 9, 11]
    let empty=Array.of();
    console.log('empty=',empty);//empty= []
}

{
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
        // es6
// 慕课网
// waylon

    });
    console.log(Array.from([1,3,5],function(item){return item*2 }))//(3) [2, 6, 10]
}
// 填充数组
{
    console.log('fill-7',[1,'a',undefined].fill(7));//fill-7 (3) [7, 7, 7]
    console.log('fill,pos',['a','b','c'].fill(7,1,3))//fill,pos (3) ["a", 7, 7]
}
// 遍历
{
    // 遍历下标，存在兼容性问题
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);
        // keys 0
// keys 1
//keys 2
    }
    // 遍历值，存在兼容性问题
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);
        // values 1
// values c
//  values ks
    }
    // 遍历下标和值，entries()不存在兼容性问题
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);
//         values 0 1
// values 1 c
// values 2 ks
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));
    // (5) [4, 2, 3, 4, 5]
}
// 查找
{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));//找出第一个符合条件的就不再往后找 4
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//返回下标 3
}
// 判断是不是包含，寻找满足条件的结果，能够处理NaN
{
    console.log('number',[1,2,NaN].includes(1));//number true
    console.log('number',[1,2,NaN].includes(NaN));//number true
}