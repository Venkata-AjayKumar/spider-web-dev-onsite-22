
document.getElementById("search").addEventListener("click", myFunction);

function myFunction() {
    const profilename=document.getElementById("profilename");
    const repository=document.getElementById("repository")
    const followers=document.getElementById("followers")
    const following=document.getElementById("following")
    profilename.innerHTML="This is his profile name";
    repository.innerHTML="These are his repository";
    followers.innerHTML="There are these many followers to him";
    following.innerHTML="These many he is following";

}