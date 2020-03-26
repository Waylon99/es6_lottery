/*
* @Author: Waylon
* @Date:   2019-05-25 20:24:13
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-26 14:47:18
*/
// Set数据结构
// 添加元素
{
    // 声明一个set
    let list = new Set();
    // add方法向Set集合中添加数据
    list.add(5);
    list.add(7);
    //size 相当于数组中的length
    console.log('size',list.size);//size 2
}

{
    let arr = [1,2,3,4,5];
    //set将arr数组转换成list Set 集合
    let list = new Set(arr);

    console.log('size',list.size);//size 5
}
// Set数据结构中的数据必须为唯一的
{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);//不会报错，但是不会生效，常用于组去重
    console.log(list);//Set(2) {1, 2}
    // 数组去重
    // 但是在进行的时候不会做数据类型的转换
    // 因此在进行转换时一定要注意数据类型一致
    let arr=[1,2,3,1,2];
    let list2=new Set(arr);
    console.log('unique',list2);//unique Set(3) {1, 2, 3}
}

// Set数据结构中常用的方法
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    // 判断是否有
    console.log('has',list.has('add'));//has true
    // 删除
    console.log('delete',list.delete('add'),list);//delete true Set(3) {"delete", "clear", "has"}
    // 清空
    list.clear();
    console.log('list',list);//list Set(0) {}
}
// Set的遍历
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    // 遍历key
    for(let key of list.keys()){
        console.log('keys',key);
        /*
        keys add
        keys delete
        keys clear
        keys has
        */
    }
    // 变量值
    for(let value of list.values()){
        console.log('value',value);
        /*
        value add
        value delete
        value clear
        value has
        */
    }
     // 变量值
    for(let value of list){
        console.log('value',value);
        /*
        value add
        value delete
        value clear
        value has
        */
    }
    // 遍历值和key
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
        /*
        entries add add
        entries delete delete
        entries clear clear
        entries has has
        */
    }
    // forEach
    list.forEach(function(item){console.log(item);})
    /*
    add
    delete
    clear
    has
    */
}
// WeakSet数据类型只能是对象
// 是一个弱引用
{
    let weakList = new WeakSet();
    let arg={};
    weakList.add(arg);
    // weakList.add(2);报错，不支持的类型，只支持对象类型
    //没有clear方法，没有size属性，不能遍历，其他方法与Set相似
    console.log('weakList',weakList);//weakList WeakSet {{…}}
}
// Map对象
// 第一种定义方法
{
    let map = new Map();
    let arr = ['123'];
    // map添加元素，是一个key,value
    map.set(arr,456);
    // map.get()获取值
    console.log('map',map,map.get(arr));//map Map(1) {Array(1) => 456} 456

}
// 第二种定义方法
{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);//map args Map(2) {"a" => 123, "b" => 456}
    //常用的方法,与Set相似
    console.log('size',map.size);//size 2
    console.log('delete',map.delete('a'),map);//delete true Map(1) {"b" => 456}
    console.log('clear',map.clear(),map);///clear undefined Map(0) {}
    // 遍历与Set相似
}

//WeakMap的key只能是对象
//没有clear方法，没有size属性，不能遍历，其他方法与Set相似
{
    let weakmap = new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));//123
}
// map与数组比较
{
    // 数据结构横向对比，增删改查
    let map=new Map();
    let array=[];
    // 增
    map.set('t',1);
    array.push({t:1});
    console.log('map-array',map,array);//map-array Map(1) {"t" => 1} [{…0: {t: 1}}]
    // 查
    // map返回布尔值，array返回当前对象
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.log('map-array',map_exist,array_exist);//map-array true {t: 1}
    // 改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.log('map-array-modify',map,array);
    //map-array-modify Map(1) {"t" => 2} [{0: {t: 2}}]
    // 删除
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('map-array-empty',map,array);//map-array-empty Map(0) {} []

}
// set与数组的比较
{

    let set = new Set();
    let array=[]
    // 增
    set.add({t:1});
    array.push({t:1});
    console.log('set-array',set,array);//set-array Set(1) {{…}}size: (...)__proto__: Set[[Entries]]: Array(1)0: Objectlength: 1 [{…}]
    // 查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.log('set-array',set_exist,array_exist);//set-array false {t: 1}
    // 改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log('set-array-modify',set,array);///set-array-modify Set(1) {{…}} [{…}]
    // 删除
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
     console.log('set-array-empty',set,array);//set-array-empty Set(0) {} []
}

{
    // map,set,object对比
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};

    // 增
    map.set('t',1);
    set.add(item);
    obj['t']=1;

    console.info('map-set-obj',obj,map,set);//map-set-obj {t: 1} Map(1) {"t" => 1} Set(1) {{…}}
    // 查
    console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })//{map_exist: true, set_exist: true, obj_exist: true}
    // 改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.info('map-set-obj-modify',obj,map,set);//map-set-obj-modify {t: 2} Map(1) {"t" => 2} Set(1) {{…}}
    // 删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty',obj,map,set);//map-set-obj-empty {} Map(0) {} Set(0) {}
}
// 总结：
// 在涉及数据结构，优先使用map，如果考虑唯一用set，放弃传统的obj和数组