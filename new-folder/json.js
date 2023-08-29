function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
function displayUser(data){
    const ul=document.getElementById("user-list");
    for(const user of data){
        console.log(user.username)
        const li=document.createElement("li");
        li.innerText=user.username;
        ul.appendChild(li)

    }
  
   
}