$(document).ready(()=>{
    //Ajax Call
    $.get("/api/posts", (results) => {
        outputPosts(results, $(".postsContainer"));
    })
})