/*
* @Author: Waylon
* @Date:   2020-02-17 00:03:39
* @Last Modified by:   Waylon
* @Last Modified time: 2020-02-17 00:39:08
*/
{
    // genertaor基本定义
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k=tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }
}

{
    let state=function* (){
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//     let state=async function (){
//         while (1) {
//             await 'A';
//             await 'B';
//             await 'C';
//         }
//     }
//     let status=state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }
{
    //功能:实现前端抽奖次数的限制

    //具体抽奖的逻辑
    let draw=function(count){
      //这里写具体的抽奖逻辑
      console.info(`剩余${count}次`);
    }

    //次数减1
    let reduice=function* (count){
      while(count>0){
        count--;
        yield draw(count);
      }
    }

    //开始抽奖
    let start=reduice(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent="抽奖";
    document.body.appendChild(btn);
    document.getElementById("start").addEventListener('click',function(){
        start.next();
    },false);
}

{
  //长轮询
  let ajax=function* (){
    yield new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({code:1});
        },2000);
    });
  }

  let pull=function(){
    let genertaor=ajax();
    let step=genertaor.next();
    step.value.then(function(d){  //这里的d就是上面的{code:0}
      if(d.code!=0){
        setTimeout(function(){
           console.log('wait');
           pull();
        });
      }else{
        console.log(d);
      }
    })
  }

  pull();
}