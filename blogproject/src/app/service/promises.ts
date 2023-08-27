export function getUsers(){
    let users=[{id:1, name:'shalni'}]
    return users;
}

export function getusersWithDelay(callback:Function){
    console.log(callback)
  //async
  setTimeout(() => {
    let users=[{id:2, name:'Rohit'}]
    console.log('after time up')
    console.log(users)
     callback(users); // pass this users data to the caller
  }, 3000);
}
let status = true
export function getusersWithPromise(){
 return new Promise((success, errror)=>{
    setTimeout(() => {
        if(status){
            fetch('http://localhost:3000/blogs')
            .then(res=>res.json())
            .then(data=>  success(data))
            // let users=[{id:20, name:'Nishant Promise'}]
            // console.log('after time up')
            // console.log(users)
            // success(users); // pass this users data to the caller
        }
        else{
            errror('something went wrong')
        }
      }, 3000);
 })
  
}