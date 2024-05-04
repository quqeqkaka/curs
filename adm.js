
document.getElementById("openModal").addEventListener("click", function(){
    document.getElementById("modal").classList.remove('visibleBox')
});
document.getElementById("closeModal").addEventListener("click",function(){
    document.getElementById("modal").classList.add("visibleBox")
});