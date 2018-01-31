/* Promises are called only once, non way to call the function twice, when the function is ,
* in waiting moment is called pending promises, and when is executed is called saddle,
*
* */

var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else{
                reject('Arguments must be numbers');
            }

        }, 1500);
    })
};
asyncAdd(5, 7).then((res) =>{
    console.log('Result: ', res);
    return asyncAdd(res, 33);
},(errorMessage) =>{
    console.log(errorMessage);
}).then((res) =>{//Promises chaining
    console.log('Should be ', res);
}).catch((errorMessage) => {//Catching errors.
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve('Hey it worked!');
//         reject('Unable to fullfill promise');
//     }, 2500);
//
// });
// somePromise.then((message) =>{
//     console.log('Success: ', message);
// }, (errorMessage) =>{
//     console.log('Error: ', message);
// });