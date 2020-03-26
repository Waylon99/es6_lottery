/*
* @Author: Waylon
* @Date:   2019-05-24 21:14:36
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-24 21:43:18
*/
// Symbol用法
{
// 声明Symbol独一无二
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);//false
    // 生成的为key值
    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3===a4);//true
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj)//obj {abc: 345, c: 456, Symbol(abc): "123"}
    // 只能拿到非Symbol变量作为key值的属性
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);//let of abc 345 let of c 456
    }
    // 此api可以拿到Symbol变量作为key的属性
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);//123
    })
    //包含所有
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
    })
}