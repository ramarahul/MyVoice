$(document).ready(()=>{
    //Ajax Call
    $.get("/api/posts/" + postId, (results) => {
        outputPostsWithReplies(results, $(".postsContainer"));
    })
})