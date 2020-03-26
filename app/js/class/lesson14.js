{
  //自定义iterator接口，以便可以用for...of循环
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end); //先将这两个数组连接起来
      let len=arr.length;
      return {   //返回一个对象，这个对象有next()方法，next()方法又返回一个对象
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key); // 1 3 2 7 9 8
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}