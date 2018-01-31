var getUser = (id, callback) =>{
     var user = {
         id: id,
         name:'Aimable'
     };
     //it will delay 3 second then executes the callback(user) details.
     setTimeout(() =>{
         callback(user);
     }, 3000);

}
getUser(31, (userObject) =>{
   console.log(userObject);
});
