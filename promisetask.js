//  1.create 3 promise with name as follows
// 1.roomclean
// 2.removeGarbage 
// 3.GetthePrice


// Promise chaining 

// Promise.all method over it


let roomClean = new Promise((resolve, reject)=>{
    let isroomclean = true;
    if(isroomclean){
        resolve("Room is cleaned.");
    }
    else{
        reject("Room is not cleaned");
    }

});


let removeGarbage = new Promise((resolve, reject)=>{
    let removeGarbage=false;
    if(removeGarbage){
        resolve("So,Garbage has been removed.");
    }
    else{
        reject("Still, Garbage has not been removed");
    }
});

let getThePrice = new Promise((resolve, reject)=>{
   let getThePrice= true;
   if(getThePrice){
       resolve("Then,You got the price");
   }
   else{
       reject("Yet, You won't got the price");
   }
});

// roomClean.then((msg)=>{
//      let msg1 =`${msg}`;
//     removeGarbage.then((msg)=>{
//         msg1 +=` ${msg}`;
//         getThePrice.then((msg)=>{
//             msg1 +=` ${msg}`;
//             console.log(`${msg1}."Finally You got your reward"`);
//         })
//         .catch((err)=>{
//             console.log(`${err}`);
            
//         })
//         .catch((err)=>{
//             console.log(`${err}`)
//         })
//         .catch((err)=>{
//             console.log(`${err}`)
//         });
//     });
// });



// Promise.all

const promisee=Promise.all([roomClean,removeGarbage,getThePrice]);

promisee.then((res)=>{
    console.log(res);
    console.log("All Promises are resolved");
})
.catch((res)=>{

    console.log(res);
    console.log("All Promises are rejected");
});





