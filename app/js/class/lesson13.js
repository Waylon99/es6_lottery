/*
* @Author: Waylon
* @Date:   2019-05-26 17:15:37
* @Last Modified by:   Waylon
* @Last Modified time: 2019-05-26 21:53:40
*/
// 基本定义
{
    // ES5
    let ajax=function(callback){
        console.log('执行')//执行
        setTimeout(function(){
            callback&&callback.call()
        },1000);
    };
    ajax(function(){
        console.log('timeout1');//timeout1
    })
}
// Promise
{
    let ajax=function(){
        console.log('执行2');//执行2
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000);
        })
    };
    ajax().then(function(){
        console.log('promise','timeout2');//promise timeout2
    })
}

{
     let ajax=function(){
        console.log('执行3');//执行3
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000);
        })
    };
    ajax().then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000);
        }).then(function(){
            console.log('timeout3');//timeout3
        })
    })
}

{
    let ajax=function(num){
        console.log('执行4');//执行4
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw new Error('出错了');
            }
        })
    }
    ajax(6).then(function(){
        console.log('log',6);//log 6
    }).catch(function(){
        console.log('catch',err);
    });
    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
        /*
        catch Error: 出错了
        at index.js:9683
        at new Promise (<anonymous>)
        at _ajax3 (index.js:9679)
        at Object.<anonymous> (index.js:9692)
        at __webpack_require__ (index.js:20)
        at Object.<anonymous> (index.js:58)
        at __webpack_require__ (index.js:20)
        at Object.<anonymous> (index.js:47)
        at __webpack_require__ (index.js:20)
        at index.js:40
        */
    });
}