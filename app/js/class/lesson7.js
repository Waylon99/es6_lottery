/*
* @Author: Waylon
* @Date:   2019-05-22 19:43:26
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-22 20:23:37
*/
// 默认值使用
{
    function test(x,y = 'world'){
        console.log('默认值',x,y);
    }
    test('hello');//默认值 hello world
    test('hello','kill');//默认值 hello kill
}
// 作用域问题
{
    let x='test';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('kill')
    //test2()//不赋值时为undefined undefined
}
// rest 参数 相当于es5中的arguments，rest参数将离散的值转换成数组
// arguments 方法
{
    function func(a, b){
    var args = Array.prototype.slice.call(arguments);
    console.log(args)
}
    func(1,2)
}
// rest参数后不能有其他的参数，否则会报错
{
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test3(1,2,3,4,'a');//rest // 1 2 3 4 a

}
// 扩展运算符将数组转化成离散的值
{
    console.log(...[1,2,4]);//1 2 4
    console.log('a',...[1,2,4]);//a 1 2 4
}
// 箭头函数
{
    let arrow = v => v*2;//带参数
    let arrow2 = () => 5;//不带参数
    console.log(arrow(3));//6
    console.log(arrow2());//5
}
// 伪调用,递归涉及函数嵌套，提升性能优化
{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123);//tail 123
}