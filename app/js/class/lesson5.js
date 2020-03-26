/*
* @Author: Waylon
* @Date:   2019-05-08 14:13:02
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-23 12:34:48
*/
{
    // 二进制
    console.log('B',0B111110111);//B 503
    // 八进制
    console.log(0o767);//503
}

{
    // 判断数字是否有限
    console.log('15',Number.isFinite(15));//15 tNaN falserue//
    console.log('NaN',Number.isFinite(NaN));//NaN false
    console.log('1/0',Number.isFinite(1/0));//1/0 false
    console.log('NaN',Number.isNaN(NaN));//NaN true
    console.log('0',Number.isNaN(0));//0 false

{
    // 判断是否整数
    console.log('25',Number.isInteger(25));//25 true
    console.log('25.0',Number.isInteger(25.0));//25.0 true
    console.log('25.1',Number.isInteger(25.1));//25.1 false
    console.log('25.1',Number.isInteger('25.1'));//25.1 false
}

{
    // 数的上限和下限
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);//9007199254740991 -9007199254740991
    // 判断数字是否在上下范围之内
    console.log('10',Number.isSafeInteger(10));//10 true
    console.log('10',Number.isSafeInteger('10'));//10 false

}
{
        // 返回小数的整数
    console.log(4.1,Math.trunc(4.1));//4.1 4
    console.log(4.9,Math.trunc(4.9));//4.9 4
}

{
    // 判断正负数,返回0，-1,1，NaN
    console.log('-5',Math.sign(-51));//-5 -1
    console.log('0',Math.sign(0));//0 0
    console.log('5',Math.sign(5));//5 1
    console.log('foo',Math.sign('foo'));//foo NaN
}
// 立方更 Math.cbrt
{
    console.log('-1',Math.cbrt(-1));//-1 -1
    console.log('8',Math.cbrt(8));//8 2
}