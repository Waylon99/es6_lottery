/*
* @Author: Waylon
* @Date:   2019-05-26 16:01:12
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-26 16:20:23
*/
// 基本定义和生成实例
{

    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent)//构造函数和实例 Parent {name: "v"}
}
// 继承
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Chlid extends Parent{

    }
    console.log('继承',new Chlid());//继承 Chlid {name: "mukewang"}
}
// 继承和传递参数
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Chlid extends Parent{
        constructor(name='child'){
            super(name);//使用super子类向父类传递参数
            // 注意super放在构造函数的第一行
            this.type='child';//
        }
    }
    console.log('继承和传递参数',new Chlid());//继承和传递参数 _Chlid {name: "child", type: "child"}
    console.log('继承和传递参数',new Chlid('hello'));//继承和传递参数 _Chlid {name: "hello", type: "child"}
}
// getter和setter
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        get longName(){
            return 'mk'+this.name
        }
        set longName(value){
            this.name=value;
        }
    }
    let v=new Parent();
    console.log('getter',v.longName);//getter mkmukewang
    v.longName='hello';
    console.log('setter',v.longName);//setter mkhello
}
// 静态方法使用
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();//tell

}

// 静态属性
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }
    Parent.type='test';
    console.log('静态属性',Parent.type);//静态属性 test
}