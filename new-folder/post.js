function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
function displayPost(posts){
    const section=document.getElementById("post-container");
    for(const post of posts){
        // console.log(post)
        const sectionElement=document.createElement("section");
        sectionElement.classList.add(".postStyle")
        sectionElement.innerHTML=`
           <h4>${post.title}</h4>
           <p>${post.body}</p>
        `;
        section.appendChild(sectionElement);
}
    }
    
loadPost()